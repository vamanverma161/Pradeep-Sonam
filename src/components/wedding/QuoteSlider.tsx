import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const quotes = [
  { text: "A successful marriage requires falling in love many times, always with the same person.", author: "Mignon McLaughlin" },
  { text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "Maya Angelou" },
  { text: "Love is not about how many days, months, or years you've been together. It's about how much you love each other every day.", author: "Unknown" },
  { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn" },
];

const QuoteSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream px-4">
      <div className="max-w-2xl mx-auto text-center min-h-[160px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-script text-5xl text-gold/50">"</span>
            <p className="font-heading text-lg md:text-2xl text-foreground/80 leading-relaxed italic mb-4">
              {quotes[current].text}
            </p>
            <p className="font-body text-sm text-muted-foreground">— {quotes[current].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuoteSlider;
