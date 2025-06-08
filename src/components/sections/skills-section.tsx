
import { skillCategories } from '@/lib/data.tsx';
import type { Skill } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';
import type React from 'react';

export function SkillsSection() {
  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      ...skill,
      categoryTitle: category.title // Keep category if needed for other logic, though not displayed
    }))
  );
  const animationDelayStep = 0.3; // Adjusted for potentially more items in a continuous flow

  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Tech Stack
        </h2>
        {/* Removed flex flex-row overflow-x-auto gap-6. Kept perspective-container and vertical alignment/height. */}
        <div className="relative perspective-container py-8 flex justify-center items-center h-[250px] sm:h-[300px]">
          {allSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`} // Ensure unique key if names repeat across categories
              className={cn(
                "animated-border-card animate-card-orbital-cycle shrink-0 rounded-lg absolute" // Added absolute positioning
              )}
              style={{
                width: '100px', 
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
