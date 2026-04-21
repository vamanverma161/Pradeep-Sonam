import { motion } from "framer-motion";
import { useWeddingData } from "@/hooks/useWeddingData";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  const data = useWeddingData();
  const { bride = "Sonam", groom = "Pradeep" } = data.couple || {};
  const tagline = data.hero?.tagline || "Together with love, we invite you to celebrate our wedding";
  const weddingDate = data.weddingDate || "27 April 2026";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsl(40 33% 96%), hsl(20 80% 92%), hsl(45 40% 95%))" }}
      />

      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      <Scene3D />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/40 shadow-xl animate-pulse-glow">
              <img
                src="/couple-hero.png"
                alt={`${bride} & ${groom} - Cartoon style Indian couple`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>

          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {bride}
          </motion.h1>

          <motion.div
            className="font-script text-4xl md:text-5xl text-gold-dark my-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            &amp;
          </motion.div>

          <motion.h1
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            {groom}
          </motion.h1>

          <motion.p
            className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {tagline}
          </motion.p>

          <motion.div
            className="mt-8 inline-block glass rounded-full px-8 py-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <span className="font-heading text-lg md:text-xl text-gold-dark tracking-wider">
              {weddingDate}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

