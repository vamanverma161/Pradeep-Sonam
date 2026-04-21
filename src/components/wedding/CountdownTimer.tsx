import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useWeddingData } from "@/hooks/useWeddingData";

const CountdownTimer = () => {
  const data = useWeddingData();
  const WEDDING_DATE = new Date(data.countdown.date).getTime();
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
  }, [WEDDING_DATE]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section
      className="py-24 md:py-32 px-4 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(20 80% 92%), hsl(40 33% 96%))" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
          Counting Down To Forever
        </h2>
        <div className="w-24 h-px bg-gold/50 mx-auto mb-12" />

        <div className="flex justify-center gap-4 md:gap-8">
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className="glass rounded-2xl p-4 md:p-6 min-w-[70px] md:min-w-[100px]"
            >
              <div className="font-heading text-3xl md:text-5xl text-gold-dark tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
