import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(20 40% 30%), hsl(38 50% 22%))" }}
    >
      {/* Floating petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl opacity-20 animate-petal pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          🌸
        </div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          className="font-script text-5xl md:text-7xl mb-4"
          style={{ color: "hsl(43 72% 55%)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{
            textShadow: "0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,215,0,0.3)",
            scale: 1.02,
          }}
        >
          Ankita & Anmol
        </motion.div>

        <motion.div
          className="w-20 h-px mx-auto mb-6"
          style={{ background: "hsla(43, 72%, 55%, 0.5)" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="font-heading text-xl md:text-2xl mb-2"
          style={{ color: "hsl(36 33% 90%)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          27 April 2026
        </motion.p>

        <motion.p
          className="font-body text-sm mb-2"
          style={{ color: "hsla(36, 33%, 90%, 0.7)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Thank you for being a part of our special day
        </motion.p>

        <motion.div
          className="w-16 h-px mx-auto mb-4"
          style={{ background: "hsla(43, 72%, 55%, 0.3)" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.72 }}
        />

        <motion.div
          className="font-body text-sm mb-4"
          style={{ color: "hsl(36 33% 90%)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <motion.p
            className="mb-2 cursor-default"
            whileHover={{ scale: 1.02, textShadow: "0 0 10px rgba(255,255,255,0.3)" }}
            transition={{ duration: 0.2 }}
            style={{ color: "hsla(36, 33%, 90%, 0.9)" }}
          >
            📍 Aadarsh Colony Aurangabad Bihar(824101)
          </motion.p>
          <motion.p
            className="text-sm cursor-pointer phone-glow"
            style={{ color: "hsla(36, 33%, 90%, 0.8)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="tel:8002955662">📞 Anil Pandey - 8002955662</a>
          </motion.p>
          <motion.p
            className="text-sm cursor-pointer mt-1 phone-glow"
            style={{ color: "hsla(36, 33%, 90%, 0.8)" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <a href="tel:7320043230">📞 Aashutosh Pandey - 7320043230</a>
          </motion.p>
        </motion.div>

        <motion.p
          className="font-body text-xs mt-8"
          style={{ color: "hsla(36, 33%, 90%, 0.5)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Made with ❤️ for Ankita & Anmol
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
