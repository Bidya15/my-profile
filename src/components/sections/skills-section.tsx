import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skillCategories } from '@/lib/data';
import type { Skill } from '@/lib/data';

interface SkillItemProps {
  skill: Skill;
}

function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="mb-4 group">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <skill.Icon className="h-5 w-5 mr-2 text-primary group-hover:text-accent transition-colors" />
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
            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-accent flex items-center">
                  {/* Icon for category can be added here if desired */}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {category.skills.map((skill) => (
                  <SkillItem key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
