import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-04-27T00:00:00").getTime();

const CountdownTimer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = Math.max(WEDDING_DATE - now, 0);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(20 80% 92%), hsl(40 33% 96%))" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="font-heading text-3xl md:text-5xl text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Counting Down To Forever
        </motion.h2>
        <motion.div
          className="w-24 h-px bg-gold/50 mx-auto mb-12"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="glass rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className="font-heading text-3xl md:text-5xl text-gold-dark tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
