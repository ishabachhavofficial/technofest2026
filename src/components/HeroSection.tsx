import acesLogo from "@/assets/aces-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto">
        <img
          src={acesLogo}
          alt="ACES Logo"
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 animate-float rounded-full"
          style={{ filter: "drop-shadow(0 0 20px hsla(190, 100%, 50%, 0.4))" }}
        />

        <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-2 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Late G. N. Sapkal College Of Engineering's
        </p>
        <p className="text-foreground text-base md:text-lg tracking-wide mb-1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Association Of Computer Engineering Students
        </p>
        <p className="neon-text text-lg font-bold mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          (ACES)
        </p>

        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="neon-text">TECHNO</span>
          <span className="neon-text-purple">FEST</span>
          <span className="block text-2xl md:text-4xl mt-2 text-foreground font-bold">2026</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl tracking-[0.3em] uppercase mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Innovate. Compete. Dominate.
        </p>

        <a href="#tech-events" className="neon-btn inline-block opacity-0 animate-fade-in-up animate-pulse-glow" style={{ animationDelay: "0.6s" }}>
          Explore Events
        </a>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(190, 100%, 50%), transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(270, 80%, 60%), transparent)" }} />
    </section>
  );
};

export default HeroSection;
