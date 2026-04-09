import { LucideIcon } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  enrollLink: string;
  accentColor?: "cyan" | "purple";
}

const EventCard = ({ title, description, icon: Icon, enrollLink, accentColor = "cyan" }: EventCardProps) => {
  const isCyan = accentColor === "cyan";

  return (
    <div className="glass-card p-6 md:p-8 flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-1">
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          background: isCyan ? "hsla(190, 100%, 50%, 0.1)" : "hsla(270, 80%, 60%, 0.1)",
          border: `1px solid ${isCyan ? "hsla(190, 100%, 50%, 0.3)" : "hsla(270, 80%, 60%, 0.3)"}`,
        }}
      >
        <Icon size={28} className={isCyan ? "text-primary" : "text-accent"} />
      </div>

      <h3 className="font-orbitron text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{description}</p>

      <a
        href={enrollLink}
        target="_blank"
        rel="noopener noreferrer"
        className={isCyan ? "neon-btn text-xs" : "neon-btn-secondary text-xs"}
      >
        Enroll Now
      </a>
    </div>
  );
};

export default EventCard;
