import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';
import { useCountdown } from '../hooks/useCountdown';

const EventCard = ({ akad, resepsi, coupleName }) => {
  const handleOpenMaps = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="event-card"
    >
      <strong><p className="event-card-time" style={{ fontFamily: "var(--font-script)", fontSize: '24px' }}>{akad.date}</p></strong>
      <div style={{ margin: '16px 0' }}>
        <p className="event-card-time" style={{ marginBottom: '4px' }}>
          <strong>{akad.title}:</strong> {akad.time}
        </p>
        <p className="event-card-time">
          <strong>{resepsi.title}:</strong> {resepsi.time}
        </p>
      </div>

      <strong><p className="event-card-time">Tempat: {akad.venue}</p></strong>
      <p className="event-card-address" style={{ whiteSpace: 'pre-line' }}>{akad.address}</p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          className="btn-location"
          onClick={() => handleOpenMaps(akad.mapsUrl)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Lihat Lokasi
        </button>
      </div>
    </motion.div>
  );
};

const EventSection = () => {
  const { event, couple } = invitationData;
  const coupleName = `${couple.brideNickname} & ${couple.groomNickname}`;
  const { days, hours, minutes, seconds } = useCountdown(invitationData.event.weddingDate);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="event-section" id="event">
      <div className="watercolor-stain watercolor-stain--center" />

      <FloralCornerStack position="top-left" />
      <FloralCornerStack position="top-right" />

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="event-section-title"
        >
          {event.akad.title} & {event.resepsi.title}
        </motion.h2>

        {/* Countdown Timer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="countdown-wrapper"
          style={{ marginBottom: '32px' }}
        >
          <div className="countdown-item">
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">Hari</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-label">Jam</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-label">Menit</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-label">Detik</span>
          </div>
        </motion.div>

        <EventCard akad={event.akad} resepsi={event.resepsi} coupleName={coupleName} />
      </div>
    </section>
  );
};

export default EventSection;
