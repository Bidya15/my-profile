"use client";

import { Button } from '@/components/ui/button';
import { ArrowDownToLine, Eye } from 'lucide-react';
import Link from 'next/link';
import { RESUME_PATH } from '@/lib/data';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-background py-20 pt-28 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block animate-fade-in-up delay-100">Hi, I&apos;m</span>
          <span className="block text-primary animate-fade-in-up delay-300">Bidya S. Rongpi</span>
          <span className="block text-xl sm:text-2xl md:text-3xl text-foreground/80 mt-2 animate-fade-in-up delay-500">
            A Full Stack Developer
          </span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up delay-700">
          Crafting seamless digital experiences from concept to deployment. Passionate about building scalable and user-friendly web applications.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-900">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Link href="#projects">
              <Eye className="mr-2 h-5 w-5" /> View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
            <a href={RESUME_PATH} download="Bidya_S_Rongpi_Resume.pdf">
              <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0; /* Start hidden */
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
      `}</style>
    </section>
  );
}
