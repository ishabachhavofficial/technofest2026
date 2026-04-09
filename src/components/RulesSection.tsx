import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Film, Megaphone, Gamepad2, Flame } from "lucide-react";

const generalRules = [
  "Open for UG and Diploma students.",
  "Registration Fee: ₹50 per participant per event.",
  "Participants can join multiple events by registering separately.",
  "Each team must register before the deadline.",
  "Participants must carry their college ID cards.",
  "The decision of judges/coordinators will be final.",
  "Any kind of misconduct will lead to disqualification.",
  "Participants must report on time at the venue.",
  "Rules may be updated by organizers if required.",
];

const eventRules = [
  {
    title: "Video Editing",
    icon: Film,
    rules: [
      "Video duration should not exceed 2 minutes.",
      "Individual or team of maximum 2 members.",
      "Topic can be chosen by participants.",
      "Use of original content is encouraged.",
      "Proper credits must be given for external resources.",
      "Plagiarism will result in disqualification.",
      "Judging: creativity, editing skills, and content quality.",
    ],
  },
  {
    title: "Ad Making (Mad Ads)",
    icon: Megaphone,
    rules: [
      "Team participation: 2–4 members allowed.",
      "Product/topic given on the spot or pre-selected.",
      "Preparation: 10–15 minutes.",
      "Presentation: 3–5 minutes.",
      "Props allowed but should be simple and safe.",
      "Offensive or inappropriate content is strictly prohibited.",
      "Judging: creativity, presentation, humor, communication skills.",
    ],
  },
  {
    title: "BGMI",
    icon: Gamepad2,
    rules: [
      "Team event: 4 members per team.",
      "Matches played in classic/custom rooms.",
      "Bring your own mobile device and internet.",
      "No hacks, cheats, or unfair practices.",
      "Game settings and map decided by organizers.",
      "Points awarded based on ranking and kills.",
      "Network issues are participant's responsibility.",
    ],
  },
  {
    title: "Free Fire",
    icon: Flame,
    rules: [
      "Team event: 4 members per squad.",
      "Matches conducted in custom rooms.",
      "Bring your own mobile device and internet.",
      "Hacks, mods, or unfair gameplay → immediate disqualification.",
      "Map and match format decided by organizers.",
      "Points based on survival ranking and kills.",
      "Tie → additional match or kill count considered.",
      "Network issues are participant's responsibility.",
    ],
  },
];

const RulesSection = () => {
  return (
    <section id="rules" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="neon-text">Rules</span>{" "}
          <span className="text-foreground">& Regulations</span>
        </h2>

        <Accordion type="multiple" className="space-y-4">
          {/* General */}
          <AccordionItem value="general" className="glass-card border-0 px-6">
            <AccordionTrigger className="hover:no-underline py-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-primary" size={22} />
                <span className="font-orbitron text-sm font-semibold text-foreground">General Guidelines</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <ul className="space-y-2">
                {generalRules.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">▹</span>
                    {r}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Event-specific */}
          {eventRules.map((event) => (
            <AccordionItem key={event.title} value={event.title} className="glass-card border-0 px-6">
              <AccordionTrigger className="hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <event.icon className="text-accent" size={22} />
                  <span className="font-orbitron text-sm font-semibold text-foreground">{event.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="space-y-2">
                  {event.rules.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-0.5">▹</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default RulesSection;
