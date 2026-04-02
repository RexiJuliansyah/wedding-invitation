import { motion } from 'framer-motion';
import bgTexture from '../assets/bg-texture.png';

export default function ClosingSection() {
  return (
    <section className="py-24 px-6 md:px-12 text-center bg-brown-dark text-cream relative">
      <div 
        className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: 'cover' }}
      ></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <p className="text-sm tracking-widest uppercase text-cream/70 mb-8 italic">Terima Kasih</p>
        
        <p className="mb-12 text-cream/90 leading-relaxed font-light">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.
        </p>

        <h2 className="text-5xl font-serif mb-4">Juliana & Rexi</h2>
        <p className="text-sm tracking-widest uppercase text-cream/50 mb-16">Kami yang berbahagia</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-sm text-cream/70 font-medium">
          <div>
            <p className="mb-1 uppercase tracking-widest text-xs opacity-50">Keluarga Bapak</p>
            <p>Sugito</p>
          </div>
          <div className="hidden md:block opacity-30 text-2xl font-serif">&</div>
          <div>
            <p className="mb-1 uppercase tracking-widest text-xs opacity-50">Keluarga Bapak</p>
            <p>Ifdial</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
