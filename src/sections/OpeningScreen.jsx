import { motion } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import bgTexture from '../assets/bg-texture.png';

export default function OpeningScreen({ guestName, onOpen }) {
  return (
    <motion.div
      key="opening-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 1.2, ease: [0.83, 0, 0.39, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Fixed Background Layer for Opening Screen */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center p-8 max-w-md mx-auto"
      >
        <p className="text-sm tracking-widest uppercase mb-4 text-brown-soft">The Wedding Of</p>
        <h1 className="text-6xl mb-6 text-brown-dark italic font-serif">Julia & Rexi</h1>

        <div className="my-8 mb-12">
          <p className="text-sm mb-2 text-brown-dark/70">Kepada Yth.</p>
          <h2 className="text-2xl font-serif text-brown-dark border-b border-brown-soft/50 inline-block pb-1 min-w-[200px]">
            {guestName || 'Tamu Undangan'}
          </h2>
        </div>

        <button
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center px-8 py-3 bg-brown-dark text-cream rounded-full overflow-hidden transition-transform active:scale-95"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <MailOpen className="w-4 h-4 mr-2" />
          <span className="text-sm tracking-widest uppercase">Buka Undangan</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
