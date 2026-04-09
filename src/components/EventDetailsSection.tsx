import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetailsSection = () => {
  return (
    <section id="details" className="relative py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="section-heading">
          <span className="neon-text">Event</span>{" "}
          <span className="text-foreground">Details</span>
        </h2>

        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <Calendar className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Date</span>
              <span className="text-muted-foreground text-sm">18 April 2026<br />(Saturday)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Time</span>
              <span className="text-muted-foreground text-sm">09:00 AM</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Venue</span>
              <span className="text-muted-foreground text-sm">Computer Engineering Dept.,<br />Late G. N. Sapkal COE,<br />Anjaneri, Nashik</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
