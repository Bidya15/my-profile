
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data.tsx';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const animationBaseDuration = 4; // seconds, matching CSS animation duration
  const animationDelayStep = 1; // seconds, delay between each card starting

  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-container">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={cn(
                "animated-border-card animate-card-orbital-cycle flex flex-col shadow-lg overflow-hidden"
              )}
              style={{ animationDelay: `${index * animationDelayStep}s` }}
            >
              <div className="bg-transparent rounded-[calc(var(--radius)-2px)] h-full flex flex-col"> {/* Inner background for content */}
                <div className="relative w-full h-48 sm:h-56 md:h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-accent">{project.title}</CardTitle>
                  <CardDescription className="font-body text-foreground/80 h-16 line-clamp-3">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-code">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-start space-x-3 pt-0">
                  {project.githubUrl && (
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
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
