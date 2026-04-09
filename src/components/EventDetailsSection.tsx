import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetailsSection = () => {
  return (
    <section id="details" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-heading">
          <span className="neon-text">Event</span>{" "}
          <span className="text-foreground">Details</span>
        </h2>

        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
            <div className="flex flex-col items-center gap-3">
              <Calendar className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Date</span>
              <span className="text-muted-foreground text-sm">18 April 2026<br />(Saturday)</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Time</span>
              <span className="text-muted-foreground text-sm">10:00 AM Onwards</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-primary" size={36} />
              <span className="font-orbitron text-sm font-semibold text-foreground">Venue</span>
              <span className="text-muted-foreground text-sm">Computer Engineering Dept.,<br />Late G. N. Sapkal COE,<br />Anjaneri, Nashik</span>
            </div>
          </div>

          <div className="w-full rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5306497387746!2d73.59780807527227!3d19.94417388144743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddf32eb4925e2d%3A0xa33f17b9d72fb951!2sSapkal%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1775722645136!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
