
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  // Duplicate projects for a seamless marquee effect
  const displayProjects = [...projects, ...projects];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80 group"> {/* Added group for hover pause */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 sm:mb-16 text-primary">
          Featured Projects
        </h2>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="flex animate-marquee-ltr py-4">
            {displayProjects.map((project, index) => (
              <div key={`${project.id}-${index}`} className="mx-3 flex-shrink-0"> {/* Wrapper for spacing and shrink prevention */}
                <Card
                  className={cn(
                    "animated-border-card group w-44 xs:w-48 sm:w-52 md:w-60 lg:w-64 shadow-xl flex flex-col h-full" // Ensure cards take full height for consistent alignment
                  )}
                >
                  <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:-translate-y-1 group-hover:scale-105">
                    <div className="relative w-full h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex-shrink-0">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-500"
                        data-ai-hint={project.imageHint}
                      />
                    </div>
                    <CardHeader className="pt-1.5 pb-0 xs:pt-2 xs:pb-0.5 flex-shrink-0 px-1.5 sm:px-2">
                      <CardTitle className="font-headline text-sm sm:text-base md:text-lg text-accent">{project.title}</CardTitle>
                      <CardDescription className="font-body text-[10px] xs:text-xs sm:text-sm text-foreground/80 h-8 xs:h-10 sm:h-12 line-clamp-2 sm:line-clamp-3 leading-snug mt-0.5">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col justify-end pt-0.5 pb-1 px-1.5 sm:px-2">
                      <div className="mb-0.5 sm:mb-1">
                        <h4 className="font-semibold text-[9px] xs:text-[10px] sm:text-xs mb-0.5 text-foreground">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-0.5">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="font-code text-[8px] xs:text-[9px] sm:text-[10px] px-1 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-start space-x-1 sm:space-x-1.5 pt-0 pb-1.5 px-1.5 sm:px-2 flex-shrink-0">
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> GitHub
                          </Link>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground text-[8px] xs:text-[9px] px-1 py-0.5 h-5 xs:h-6 sm:h-7">
                          <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-0.5 xs:mr-1 h-2 w-2 xs:h-2.5 xs:w-2.5 sm:h-3 sm:w-3" /> Live Demo
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
