import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useWeddingData } from "@/hooks/useWeddingData";

const BlessingsSection = () => {
  const weddingData = useWeddingData();
  const blessings = weddingData.blessings;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Blessings & Wishes</h2>
          <div className="w-24 h-px bg-gold/50 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blessings.map((blessing, index) => (
            <motion.div
              key={blessing.name}
              className="glass rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-heading text-lg text-gold-dark mb-3">From {blessing.name}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">"{blessing.message}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;

