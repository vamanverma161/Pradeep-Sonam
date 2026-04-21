import { useEffect, useState } from "react";
import { useWeddingData } from "@/hooks/useWeddingData";

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const data = useWeddingData();
  const { bride = "Sonam", groom = "Pradeep" } = data.couple || {};
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, hsl(40 33% 96%), hsl(20 80% 88%), hsl(40 33% 96%))" }}
    >
      <div className="text-center">
        <div
          className="font-script text-7xl md:text-9xl text-gold-dark mb-4"
        >
          {groom.charAt(0)} & {bride.charAt(0)}
        </div>
        <div className="h-px w-32 mx-auto bg-gold/60 mb-4" />
        <p className="font-heading text-lg md:text-xl text-foreground/70 tracking-widest uppercase">
          We're Getting Married
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;
