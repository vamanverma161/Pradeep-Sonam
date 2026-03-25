import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MantraSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-cream">
      {/* Decorative mandala background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-[600px] h-[600px] border border-foreground/20 rounded-full" />
        <div className="absolute w-[500px] h-[500px] border border-foreground/20 rounded-full rotate-45" />
        <div className="absolute w-[400px] h-[400px] border border-foreground/20 rounded-full rotate-90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Diya icons */}
        <motion.div
          className="flex justify-center gap-8 mb-8 text-3xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span>🪔</span>
          <span>🪷</span>
          <span>🪔</span>
        </motion.div>

        {/* Sanskrit Mantra */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 glow-text leading-relaxed">
            ॐ मंगलम् भगवान विष्णुः<br />
            मंगलम् गरुड़ध्वजः।<br />
            मंगलम् पुण्डरीकाक्षः<br />
            मंगलायतनो हरिः॥
          </h2>
        </motion.div>

        {/* Transliteration */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-body text-sm md:text-base text-muted-foreground italic leading-relaxed">
            Om Mangalam Bhagwan Vishnuh<br />
            Mangalam Garudadhwajah<br />
            Mangalam Pundarikaakshah<br />
            Mangalaaytano Harih
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="w-24 h-px bg-gold/50 mx-auto my-6"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        />

        {/* English meaning */}
        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          "May Lord Vishnu, who carries Garuda on his flag, whose eyes are like lotus petals,
          and who is the abode of all auspiciousness — bestow his blessings upon this union."
        </motion.p>

        {/* Lotus flowers */}
        <motion.div
          className="flex justify-center gap-6 mt-8 text-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span>🪷</span>
          <span className="shimmer text-lg font-heading">शुभ विवाह</span>
          <span>🪷</span>
        </motion.div>
      </div>
    </section>
  );
};

export default MantraSection;
