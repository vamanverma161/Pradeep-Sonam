import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    title: "Tilak Ceremony",
    date: "21 April 2026",
    day: "Tuesday",
    emoji: "🎊",
    description: "The sacred tilak ceremony marking the formal acceptance of the groom.",
    color: "from-rose/30 to-peach/30",
  },
  {
    title: "Mehendi & Sangeet",
    date: "25 April 2026",
    day: "Saturday",
    emoji: "💃",
    description: "An evening of beautiful mehendi designs, music, and dance celebrations.",
    color: "from-sage/30 to-cream/30",
  },
  {
    title: "Haldi Ceremony",
    date: "26 April 2026",
    day: "Sunday",
    emoji: "✨",
    description: "The auspicious haldi ceremony to bless the couple before the wedding.",
    color: "from-gold/20 to-ivory/30",
  },
  {
    title: "Wedding — Baraat & Phere",
    date: "27 April 2026",
    day: "Monday",
    emoji: "💍",
    description: "The grand wedding day — baraat procession followed by the sacred phere ceremony.",
    color: "from-peach/30 to-rose/30",
  },
];

const EventsTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Wedding Events</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-px" />

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              className={`relative flex items-start mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1.5 mt-8 z-10 animate-pulse-glow" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className={`glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br ${event.color}`}>
                  <div className="text-3xl mb-3">{event.emoji}</div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{event.title}</h3>
                  <p className="font-body text-sm font-semibold text-gold-dark mb-2">
                    📅 {event.date} ({event.day})
                  </p>
                  <p className="font-body text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
