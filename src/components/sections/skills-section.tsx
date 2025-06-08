
"use client";

import type { LucideIcon } from 'lucide-react';
import { skillCategories } from '@/lib/data.tsx';
import type { Skill } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';
import type React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';

export function SkillsSection() {
  const allSkills = skillCategories.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      categoryTitle: category.title
    }))
  );

  const duplicatedSkills = [...allSkills, ...allSkills, ...allSkills]; // Triple for smoother extended drag

  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragAnchorX = useRef(0); // Mouse X position at drag start
  const scrollAnchorX = useRef(0); // scrollLeft (offsetX) at drag start

  // offsetX is the current translateX value for the marquee content
  const offsetX = useRef(0);
  
  const animationFrameId = useRef<number | null>(null);
  const currentDirection = useRef(1); // 1 for LTR (translateX decreases), -1 for RTL (translateX increases)
  
  const BASE_SPEED = 0.5; // Base pixels per frame for auto-scroll
  const DRAG_SENSITIVITY = 1.5; // Multiplier for drag distance

  const animateMarquee = useCallback(() => {
    if (marqueeRef.current && !isDragging) {
      const contentSetWidth = marqueeRef.current.scrollWidth / 3; // Width of one set of items

      offsetX.current -= currentDirection.current * BASE_SPEED;

      // Ping-pong logic
      if (currentDirection.current === 1) { // Moving left
        if (offsetX.current <= -contentSetWidth) {
          //offsetX.current = -contentSetWidth; // Clamp
          currentDirection.current = -1; // Reverse direction
        }
      } else { // Moving right
        if (offsetX.current >= 0) {
          //offsetX.current = 0; // Clamp
          currentDirection.current = 1; // Reverse direction
        }
      }
      
      // Infinite scroll illusion: reset position when one full "original" set has passed
      // For LTR movement (offsetX decreasing)
      if (offsetX.current <= -contentSetWidth * 2) {
         offsetX.current += contentSetWidth;
      }
      // For RTL movement (offsetX increasing)
      else if (offsetX.current >= contentSetWidth) {
         offsetX.current -= contentSetWidth;
      }


      marqueeRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
    animationFrameId.current = requestAnimationFrame(animateMarquee);
  }, [isDragging]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animateMarquee);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animateMarquee]);


  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragAnchorX.current = e.clientX;
    scrollAnchorX.current = offsetX.current;
    if (marqueeRef.current) {
        marqueeRef.current.style.cursor = 'grabbing';
    }
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaX = e.clientX - dragAnchorX.current;
    const newScrollLeft = scrollAnchorX.current + deltaX * DRAG_SENSITIVITY;
    
    offsetX.current = newScrollLeft;

    if (marqueeRef.current) {
      marqueeRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
  };

  const handlePointerUpOrLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      if (marqueeRef.current) {
        marqueeRef.current.style.cursor = 'grab';
      }
      if (!animationFrameId.current) { // Resume animation if not already running
        animationFrameId.current = requestAnimationFrame(animateMarquee);
      }
    }
  };

  // Set initial position to show the "middle" set of duplicated skills for smoother start
  useEffect(() => {
    if (marqueeRef.current) {
        const contentSetWidth = marqueeRef.current.scrollWidth / 3;
        offsetX.current = -contentSetWidth;
        marqueeRef.current.style.transform = `translateX(${offsetX.current}px)`;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on mount

  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Tech Stack
        </h2>
        <div 
          className="w-full overflow-hidden group"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrLeave}
          onPointerLeave={handlePointerUpOrLeave} 
        >
          <div 
            ref={marqueeRef}
            className="flex flex-row whitespace-nowrap will-change-transform" 
            // The 'animate-marquee-ltr' class is no longer used for transform animation here
            // CSS hover pause for '.animate-marquee-ltr' also won't apply
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`skill-set-${skill.name}-${index}`}
                className="animated-border-card m-3 shrink-0" 
                title={skill.name}
              >
                <div className="bg-background rounded-[calc(var(--radius)-2px)] h-full flex flex-col items-center justify-center p-3 text-center w-28 h-28 sm:w-32 sm:h-32">
                  <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-1.5">
                    {skill.BrandIconComponent ? (
                      <skill.BrandIconComponent className="w-full h-full text-accent" />
                    ) : (
                      <skill.Icon className="w-full h-full text-primary" />
                    )}
                  </div>
                  <span className="font-body text-xs sm:text-sm text-foreground break-words leading-tight">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
