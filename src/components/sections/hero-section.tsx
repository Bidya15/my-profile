
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine, Eye } from 'lucide-react';
import Link from 'next/link';
import { RESUME_PATH } from '@/lib/data.tsx';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background/80 via-muted/70 to-background/80 py-20 pt-28 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* "Hi!" and Avatar removed from here */}
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block">I&apos;m</span>
          <span className="block animate-text-shimmer bg-gradient-to-r from-primary via-accent to-secondary bg-[length:200%_auto]">
            Bidya S. Rongpi
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl text-foreground/80 mt-2 animate-subtitle-glow-fade">
            A Full Stack Developer
          </span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Crafting seamless digital experiences from concept to deployment. Passionate about building scalable and user-friendly web applications.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
            <Link href="#projects">
              <Eye className="mr-2 h-5 w-5" /> View Projects
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
            <a href={RESUME_PATH} download>
              <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
