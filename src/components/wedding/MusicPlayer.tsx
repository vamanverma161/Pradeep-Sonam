import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, VolumeX, Volume2, Heart } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
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

    return () => {
      audio.pause();
    };
  }, []);

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
    
    // First interaction - start playing with sound
    if (!hasInteracted) {
      audioRef.current.muted = false;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
      setHasInteracted(true);
      setIsMuted(false);
    } else {
      // Toggle mute
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
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
      transition={{ delay: 1, duration: 0.5 }}
    >
      <button
        onClick={toggleMute}
        className="w-12 h-12 rounded-full glass flex items-center justify-center text-gold-dark hover:scale-110 transition-transform"
        aria-label={isMuted ? "Unmute" : "Mute"}
        title={hasInteracted ? (isMuted ? "Click to unmute" : "Click to mute") : "Click to play music 🎵"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full glass flex items-center justify-center text-gold-dark hover:scale-110 transition-transform ${isPlaying ? "animate-pulse-glow" : ""}`}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        title={isPlaying ? "Pause music" : "Play music"}
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
