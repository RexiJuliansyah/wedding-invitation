import { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Create an audio element attached to the document
    if (!audioRef.current) {
      // Gunakan audio lokal agar tidak ada error dari link eksternal yang mati atau terkena blokir
      const audio = new Audio('/music.mp3');
      audio.loop = true;
      audio.volume = 0.5;
      audioRef.current = audio;
    }

    // Try to play on mount (OpeningScreen unmount means user interacted)
    audioRef.current.play().catch(e => console.log('Autoplay blocked', e));

    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 bg-brown-dark/90 text-cream rounded-full shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
    >
      {isPlaying ? (
        <Music className="w-5 h-5 animate-spin-slow" style={{ animationDuration: '3s' }} />
      ) : (
        <Music2 className="w-5 h-5 opacity-50" />
      )}
    </motion.button>
  );
}
