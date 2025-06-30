import {
  Award,
  CheckCircle,
  Zap,
  TrendingUp,
  Users,
  Edit3,
} from "lucide-react";

export function AchievementsSection() {
  const achievementsList = [
    {
      id: 1,
      text: "Completion Certificate of 'Technology Job Simulation' from Deloitte",
      Icon: Award,
    },
    {
      id: 2,
      text: "Adavantage Assam 2.0 Quiz competition, Securing rank 52 out of 2000 participants.",
      Icon: Zap,
    },
    {
      id: 3,
      text: "National Entreprenueship Challege(NEC) 2024, IIT Bombay.",
      Icon: Award,
    },
    {
      id: 4,
      text: "ATF-2024, Algo University Fellowship program, securing rank under 2000 out of 20000 participants of coding contast.",
      Icon: TrendingUp,
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
            {achievementsList.map((achievement) => (
              <li key={achievement.id} className="animated-border-card group">
                <div className="bg-background rounded-[calc(var(--radius)-2px)] h-full flex items-start p-4 sm:p-6 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20 group-hover:-translate-y-1">
                  <achievement.Icon className="h-8 w-8 sm:h-10 sm:w-10 text-accent mr-4 sm:mr-6 mt-1 flex-shrink-0 group-hover:scale-110 group-hover:text-primary transition-all duration-300" />
                  <p className="font-body text-base sm:text-lg text-foreground/90 leading-relaxed">
                    {achievement.text}
                  </p>
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
