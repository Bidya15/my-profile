
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skillCategories } from '@/lib/data.tsx';
import type { Skill } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

interface SkillItemProps {
  skill: Skill;
}

function SkillItem({ skill }: SkillItemProps) {
  const LucideIcon = skill.Icon;
  const BrandIcon = skill.BrandIconComponent;

  return (
    <div className="mb-4 group">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="h-5 w-5 mr-2 relative flex items-center justify-center">
            {BrandIcon ? (
              <>
                <LucideIcon className="w-full h-full text-primary animate-spin-slow absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" />
                <BrandIcon className="w-full h-full text-accent animate-spin-slow absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </>
            ) : (
              <LucideIcon className="w-full h-full text-primary animate-spin-slow transition-all duration-300 group-hover:text-accent group-hover:scale-125 group-hover:rotate-[10deg]" />
            )}
          </div>
          <span className="font-body text-md font-medium text-foreground group-hover:text-accent transition-colors">{skill.name}</span>
        </div>
        {skill.level && <span className="text-sm text-muted-foreground">{skill.level}%</span>}
      </div>
      {skill.level && (
        <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 [&>div]:bg-primary group-hover:[&>div]:bg-accent transition-colors" />
      )}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          My Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.title} className={cn(
              "animated-border-card shadow-lg hover:shadow-xl overflow-hidden animate-card-pulse"
            )}>
              <div className="bg-transparent rounded-[calc(var(--radius)-2px)] h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent flex items-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {category.skills.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
