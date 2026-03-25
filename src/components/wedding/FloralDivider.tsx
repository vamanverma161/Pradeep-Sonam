import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FloralDivider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center gap-3 py-4 select-none"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="h-px w-16 md:w-24 bg-gold/30" />
      <span className="text-gold/60 text-lg">❀</span>
      <div className="h-px w-8 md:w-12 bg-gold/30" />
      <span className="text-gold/60 text-sm">✿</span>
      <div className="h-px w-8 md:w-12 bg-gold/30" />
      <span className="text-gold/60 text-lg">❀</span>
      <div className="h-px w-16 md:w-24 bg-gold/30" />
    </motion.div>
  );
};

export default FloralDivider;
