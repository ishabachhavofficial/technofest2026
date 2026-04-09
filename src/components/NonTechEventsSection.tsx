import { Film, Megaphone, Gamepad2 } from "lucide-react";
import EventCard from "./EventCard";

const nonTechEvents = [
  {
    title: "Video Editing",
    description: "Create a compelling video under 2 minutes. Show your storytelling and editing prowess. Individual or team of 2.",
    icon: Film,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScOgbYqu67z08vk7e01LT8kCrxCghSY9ldvW5-QcuCGUeKp7Q/viewform?usp=publish-editor",
  },
  {
    title: "Ad Making (Mad Ads)",
    description: "Form a team of 2–4 and create a hilarious, creative ad on the spot. Props allowed — bring your A-game!",
    icon: Megaphone,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSfcVUtQPGvM3y49oluXUUVJIdbe02_Of1XBgdczQz4YEeIQIA/viewform?usp=header",
  },
  {
    title: "Game Zone",
    description: "BGMI, Free Fire & Fall Guys — Squad up with your team and battle it out! Points based on rank, kills, and survival.",
    icon: Gamepad2,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScHYfIOzVAUL3ceT32396WwrlqQVVy2I-CnHpnA00sTzk1H-Q/viewform?usp=publish-editor",
  },
];

const NonTechEventsSection = () => {
  return (
    <section id="non-tech-events" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-heading">
          <span className="neon-text-purple">Non-Technical</span>{" "}
          <span className="text-foreground">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nonTechEvents.map((e) => (
            <EventCard key={e.title} {...e} accentColor="purple" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonTechEventsSection;
