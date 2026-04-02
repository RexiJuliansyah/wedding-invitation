import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
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
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl font-serif font-bold text-brown-dark opacity-70 italic">
            &
          </div>

          {/* Bride Profile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-xl border-8 border-white bg-cream">
              <img src={brideImg} alt="Bride" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-brown-dark mb-2">Juliana Kus Inggardini</h3>
            <p className="text-sm text-brown-dark mb-4 uppercase tracking-widest">The Bride</p>
            <p className="text-sm text-brown-dark/80 mb-2">Putri dari</p>
            <p className="text-sm font-medium text-brown-dark mb-6">Bapak Sugito &<br />Ibu Endang Suningsih</p>
            <a
              href="https://www.instagram.com/juliainggardini"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-brown-dark/90 hover:text-brown-dark transition-colors"
            >
              <Instagram className="w-4 h-4 mr-2" />
              <span className="text-xs">@juliainggardini</span>
            </a>
          </motion.div>

          {/* Groom Profile */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 shadow-xl border-8 border-white bg-cream">
              <img src={groomImg} alt="Groom" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-brown-dark mb-2">Rexi Faza Juliansyah</h3>
            <p className="text-sm text-brown-dark mb-4 uppercase tracking-widest">The Groom</p>
            <p className="text-sm text-brown-dark/80 mb-2">Putra dari</p>
            <p className="text-sm font-medium text-brown-dark mb-6">Bapak Ifdial &<br />Ibu Lindawati</p>
            <a
              href="https://www.instagram.com/rexijuliansyah"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-brown-dark/90 hover:text-brown-dark transition-colors"
            >
              <Instagram className="w-4 h-4 mr-2" />
              <span className="text-xs">@rexijuliansyah</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
