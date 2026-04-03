import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, CalendarPlus } from 'lucide-react';

export default function EventDetails() {
  return (
    <section className="py-24 px-6 md:px-12 relative" id="event">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm tracking-widest uppercase text-brown-soft mb-2"
        >
          Time & Place
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-serif text-brown-dark"
        >
          Event Details
        </motion.h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Akad Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brown-soft/40 via-brown-dark/40 to-brown-soft/40"></div>

          <h3 className="text-3xl font-serif text-brown-dark mb-8">Akad Nikah</h3>

          <div className="space-y-6 mb-8 w-full">
            <div className="flex flex-col items-center">
              <Calendar className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-medium text-brown-dark">Sabtu, 11 Juli 2026</p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-medium text-brown-dark">08:00 - 10:00 WIB</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-bold text-brown-dark mb-1">Ponyo® Resto & Wedding</p>
              <p className="text-sm text-brown-dark/70"><span className="font-semibold block mb-1">Aula Atas</span>Jl. Raya Cinunuk No.186, Cinunuk, Kec. Cileunyi<br />Kabupaten Bandung, Jawa Barat</p>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://maps.google.com/?q=Ponyo+Resto+Cinunuk+Cileunyi"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-cream rounded-full transition-colors text-sm tracking-wide text-center"
            >
              Open Map
            </a>
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Julia+%26+Rexi+%E2%80%94+Akad+Nikah&dates=20260711T010000Z/20260711T030000Z&details=Akad+Nikah+Julia+%26+Rexi+di+Ponyo+Resto+%26+Wedding&location=Ponyo+Resto+%26+Wedding%2C+Jl.+Raya+Cinunuk+No.186%2C+Bandung&sf=true"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-brown-dark text-cream hover:bg-brown-dark/90 rounded-full transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <CalendarPlus className="w-4 h-4" /> Save Date
            </a>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brown-soft/40 via-brown-dark/40 to-brown-soft/40"></div>

          <h3 className="text-3xl font-serif text-brown-dark mb-8">Resepsi</h3>

          <div className="space-y-6 mb-8 w-full">
            <div className="flex flex-col items-center">
              <Calendar className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-medium text-brown-dark">Sabtu, 11 Juli 2026</p>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-medium text-brown-dark">11:00 - 13:30 WIB</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="w-5 h-5 text-brown-soft mb-2" />
              <p className="font-bold text-brown-dark mb-1">Ponyo® Resto & Wedding</p>
              <p className="text-sm text-brown-dark/70"><span className="font-semibold block mb-1">Aula Atas</span>Jl. Raya Cinunuk No.186, Cinunuk, Kec. Cileunyi<br />Kabupaten Bandung, Jawa Barat</p>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="https://maps.google.com/?q=Ponyo+Resto+Cinunuk+Cileunyi"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 border border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-cream rounded-full transition-colors text-sm tracking-wide text-center"
            >
              Open Map
            </a>
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Julia+%26+Rexi+%E2%80%94+Resepsi&dates=20260711T040000Z/20260711T063000Z&details=Resepsi+Pernikahan+Julia+%26+Rexi+di+Ponyo+Resto+%26+Wedding&location=Ponyo+Resto+%26+Wedding%2C+Jl.+Raya+Cinunuk+No.186%2C+Bandung&sf=true"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-brown-dark text-cream hover:bg-brown-dark/90 rounded-full transition-colors text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <CalendarPlus className="w-4 h-4" /> Save Date
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
