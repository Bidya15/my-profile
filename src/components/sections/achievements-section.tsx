
import { Award, CheckCircle, Zap, TrendingUp, Users, Edit3 } from 'lucide-react';

export function AchievementsSection() {
  const achievementsList = [
    { 
      id: 1, 
      text: "Led the development of a new client portal, resulting in a 25% improvement in user satisfaction scores - Tech Solutions Inc. (2023)", 
      Icon: Zap 
    },
    { 
      id: 2, 
      text: "Awarded 'Innovator of the Quarter' for designing a novel algorithm that reduced data processing time by 40% - Data Corp (2022)", 
      Icon: Award 
    },
    { 
      id: 3, 
      text: "Successfully migrated a monolithic legacy system to a microservices architecture, enhancing scalability and reducing downtime by 15% - Enterprise Ltd. (2021)", 
      Icon: TrendingUp 
    },
    { 
      id: 4, 
      text: "Published a well-received article on 'Advanced State Management in React' on a popular developer blog, garnering over 10,000 views - DevInsights (2023)", 
      Icon: Edit3 
    },
     { 
      id: 5, 
      text: "Mentored a team of 5 junior developers, leading to significant skill improvement and successful project deliveries - CodeCrafters (2022-2024)", 
      Icon: Users 
    },
    { 
      id: 6, 
      text: "Achieved AWS Certified Solutions Architect - Associate certification, demonstrating expertise in cloud infrastructure design - Amazon Web Services (2024)", 
      Icon: CheckCircle 
    },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-16 text-primary">
          Achievements & Milestones
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-8">
            {achievementsList.map(achievement => (
              <li 
                key={achievement.id} 
                className="animated-border-card group"
              >
                <div className="bg-background rounded-[calc(var(--radius)-2px)] h-full flex items-start p-4 sm:p-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                  <achievement.Icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent mr-4 sm:mr-6 mt-1 flex-shrink-0 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                  <p className="font-body text-base sm:text-lg text-foreground/90 leading-relaxed">{achievement.text}</p>
                </div>
              </li>
            ))}
          </ul>
           <p className="text-center mt-16 font-body text-muted-foreground">
            Continuously striving for new accomplishments.
          </p>
        </div>
      </div>
    </section>
  );
}
