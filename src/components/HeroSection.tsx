import acesLogo from "@/assets/aces-logo.png";
import collegeLogo from "@/assets/college-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="relative z-10 max-w-4xl mx-auto">
        <img
          src={collegeLogo}
          alt="Late G. N. Sapkal College of Engineering Logo"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 animate-float"
          style={{ filter: "drop-shadow(0 0 15px hsla(30, 90%, 55%, 0.4))" }}
        />

        <p className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Late G. N. Sapkal College Of Engineering's
        </p>
        <p className="text-foreground text-base md:text-lg tracking-wide mb-1 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Association Of Computer Engineering Students
        </p>
        <p className="neon-text text-lg font-bold mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          (ACES)
        </p>

        <img
          src={acesLogo}
          alt="ACES Logo"
          className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-6 animate-float rounded-full"
          style={{ filter: "drop-shadow(0 0 20px hsla(190, 100%, 50%, 0.4))", animationDelay: "0.5s" }}
        />

        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <span className="neon-text">TECHNO</span>
          <span className="neon-text-purple">FEST</span>
          <span className="block text-2xl md:text-4xl mt-2 text-foreground font-bold">2026</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl tracking-[0.2em] italic mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Where Innovation Meets Execution.
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
