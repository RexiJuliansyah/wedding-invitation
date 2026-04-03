import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.3 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex items-center justify-center gap-4 py-4 max-w-xs mx-auto"
    >
      {/* Garis kiri */}
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brown-soft/50"></div>

      {/* Ornamen tengah - bentuk bunga/diamond sederhana */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-brown-soft/70 shrink-0"
      >
        {/* Diamond shape */}
        <path
          d="M10 2L14 10L10 18L6 10L10 2Z"
          fill="currentColor"
          opacity="0.4"
        />
        {/* Petal accents */}
        <circle cx="10" cy="10" r="2.5" fill="currentColor" opacity="0.7" />
        <circle cx="10" cy="4" r="1.2" fill="currentColor" opacity="0.3" />
        <circle cx="10" cy="16" r="1.2" fill="currentColor" opacity="0.3" />
        <circle cx="4" cy="10" r="1.2" fill="currentColor" opacity="0.3" />
        <circle cx="16" cy="10" r="1.2" fill="currentColor" opacity="0.3" />
      </svg>

      {/* Garis kanan */}
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brown-soft/50"></div>
    </motion.div>
  );
}
