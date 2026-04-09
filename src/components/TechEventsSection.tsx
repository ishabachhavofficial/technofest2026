import { Code, Globe, HelpCircle } from "lucide-react";
import EventCard from "./EventCard";

const techEvents = [
  {
    title: "Project Competition",
    description: "Showcase your innovative projects and compete with the brightest minds. Present your work to expert judges and win exciting prizes.",
    icon: Code,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScqtZ0Z9sDVeLPJM1hTqptrZ3aU5Nmu4y_J9Oh0n4EI5LSpKg/viewform?usp=header",
  },
  {
    title: "Web Development",
    description: "Build stunning, responsive websites in a timed challenge. Show off your frontend and backend skills to claim the top spot.",
    icon: Globe,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSfcVUtQPGvM3y49oluXUUVJIdbe02_Of1XBgdczQz4YEeIQIA/viewform?usp=header",
  },
  {
    title: "Coding Quiz",
    description: "Test your programming knowledge with tricky questions on algorithms, data structures, and general CS concepts.",
    icon: HelpCircle,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScHYfIOzVAUL3ceT32396WwrlqQVVy2I-CnHpnA00sTzk1H-Q/viewform?usp=publish-editor",
  },
];

const TechEventsSection = () => {
  return (
    <section id="tech-events" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">
          <span className="neon-text">Technical</span>{" "}
          <span className="text-foreground">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techEvents.map((e) => (
            <EventCard key={e.title} {...e} accentColor="cyan" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechEventsSection;
