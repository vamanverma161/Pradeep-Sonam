import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX, Volume2, Heart } from "lucide-react";

const MusicPlayer = ({ autoPlayTrigger }: { autoPlayTrigger?: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const songUrl = import.meta.env.VITE_SONG_URL as string;
    if (!songUrl) {
      console.warn('No SONG_URL in .env - add VITE_SONG_URL="your-mp3-link.mp3"');
      return;
    }

    // Create audio element 
    const audio = new Audio(songUrl);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    audio.load(); // Preload
    // Instant autoplay with muted start (browser friendly)
    audio.muted = true;
    audio.play().then(() => {
      audio.muted = false; // Unmute after play starts
      setIsPlaying(true);
    }).catch((e) => {
      console.log('Play requires interaction:', e);
    });

    return () => {
      audio.pause();
    };
  }, []);

  // Auto-play when trigger changes
  useEffect(() => {
    if (autoPlayTrigger !== undefined && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const replaySong = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    if (!isPlaying) {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.5, duration: 0.5 }}
    >
      <button
        onClick={toggleMute}
        className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold-dark hover:scale-110 transition-transform"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full glass flex items-center justify-center text-gold-dark hover:scale-110 transition-transform ${isPlaying ? "animate-pulse-glow" : ""}`}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <Music className="w-5 h-5" />
      </button>
      <button
        onClick={replaySong}
        className="w-12 h-12 rounded-full glass bg-gradient-to-br from-peach to-gold/20 flex items-center justify-center text-gold-dark hover:scale-110 hover:rotate-12 transition-all duration-300 animate-pulse"
        aria-label="Replay song from start"
        title="Restart Raanjhanaa ♡"
      >
        <Heart className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
