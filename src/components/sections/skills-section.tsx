
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

  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Tech Stack
        </h2>
        <div className="w-full overflow-hidden group"> {/* Marquee container with group for potential hover pause */}
          <div className="animate-marquee-ltr flex flex-row whitespace-nowrap group-hover:animation-play-state-paused">
            {/* Render allSkills twice for seamless loop */}
            {allSkills.map((skill, index) => (
              <div
                key={`skill-set1-${skill.name}-${index}`}
                className="animated-border-card m-3 shrink-0" // Added shrink-0
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
            {allSkills.map((skill, index) => (
              <div
                key={`skill-set2-${skill.name}-${index}`}
                className="animated-border-card m-3 shrink-0" // Added shrink-0
                title={skill.name}
                aria-hidden="true" // Second set is for animation purposes
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
