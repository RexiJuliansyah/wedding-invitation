import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg z-10 glass-panel p-8 md:p-12"
      >
        <p className="text-sm tracking-widest text-brown-dark mb-4 group uppercase">
          Save The Date
        </p>

        {/* Illustrations container */}
        <div className="relative w-full aspect-video sm:aspect-square max-h-[300px] mb-8 flex justify-center items-end">
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src="/src/assets/groom.jpg" 
            alt="Groom" 
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-cream-light shadow-md absolute -translate-x-8 z-0"
          />
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            src="/src/assets/bride.jpg" 
            alt="Bride" 
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-cream-light shadow-md absolute translate-x-8 z-10"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-serif text-brown-dark mb-2">Juliana & Rexi</h1>
        <p className="italic text-brown-soft text-xl font-serif mb-6">Are getting married</p>
        
        <div className="w-px h-12 bg-brown-soft mx-auto mb-6"></div>
        <p className="tracking-widest uppercase font-medium">11 . 07 . 2026</p>
      </motion.div>
    </section>
  );
}
