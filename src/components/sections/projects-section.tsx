
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const animationBaseDuration = 10; // Must match the duration in globals.css @keyframes card-orbital-cycle
  const animationDelayStep = animationBaseDuration / projects.length;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background/80 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Featured Projects
        </h2>
        {/* Container for the 3D animation context */}
        <div className="relative w-full h-[480px] sm:h-[520px] md:h-[560px] perspective-container">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={cn(
                "animated-border-card animate-card-orbital-cycle flex flex-col shadow-xl", 
                "absolute left-1/2 top-1/2", 
                "w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[340px] md:h-[450px]" 
              )}
              style={{ 
                animationDelay: `${index * animationDelayStep}s`,
              }}
            >
              {/* Inner div for content, border animation clips to this */}
              <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full flex flex-col overflow-hidden">
                <div className="relative w-full h-40 sm:h-48 flex-shrink-0"> 
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
                  <CardDescription className="font-body text-foreground/80 h-16 sm:h-20 line-clamp-3 sm:line-clamp-4 leading-snug"> 
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
                <CardFooter className="flex justify-start space-x-2 sm:space-x-3 pt-0 pb-3 flex-shrink-0"> 
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
