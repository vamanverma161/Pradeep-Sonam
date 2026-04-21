import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink, Navigation2 } from "lucide-react";
import { useWeddingData } from "@/hooks/useWeddingData";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const data = useWeddingData();
  const location = data.location || {};
  const { name, address, mapLink, embedLink } = location;

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-cream/50 to-cream/20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-foreground mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Wedding Venue
        </motion.h2>

        <motion.div
          className="glassmorphism rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/20 border border-white/30"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Shimmer Skeleton Loader */}
          {!embedLink && (
            <div className="w-full h-64 md:h-80 bg-gradient-to-r from-gray-200/50 to-gray-300/50 rounded-t-3xl animate-shimmer" />
          )}

          {/* Map Iframe */}
          <motion.div
            className="relative w-full h-64 md:h-80 group"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {embedLink && (
              <iframe
                src={embedLink}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.5rem 1.5rem 0 0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            )}
            {/* Animated Pin Icon */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}
            >
              <MapPin className="w-12 h-12 text-gold-dark fill-current shadow-lg rounded-full bg-white/80 p-2" />
            </motion.div>
          </motion.div>

          {/* Content Card */}
          <div className="p-8 md:p-12 text-center">
            {name && (
              <motion.h3
                className="font-heading text-2xl md:text-3xl mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {name}
              </motion.h3>
            )}
            {address && (
              <motion.p
                className="font-body text-lg mb-8 text-muted-foreground max-w-md mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                📍 {address}
              </motion.p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-dark to-gold text-primary-foreground font-heading text-sm px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-gold/25 transition-all duration-300 font-medium"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                View on Google Maps
              </motion.a>
              <motion.a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-gold-dark/50 text-gold-dark font-heading text-sm px-8 py-4 rounded-2xl hover:bg-gold-dark hover:text-primary-foreground hover:shadow-xl transition-all duration-300 font-medium backdrop-blur-sm"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation2 className="w-4 h-4" />
                Get Directions
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
