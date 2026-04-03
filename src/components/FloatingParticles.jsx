import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Bentuk kelopak bunga sederhana menggunakan SVG
const PetalSVG = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C12 22 4 16 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 16 12 22 12 22Z" />
  </svg>
);

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate konfigurasi acak untuk beberapa kelopak
    const petalCount = 50;
    // Warna soft pink yang setema dengan undangan (cream-brown + sentuhan pink lembut)
    const colors = [
      'text-[#F4E3E5]',   // pastel pink (dari tema)
      'text-[#F2D1D5]',   // soft rose
      'text-[#EDCACD]',   // dusty pink
      'text-[#F8E0E0]',   // blush pink terang
      'text-[#EDD5CE]',   // warm pink-cream blend
    ];

    const newParticles = Array.from({ length: petalCount }).map((_, i) => {
      const xPos = Math.random() * 100;
      const delay = Math.random() * 15;
      const duration = 12 + Math.random() * 15;
      const size = 12 + Math.random() * 20;
      // Opasitas dinaikkan drastis agar terlihat terang benderang
      const opacity = 0.7 + Math.random() * 0.3;

      const colorClass = colors[Math.floor(Math.random() * colors.length)];

      return {
        id: i,
        xParams: [xPos + 'vw', xPos - 5 + 'vw', xPos + 5 + 'vw', xPos + 'vw'], // Zigzag turun
        delay,
        duration,
        size,
        opacity,
        colorClass,
        rotation: Math.random() * 360,
      };
    });

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          // Tambahkan drop-shadow agar bunga semakin terlepas/terpisah dari warna background
          className={`absolute ${p.colorClass} drop-shadow-md`}
          style={{
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            left: 0,
            top: '-5%', // Mulai dari luar layar atas
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: p.xParams,
            rotate: [p.rotation, p.rotation + 200, p.rotation - 100, p.rotation + 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        >
          <PetalSVG />
        </motion.div>
      ))}
    </div>
  );
}
