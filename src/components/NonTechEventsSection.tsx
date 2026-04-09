import { Film, Megaphone, Gamepad2, Flame, Trophy } from "lucide-react";
import EventCard from "./EventCard";

const nonTechEvents = [
  {
    title: "Video Editing",
    description: "Create a compelling video under 2 minutes. Show your storytelling and editing prowess. Individual or team of 2.",
    icon: Film,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSfm7HZUHt_xYTlwQHR07Etqi3nxsBvuZk41K81BxImG18lxbg/viewform?usp=header",
  },
  {
    title: "Ad Making (Mad Ads)",
    description: "Form a team of 2–4 and create a hilarious, creative ad on the spot. Props allowed — bring your A-game!",
    icon: Megaphone,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLSdfGCRE8THuBySChg2lVGav4jUNM2HPZRTVwv8KdiOMGgkUZQ/viewform?usp=header",
  },
  {
    title: "BGMI",
    description: "Squad up with your 4-member team and battle it out in classic custom rooms. Top ranks and kills earn you points!",
    icon: Gamepad2,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScOgbYqu67z08vk7e01LT8kCrxCghSY9ldvW5-QcuCGUeKp7Q/viewform?usp=publish-editor",
  },
  {
    title: "Free Fire",
    description: "Assemble your 4-member squad and fight for survival in custom rooms. Points for survival rank and kills!",
    icon: Flame,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScOgbYqu67z08vk7e01LT8kCrxCghSY9ldvW5-QcuCGUeKp7Q/viewform?usp=publish-editor",
  },
  {
    title: "Fall Guys",
    description: "Race, jump, and tumble through wacky obstacle courses. Last one standing wins the crown!",
    icon: Trophy,
    enrollLink: "https://docs.google.com/forms/d/e/1FAIpQLScOgbYqu67z08vk7e01LT8kCrxCghSY9ldvW5-QcuCGUeKp7Q/viewform?usp=publish-editor",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonTechEvents.map((e) => (
            <EventCard key={e.title} {...e} accentColor="purple" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NonTechEventsSection;
