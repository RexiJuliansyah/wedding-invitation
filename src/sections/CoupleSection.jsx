import { motion } from 'framer-motion';
import brideImg from '../assets/bride.jpeg';
import groomImg from '../assets/groom.jpeg';

export default function CoupleSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center" id="couple">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-sm tracking-widest uppercase text-brown-soft mb-2">We Invite You To</motion.p>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif text-brown-dark mb-16">Celebrate Our Love</motion.h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
          {/* Divider visible only on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-serif text-brown-soft opacity-30 italic">
            &
          </div>

          {/* Bride Profile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-xl border-8 border-white bg-cream">
              <img src={brideImg} alt="Bride" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-3xl font-serif text-brown-dark mb-2">Juliana Kus Inggardini</h3>
            <p className="text-sm text-brown-soft mb-4 uppercase tracking-widest">The Bride</p>
            <p className="text-sm text-brown-dark/80 mb-2">Putri dari</p>
            <p className="text-sm font-medium text-brown-dark mb-6">Bapak Sugito &<br />Ibu Endang Suningsih</p>
            <a href="#" className="inline-flex items-center text-brown-soft hover:text-brown-dark transition-colors">
              <Camera className="w-4 h-4 mr-2" />
              <span className="text-xs">@julianakus</span>
            </a>
          </motion.div>

          {/* Groom Profile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-xl border-8 border-white bg-cream">
              <img src={groomImg} alt="Groom" className="w-full h-full object-cover focus:object-top" />
            </div>
            <h3 className="text-3xl font-serif text-brown-dark mb-2">Rexi Faza Juliansyah</h3>
            <p className="text-sm text-brown-soft mb-4 uppercase tracking-widest">The Groom</p>
            <p className="text-sm text-brown-dark/80 mb-2">Putra dari</p>
            <p className="text-sm font-medium text-brown-dark mb-6">Bapak Ifdial &<br />Ibu Lindawati</p>
            <a href="#" className="inline-flex items-center text-brown-soft hover:text-brown-dark transition-colors">
              <Camera className="w-4 h-4 mr-2" />
              <span className="text-xs">@rexifaza</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
