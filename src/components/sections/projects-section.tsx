
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Move } from 'lucide-react'; // Added Move
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect, useCallback } from 'react'; // Added useState, useEffect, useCallback

export function ProjectsSection() {
  // Duplicate projects for a seamless marquee effect
  const displayProjects = [...projects, ...projects, ...projects]; 
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragAnchorX = useRef(0); // Mouse X position at drag start
  const scrollAnchorX = useRef(0); // scrollLeft (offsetX) at drag start
  const offsetX = useRef(0); // Current translateX value for the marquee content
  const DRAG_SENSITIVITY = 1.5; // Multiplier for drag distance

  // Set initial position to show the "middle" set of duplicated skills
  useEffect(() => {
    if (marqueeTrackRef.current) {
        const contentSetWidth = marqueeTrackRef.current.scrollWidth / 3;
        offsetX.current = -contentSetWidth;
        marqueeTrackRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!marqueeTrackRef.current || !viewportRef.current) return;
    setIsDragging(true);
    dragAnchorX.current = e.clientX;
    scrollAnchorX.current = offsetX.current;
    viewportRef.current.style.cursor = 'grabbing';
    if(marqueeTrackRef.current) {
      marqueeTrackRef.current.style.transition = 'none'; // Disable transition during drag for responsiveness
    }
    e.currentTarget.setPointerCapture(e.pointerId); // Capture pointer for consistent events
  };

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !marqueeTrackRef.current) return;
    // e.preventDefault(); // Already on viewport, so might not be needed unless issues
    
    const deltaX = e.clientX - dragAnchorX.current;
    let newOffsetX = scrollAnchorX.current + deltaX * DRAG_SENSITIVITY;

    const contentSetWidth = marqueeTrackRef.current.scrollWidth / 3;

    // Infinite scroll illusion logic: Re-adjust offsetX and scrollAnchorX if scrolled too far
    if (newOffsetX > 0) { 
        newOffsetX -= contentSetWidth;
        scrollAnchorX.current -= contentSetWidth; 
    } else if (newOffsetX < -contentSetWidth * 2) { 
        newOffsetX += contentSetWidth;
        scrollAnchorX.current += contentSetWidth;
    }
    
    offsetX.current = newOffsetX;
    marqueeTrackRef.current.style.transform = `translateX(${offsetX.current}px)`;
  }, [isDragging, DRAG_SENSITIVITY]);


  const handlePointerUpOrLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      if (viewportRef.current) {
        viewportRef.current.style.cursor = 'grab';
      }
      // Optional: Add a subtle coasting effect by re-enabling transition
      // if (marqueeTrackRef.current) {
      //   marqueeTrackRef.current.style.transition = 'transform 0.2s ease-out';
      // }
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  // Effect for global listeners to handle dragging outside the component bounds
   useEffect(() => {
    const currentViewport = viewportRef.current; // Capture current value for cleanup

    const onMove = (event: PointerEvent) => {
      if (isDragging) {
        // Synthesize a React.PointerEvent like object if needed by handlePointerMove, 
        // or ensure handlePointerMove can work with native PointerEvent
         const syntheticEvent = event as unknown as React.PointerEvent<HTMLDivElement>;
         handlePointerMove(syntheticEvent);
      }
    };

    const onUp = (event: PointerEvent) => {
      if (isDragging) {
         const syntheticEvent = event as unknown as React.PointerEvent<HTMLDivElement>;
        // If handlePointerUpOrLeave is attached to viewportRef, it needs to be called directly
        // For simplicity, we directly call the logic here or ensure it's callable.
        setIsDragging(false);
        if (currentViewport) { // Check if currentViewport is not null
            currentViewport.style.cursor = 'grab';
        }
        // No direct need for e.currentTarget.releasePointerCapture if using document
      }
    };
    
    if (isDragging) {
      document.addEventListener('pointermove', onMove);
      document.addEventListener('pointerup', onUp);
    }

    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
       if (isDragging && currentViewport) { // Clean up cursor if drag ends due to unmount
           currentViewport.style.cursor = 'grab';
       }
    };
  }, [isDragging, handlePointerMove]);


  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 sm:mb-16 text-primary">
          Featured Projects
        </h2>
        <div
          ref={viewportRef}
          className="overflow-hidden whitespace-nowrap relative group" // Added group for "Drag me"
          style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y' }} // touchAction for better mobile scroll
          onPointerDown={handlePointerDown}
          onPointerMove={isDragging ? handlePointerMove : undefined} // Only handle move if dragging
          onPointerUp={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave} // Handle if mouse leaves component while dragging
        >
          <div
            ref={marqueeTrackRef}
            className="flex py-4 will-change-transform" // Removed animation class
          >
            {displayProjects.map((project, index) => (
              <div 
                key={`${project.id}-${index}`} 
                className="mx-3 flex-shrink-0"
                style={{ userSelect: 'none' }} // Prevent text selection on cards during drag
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
                        draggable="false" // Prevent image dragging
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
                            <Badge key={tech} variant="secondary" className="font-code text-[8px] xs:text-[9px] sm:text-[10px] px-1 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-1 sm:space-x-1.5 pt-0 pb-1.5 px-1.5 sm:px-2 flex-shrink-0">
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> GitHub
                          </Link>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> Live Demo
                          </Link>
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
