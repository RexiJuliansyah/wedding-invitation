import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';

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
      <h3 className="event-card-title">{akad.title} & {resepsi.title}</h3>
      <p className="event-card-date">{akad.date}</p>

      <div style={{ margin: '16px 0' }}>
        <p className="event-card-time" style={{ marginBottom: '4px' }}>
          <strong>{akad.title}:</strong> {akad.time}
        </p>
        <p className="event-card-time">
          <strong>{resepsi.title}:</strong> {resepsi.time}
        </p>
      </div>

      <p className="event-card-venue">Tempat: {akad.venue}</p>
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
          Waktu & Tempat
        </motion.h2>

        <EventCard akad={event.akad} resepsi={event.resepsi} coupleName={coupleName} />
      </div>
    </section>
  );
};

export default EventSection;
