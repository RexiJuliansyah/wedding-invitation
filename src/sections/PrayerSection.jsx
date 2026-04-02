import { motion } from 'framer-motion';

export default function PrayerSection() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center relative" id="prayer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="glass-panel p-10 md:p-16 flex flex-col items-center justify-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brown-soft/30 via-brown-dark/30 to-brown-soft/30"></div>
        
        <h2 className="text-3xl md:text-5xl text-brown-dark mb-6 font-arabic leading-relaxed" style={{ fontFamily: "Amiri, serif", lineHeight: "2" }}>
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </h2>
        
        <p className="text-sm md:text-base font-serif italic text-brown-soft mb-1">
          "With the name of Allah, the Most Gracious, the Most Merciful."
        </p>
        <p className="text-xs font-serif text-brown-soft/70 mb-8">
          (Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang)
        </p>

        <div className="space-y-6 text-brown-dark/90 leading-relaxed font-serif text-lg md:text-xl mb-8">
          <p>
            As we embark on this beautiful journey together, we are filled with joy and gratitude.
          </p>
          <p>
            Surrounded by the love of our family and friends, we invite you to join us as we celebrate the beginning of our new life.
          </p>
        </div>

        <div className="w-12 h-px bg-brown-soft/50 mx-auto mb-8"></div>

        <div className="space-y-4 text-brown-dark/70 leading-relaxed font-serif text-sm md:text-base">
          <p>
            Saat kami memulai perjalanan yang indah ini bersama, kami senantiasa dipenuhi dengan kebahagiaan dan rasa syukur.
          </p>
          <p>
            Dikelilingi oleh cinta dan doa dari keluarga serta sahabat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir merayakan awal dari kehidupan kehidupan baru kami.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
