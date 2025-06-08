
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDownToLine, UserCircle } from 'lucide-react';
import { RESUME_PATH } from '@/lib/data.tsx';

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-primary">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/50">
              <Image
                src="/bidya-profile.jpg"
                alt="Bidya S. Rongpi"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300"
                data-ai-hint="professional portrait"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <UserCircle className="w-12 h-12 text-accent mx-auto md:mx-0 mb-4" />
            <p className="font-body text-lg text-foreground/90 mb-6 leading-relaxed">
              Hello! I&apos;m Bidya S. Rongpi, a dedicated Full Stack Developer with a knack for turning complex problems into elegant, user-centric solutions. With experience in both frontend and backend technologies, I enjoy the entire process of application development, from initial concept and design to deployment and maintenance.
            </p>
            <p className="font-body text-lg text-foreground/90 mb-8 leading-relaxed">
              My goal is to build software that is not only functional and efficient but also provides a great user experience. I&apos;m constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
              <a href={RESUME_PATH} download="Bidya_S_Rongpi_Resume.pdf">
                <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
