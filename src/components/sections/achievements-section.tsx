import { Award, CheckCircle } from 'lucide-react';

export function AchievementsSection() {
  const achievementsList = [
    { id: 1, text: "Dean's List - University (Year)", Icon: Award },
    { id: 2, text: "Best Project Award - Hackathon Name (Year)", Icon: Award },
    { id: 3, text: "Certified Cloud Practitioner - AWS (Year)", Icon: CheckCircle },
    { id: 4, text: "Published Article on Medium - 'Topic' (Year)", Icon: CheckCircle },
  ];

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center mb-12 text-primary">
          Achievements & Milestones
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {achievementsList.map(achievement => (
              <li 
                key={achievement.id} 
                className="flex items-start p-4 bg-background rounded-lg shadow-md hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300"
              >
                <achievement.Icon className="h-8 w-8 text-accent mr-4 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-body text-lg text-foreground/90">{achievement.text}</p>
              </li>
            ))}
          </ul>
           <p className="text-center mt-12 font-body text-muted-foreground">
            More achievements will be added soon.
          </p>
        </div>
      </div>
    </section>
  );
}
