import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const InvitationMessage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          className="text-4xl mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          💌
        </motion.div>

        <motion.div
          className="glass rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-heading text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            Dil se nivedan hai ki aap apni upasthiti se<br />
            is shubh avsar ko aur bhi khaas banayein.
          </p>
          <div className="w-16 h-px bg-gold/50 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
            With love, we invite you to celebrate this beautiful union.
          </p>
          <div className="mt-8 font-script text-3xl text-gold-dark">
            Ankita & Anmol
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationMessage;
