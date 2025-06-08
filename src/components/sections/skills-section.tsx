
import { skillCategories } from '@/lib/data.tsx';
import type { Skill } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';
import type React from 'react';

export function SkillsSection() {
  const allSkills = skillCategories.flatMap(category =>
    category.skills.map(skill => ({
      ...skill,
      categoryTitle: category.title
    }))
  );
  // Adjusted for potentially more items in a continuous flow, and smaller items
  const animationDelayStep = 0.25; // S_econds, delay between each card starting

  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Tech Stack
        </h2>
        {/* Removed flex, justify-center, items-center. Increased height. */}
        <div className="relative perspective-container py-8 h-[300px] sm:h-[400px]">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`} // Ensure unique key
              className={cn(
                "animated-border-card animate-card-orbital-cycle shrink-0 rounded-lg absolute"
              )}
              style={{
                width: '100px', // Smaller cards for individual skills
                height: '100px',
                animationDelay: `${index * animationDelayStep}s`,
                // Opacity and transform will be handled by the animation itself
              }}
              title={skill.name} // Tooltip for accessibility and clarity
            >
              <div className="bg-transparent rounded-[calc(var(--radius)-2px)] h-full flex flex-col items-center justify-center p-2 text-center">
                <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-1.5">
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
