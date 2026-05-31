import React from 'react';
import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';

const generateICS = (event, coupleName) => {
  const weddingISO = invitationData.event.weddingDate;
  const startDate = new Date(weddingISO);

  if (event.title === 'Resepsi') {
    startDate.setHours(11, 0, 0);
  }

  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 2);

  const toICSDate = (date) => {
    const utc = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return utc.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding//Julia & Rexi//ID',
    'BEGIN:VEVENT',
    `DTSTART:${toICSDate(startDate)}`,
    `DTEND:${toICSDate(endDate)}`,
    `SUMMARY:${event.title} - ${coupleName}`,
    `DESCRIPTION:${event.venue}\\n${event.address.replace(/\n/g, '\\n')}`,
    `LOCATION:${event.venue}, ${event.address.replace(/\n/g, ', ')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${event.title.toLowerCase().replace(/\s+/g, '-')}-${coupleName.toLowerCase().replace(/\s+/g, '-')}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

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

        <button
          className="btn-location"
          onClick={() => {
            generateICS(akad, coupleName);
            setTimeout(() => generateICS(resepsi, coupleName), 500);
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Simpan ke Kalender
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
