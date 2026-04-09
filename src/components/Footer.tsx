import acesLogo from "@/assets/aces-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-6">
          <img src={acesLogo} alt="ACES Logo" className="w-16 h-16 rounded-full opacity-80" />

          <div>
            <h3 className="font-orbitron text-sm font-bold neon-text mb-1">TECHNOFEST 2026</h3>
            <p className="text-muted-foreground text-xs">Department of Computer Engineering</p>
            <p className="text-muted-foreground text-xs">Late G. N. Sapkal College of Engineering, Nashik</p>
          </div>

          <p className="text-muted-foreground text-xs">
            For any queries, please contact the department coordinators.
          </p>

          <p className="text-muted-foreground/50 text-xs">
            © 2026 ACES — Association of Computer Engineering Students. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
