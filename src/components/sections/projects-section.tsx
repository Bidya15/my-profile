
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
        <div className="perspective-container relative w-full h-[320px] xs:h-[360px] sm:h-[420px] md:h-[480px] lg:h-[500px] mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "animated-border-card group animate-card-orbital-cycle",
                "absolute top-1/2 left-1/2 w-56 xs:w-60 sm:w-72 md:w-80 shadow-xl"
              )}
              style={{
                animationDelay: `${-(ANIMATION_DURATION / projects.length) * index}s`,
                transformStyle: 'preserve-3d', // Added to ensure children respect 3D space if needed
              }}
            >
              <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden">
                <div className="relative w-full h-36 xs:h-40 sm:h-48 md:h-52 flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader className="pt-3 pb-1 sm:pt-4 sm:pb-2 flex-shrink-0 px-3 sm:px-4">
                  <CardTitle className="font-headline text-lg sm:text-xl md:text-2xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="font-body text-xs sm:text-sm text-foreground/80 h-16 sm:h-20 line-clamp-3 sm:line-clamp-4 leading-snug mt-1">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end pt-1 pb-2 px-3 sm:px-4">
                  <div className="mb-1 sm:mb-2">
                    <h4 className="font-semibold text-xs sm:text-sm mb-1 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-code text-[10px] sm:text-xs px-1.5 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-2 pt-0 pb-3 px-3 sm:px-4 flex-shrink-0">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 text-[10px] sm:text-xs px-2 py-1 h-7 sm:h-8">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-[10px] sm:text-xs px-2 py-1 h-7 sm:h-8">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" /> Live Demo
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

