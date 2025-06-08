
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

const ANIMATION_DURATION = 15; // seconds for a full orbit

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 sm:mb-16 md:mb-20 text-primary">
          Featured Projects
        </h2>
        <div className="perspective-container relative w-full h-[280px] xs:h-[300px] sm:h-[340px] md:h-[380px] lg:h-[420px] mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "animated-border-card group animate-card-orbital-cycle",
                "absolute top-1/2 left-1/2 w-48 xs:w-52 sm:w-60 md:w-64 lg:w-72 shadow-xl"
              )}
              style={{
                animationDelay: `${-(ANIMATION_DURATION / projects.length) * index}s`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden">
                <div className="relative w-full h-28 xs:h-32 sm:h-36 md:h-40 lg:h-48 flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader className="pt-2 pb-0.5 sm:pt-3 sm:pb-1 flex-shrink-0 px-2 sm:px-3">
                  <CardTitle className="font-headline text-base sm:text-lg md:text-xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="font-body text-xs sm:text-sm text-foreground/80 h-10 sm:h-12 line-clamp-2 sm:line-clamp-3 leading-snug mt-0.5">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end pt-0.5 pb-1 px-2 sm:px-3">
                  <div className="mb-1 sm:mb-1.5">
                    <h4 className="font-semibold text-[10px] sm:text-xs mb-0.5 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-0.5 sm:gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-code text-[9px] sm:text-[10px] px-1 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-1.5 sm:space-x-2 pt-0 pb-2 px-2 sm:px-3 flex-shrink-0">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 text-[9px] sm:text-[10px] px-1.5 py-0.5 h-6 sm:h-7">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-[9px] sm:text-[10px] px-1.5 py-0.5 h-6 sm:h-7">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
