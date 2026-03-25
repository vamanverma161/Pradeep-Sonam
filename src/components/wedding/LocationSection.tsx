import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Wedding Venue</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
        </motion.div>

        <motion.div
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Map embed */}
          <a
            href="https://maps.app.goo.gl/3bqeEw1uHzqwvWwm8?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-64 md:h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAwLjAiTiA4NcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            />
          </a>

          {/* Address card */}
          <div className="p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-gold-dark" />
              <h3 className="font-heading text-xl text-foreground">Wedding Venue</h3>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-6">
              The wedding celebrations will take place at our family venue.
              <br />
              We look forward to welcoming you!
            </p>
            <a
              href="https://maps.app.goo.gl/3bqeEw1uHzqwvWwm8?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold-dark text-primary-foreground font-body text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
