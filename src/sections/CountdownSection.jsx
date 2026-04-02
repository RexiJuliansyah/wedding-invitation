import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownSection() {
  const targetDate = new Date('2026-07-11T08:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const Item = ({ value, label }) => (
    <div className="flex flex-col items-center p-4 min-w-[80px] md:min-w-[100px]">
      <span className="text-4xl md:text-5xl font-serif text-brown-dark mb-2">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-widest text-brown-soft">{label}</span>
    </div>
  );

  return (
    <section className="py-24 px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass-panel p-8 md:p-12 text-center shadow-2xl"
      >
        <h2 className="text-3xl font-serif text-brown-dark mb-8 italic">Menuju Hari Bahagia</h2>

        <div className="flex justify-center flex-wrap gap-4 md:gap-8 divide-x divide-brown-soft/30">
          <Item value={timeLeft.days} label="Hari" />
          <Item value={timeLeft.hours} label="Jam" />
          <Item value={timeLeft.minutes} label="Menit" />
          <Item value={timeLeft.seconds} label="Detik" />
        </div>
      </motion.div>
    </section>
  );
}
