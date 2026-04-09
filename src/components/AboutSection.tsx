import { Cpu, Users, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="neon-text">About</span>{" "}
          <span className="text-foreground">The Fest</span>
        </h2>

        <div className="glass-card p-8 md:p-12 text-center">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            <strong className="text-foreground">Technofest 2026</strong> is the flagship technical event organized by the Department of Computer Engineering at Late G. N. Sapkal College of Engineering. It brings together budding engineers for a day of innovation, competition, and fun — featuring technical challenges, creative contests, and thrilling gaming tournaments.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Open for all <span className="text-primary font-semibold">UG and Diploma</span> students. Whether you're a coder, creator, or gamer — there's something for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: Cpu, label: "Technical Events", desc: "Code, Build & Compete" },
              { icon: Zap, label: "Creative Contests", desc: "Edit, Act & Create" },
              { icon: Users, label: "Gaming Arena", desc: "Play, Fight & Win" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4">
                <item.icon className="text-primary" size={32} />
                <span className="font-orbitron text-sm font-semibold text-foreground">{item.label}</span>
                <span className="text-muted-foreground text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
