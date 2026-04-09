import { Trophy, Medal, Award } from "lucide-react";

const prizes = [
  {
    icon: Trophy,
    place: "1st Prize",
    amount: "₹2,000",
    extra: "+ Certificate",
    color: "primary",
  },
  {
    icon: Medal,
    place: "2nd Prize",
    amount: "₹1,000",
    extra: "+ Certificate",
    color: "accent",
  },
  {
    icon: Award,
    place: "All Participants",
    amount: "Certificate",
    extra: "of Participation",
    color: "muted-foreground",
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="neon-text-purple">Prizes</span>{" "}
          <span className="text-foreground">& Rewards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((p, i) => (
            <div key={p.place} className={`glass-card p-8 text-center ${i === 0 ? "md:-translate-y-4" : ""}`}>
              <p.icon
                size={48}
                className={`mx-auto mb-4 ${
                  i === 0 ? "text-primary" : i === 1 ? "text-accent" : "text-muted-foreground"
                }`}
              />
              <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">{p.place}</h3>
              <p className={`text-3xl font-bold mb-1 ${i === 0 ? "neon-text" : i === 1 ? "neon-text-purple" : "text-muted-foreground"}`}>
                {p.amount}
              </p>
              <p className="text-muted-foreground text-sm">{p.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
