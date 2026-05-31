import { useEffect, useState } from 'react';

// Bentuk kelopak bunga sederhana menggunakan SVG
const PetalSVG = ({ color }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 22C12 22 4 16 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 16 12 22 12 22Z" />
  </svg>
);

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Deteksi apakah device mobile (layar kecil) untuk mengurangi jumlah partikel
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 15 : 35;

    const colors = ['#F4E3E5', '#F2D1D5', '#EDCACD', '#F8E0E0', '#EDD5CE'];

    const newParticles = Array.from({ length: petalCount }).map((_, i) => {
      const xStart = Math.random() * 100;
      const xEnd = xStart + (Math.random() * 10 - 5); // sedikit zigzag
      const delay = Math.random() * 15;
      const duration = 14 + Math.random() * 16;
      const size = 12 + Math.random() * 18;
      const opacity = 0.5 + Math.random() * 0.4;
      const rotation = Math.random() * 360;
      const color = colors[Math.floor(Math.random() * colors.length)];

      return { id: i, xStart, xEnd, delay, duration, size, opacity, rotation, color };
    });

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden max-w-[500px] mx-auto left-0 right-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall drop-shadow-sm"
          style={{
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            left: `${p.xStart}%`,
            top: '-5%',
            '--x-end': `${p.xEnd - p.xStart}%`,
            '--rotation': `${p.rotation}deg`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            willChange: 'transform',
          }}
        >
          <PetalSVG color={p.color} />
        </div>
      ))}
    </div>
  );
}
