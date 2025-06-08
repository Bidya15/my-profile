
import { skillCategories } from '@/lib/data.tsx';
import type { Skill } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';
import type React from 'react';

export function SkillsSection() {
  const allSkills = skillCategories.flatMap(category => category.skills);
  const animationDelayStep = 0.4; // Adjusted for more items

  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Tech Stack
        </h2>
        <div className="flex flex-row overflow-x-auto gap-6 perspective-container py-8 items-center h-[200px]"> {/* Added fixed height and items-center */}
          {allSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={cn(
                "animated-border-card animate-card-orbital-cycle shrink-0 rounded-lg"
              )}
              style={{ 
                width: '110px', // Fixed size for smaller items
                height: '110px',
                animationDelay: `${index * animationDelayStep}s` 
              }}
            >
              <div className="bg-transparent rounded-[calc(var(--radius)-2px)] h-full flex flex-col items-center justify-center p-2 text-center">
                <div className="relative flex items-center justify-center w-10 h-10 mb-1.5">
                  {skill.BrandIconComponent ? (
                    <skill.BrandIconComponent className="w-full h-full text-accent" />
                  ) : (
                    <skill.Icon className="w-full h-full text-primary" />
                  )}
                </div>
                <span className="font-body text-xs text-foreground break-words leading-tight">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
