import { motion } from 'framer-motion';

export default function SplashScreen() {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const letters = ['J', ' ', '&', ' ', 'R'];

  return (
    <motion.div
      key="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-cream"
    >
      {/* Inisial J & R */}
      <div className="flex items-baseline gap-1">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className={`${
              letter === '&'
                ? 'text-3xl md:text-4xl text-brown-soft font-sans mx-2'
                : letter === ' '
                ? 'w-1'
                : 'text-6xl md:text-7xl font-serif text-brown-dark italic'
            }`}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-6 text-xs tracking-[0.3em] uppercase text-brown-soft"
      >
        Loading...
      </motion.p>

      {/* Animated line */}
      <motion.div
        className="mt-4 h-px bg-brown-soft/50 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 120 }}
        transition={{ delay: 0.8, duration: 1.2, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
