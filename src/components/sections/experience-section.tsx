
import Image from 'next/image';
import { experiences } from '@/lib/data.tsx';
import { Briefcase, MapPin } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary flex items-center justify-center">
          <Briefcase className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
          Work Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="animated-border-card group">
              <div className="bg-card rounded-[calc(var(--radius)-2px)] h-full p-6 sm:p-8 shadow-lg group-hover:shadow-primary/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start mb-4">
                  {exp.logoUrl && (
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mr-0 sm:mr-6 mb-4 sm:mb-0 rounded-md overflow-hidden border border-border flex-shrink-0 bg-secondary p-1">
                      <Image
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        layout="fill"
                        objectFit="contain"
                        data-ai-hint={exp.logoHint || 'company logo'}
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="text-xl sm:text-2xl font-headline font-semibold text-accent">{exp.title}</h3>
                    <p className="text-lg font-body font-medium text-foreground/90">{exp.company}</p>
                    <div className="flex flex-wrap items-center text-sm text-muted-foreground mt-1">
                      <span>{exp.duration}</span>
                      {exp.location && (
                        <>
                          <span className="mx-2">|</span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" /> {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 font-body text-foreground/80 pl-1">
                  {exp.description.map((point, index) => (
                    <li key={index} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
