
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={cn(
                "animated-border-card group flex flex-col shadow-xl", // Added group for hover effects
                "w-full h-full" // Adjusted width/height for grid
              )}
            >
              {/* Inner div for content, border animation clips to this */}
              <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:shadow-primary/25">
                <div className="relative w-full h-48 sm:h-56 flex-shrink-0">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader className="pt-4 pb-2 flex-shrink-0">
                  <CardTitle className="font-headline text-xl sm:text-2xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="font-body text-foreground/80 h-20 sm:h-24 line-clamp-4 sm:line-clamp-5 leading-snug">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end pt-2 pb-3">
                  <div className="mb-2">
                    <h4 className="font-semibold text-xs sm:text-sm mb-1.5 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-code text-xs px-1.5 py-0.5 sm:px-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-2 sm:space-x-3 pt-0 pb-4 flex-shrink-0">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 text-xs sm:text-sm">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" /> Live Demo
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
