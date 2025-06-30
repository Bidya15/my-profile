
"use client";

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Move } from 'lucide-react';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect, useCallback } from 'react';

const BASE_SPEED = 1.0; // Increased speed, adjust as needed
const DRAG_SENSITIVITY = 1.5;

export function ProjectsSection() {
  const displayProjects = [...projects, ...projects, ...projects];
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [isPausedByCardHover, setIsPausedByCardHover] = useState(false);

  const dragAnchorX = useRef(0);
  const scrollAnchorX = useRef(0);
  const offsetX = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const currentDirection = useRef(1); // 1 for RTL (translateX decreases), -1 for LTR (translateX increases)

  const animateMarquee = useCallback(() => {
    if (marqueeTrackRef.current && !isDragging && !isPausedByCardHover) {
      const contentSetWidth = marqueeTrackRef.current.scrollWidth / 3;
      const leftBoundary = -contentSetWidth * 2;
      const rightBoundary = -contentSetWidth;

      offsetX.current -= currentDirection.current * BASE_SPEED;

      if (currentDirection.current === 1) { // Moving RTL (towards left of screen)
        if (offsetX.current <= leftBoundary) {
          offsetX.current = leftBoundary;
          currentDirection.current = -1; // Change to LTR
        }
      } else { // Moving LTR (towards right of screen)
        if (offsetX.current >= rightBoundary) {
          offsetX.current = rightBoundary;
          currentDirection.current = 1; // Change to RTL
        }
      }
      marqueeTrackRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animateMarquee);
  }, [isDragging, isPausedByCardHover]);

  useEffect(() => {
    if (marqueeTrackRef.current) {
      const contentSetWidth = marqueeTrackRef.current.scrollWidth / 3;
      offsetX.current = -contentSetWidth; // Start with the middle set visible
      marqueeTrackRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animateMarquee);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animateMarquee]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('a, button')) {
      return;
    }
    
    if (!marqueeTrackRef.current || !viewportRef.current) return;
    setIsDragging(true);
    dragAnchorX.current = e.clientX;
    scrollAnchorX.current = offsetX.current;
    viewportRef.current.style.cursor = 'grabbing';
    if (marqueeTrackRef.current) {
      marqueeTrackRef.current.style.transition = 'none';
    }
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !marqueeTrackRef.current) return;

    const deltaX = e.clientX - dragAnchorX.current;
    let newOffsetX = scrollAnchorX.current + deltaX * DRAG_SENSITIVITY;
    const contentSetWidth = marqueeTrackRef.current.scrollWidth / 3;

    // Infinite scroll illusion logic
    if (newOffsetX > 0) {
      newOffsetX -= contentSetWidth;
      scrollAnchorX.current -= contentSetWidth;
    } else if (newOffsetX < -contentSetWidth * 2) {
      newOffsetX += contentSetWidth;
      scrollAnchorX.current += contentSetWidth;
    }

    offsetX.current = newOffsetX;
    marqueeTrackRef.current.style.transform = `translateX(${offsetX.current}px)`;
  }, [isDragging]);

  const handlePointerUpOrLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      if (viewportRef.current) {
        viewportRef.current.style.cursor = 'grab';
      }
      if (marqueeTrackRef.current) {
         // Optionally add a smooth transition back if desired, or remove for immediate effect
        // marqueeTrackRef.current.style.transition = 'transform 0.2s ease-out';
      }
      if (!animationFrameId.current && !isPausedByCardHover) {
        animationFrameId.current = requestAnimationFrame(animateMarquee);
      }
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };
  
  // Effect for global listeners for dragging outside viewport
  useEffect(() => {
    const currentViewport = viewportRef.current; 

    const onMove = (event: PointerEvent) => {
      if (isDragging) {
         const syntheticEvent = event as unknown as React.PointerEvent<HTMLDivElement>;
         handlePointerMove(syntheticEvent);
      }
    };

    const onUp = (event: PointerEvent) => {
      if (isDragging) {
         const syntheticEvent = event as unknown as React.PointerEvent<HTMLDivElement>;
        setIsDragging(false);
        if (currentViewport) { 
            currentViewport.style.cursor = 'grab';
        }
        if (!animationFrameId.current && !isPausedByCardHover) { // Resume animation if not paused by card
            animationFrameId.current = requestAnimationFrame(animateMarquee);
        }
      }
    };
    
    if (isDragging) {
      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    }

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
       if (isDragging && currentViewport) { 
           currentViewport.style.cursor = 'grab';
       }
    };
  }, [isDragging, handlePointerMove, animateMarquee, isPausedByCardHover]);


  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 sm:mb-16 text-primary">
          Featured Projects
        </h2>
        <div
          ref={viewportRef}
          className="overflow-hidden whitespace-nowrap relative group"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
        >
          <div
            ref={marqueeTrackRef}
            className="flex py-4 will-change-transform"
          >
            {displayProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="mx-3 flex-shrink-0"
                style={{ userSelect: 'none' }}
                onMouseEnter={() => setIsPausedByCardHover(true)}
                onMouseLeave={() => {
                  setIsPausedByCardHover(false);
                  if (!isDragging && !animationFrameId.current) {
                    animationFrameId.current = requestAnimationFrame(animateMarquee);
                  }
                }}
              >
                <Card
                  className={cn(
                    "animated-border-card group w-44 xs:w-48 sm:w-52 md:w-60 lg:w-64 shadow-xl flex flex-col h-full"
                  )}
                >
                  <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:-translate-y-1 group-hover:scale-105">
                    <div className="relative w-full h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500"
                        data-ai-hint={project.imageHint}
                        draggable="false"
                      />
                    </div>
                    <CardHeader className="pt-1.5 pb-0 xs:pt-2 xs:pb-0.5 flex-shrink-0 px-1.5 sm:px-2">
                      <CardTitle className="font-headline text-sm sm:text-base md:text-lg text-accent">{project.title}</CardTitle>
                      <CardDescription className="font-body text-[10px] xs:text-xs sm:text-sm text-foreground/80 h-8 xs:h-10 sm:h-12 line-clamp-2 sm:line-clamp-3 leading-snug mt-0.5">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end pt-0.5 pb-1 px-1.5 sm:px-2">
                      <div className="mb-0.5 sm:mb-1">
                        <h4 className="font-semibold text-[9px] xs:text-[10px] sm:text-xs mb-0.5 text-foreground">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-0.5">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} className="font-code text-[8px] xs:text-[9px] sm:text-[10px] px-1 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-1 sm:space-x-1.5 pt-0 pb-1.5 px-1.5 sm:px-2 flex-shrink-0">
                      {project.githubUrl && (
                        <Button asChild className="border-primary text-primary hover:bg-primary/10 text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> GitHub
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center space-x-1 px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium backdrop-blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <Move className="h-3 w-3" />
            <span>Drag me</span>
          </div>
        </div>
      </div>
    </section>
  );
}
