import React from 'react';
import { motion } from 'framer-motion';
import { FloralCornerStack, FloralAccent, ornaments } from '../components/FloralOrnaments';
import { useCountdown } from '../hooks/useCountdown';
import { invitationData } from '../data/invitationData';
import heroImage from '../assets//bg-texture.png';

const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown(invitationData.event.weddingDate);

  const handleSaveTheDate = () => {
    const event = invitationData.event.akad;
    const startDate = '20260711T010000Z'; // UTC time (08:00 WIB - 7 = 01:00)
    const endDate = '20260711T050000Z';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Wedding//Julia & Rexi//ID',
      'BEGIN:VEVENT',
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:Pernikahan ${invitationData.couple.groomNickname} & ${invitationData.couple.brideNickname}`,
      `DESCRIPTION:${event.venue}\\n${event.address.replace(/\n/g, '\\n')}`,
      `LOCATION:${event.venue}, ${event.address.replace(/\n/g, ', ')}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wedding-julia-rexi.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="hero-section" id="home">

      {/* Gradient overlay from bottom */}
      <div className="opening-gradient" />
      {/* Watercolor stains */}
      <div className="watercolor-stain watercolor-stain--top-right" />
      <div className="watercolor-stain watercolor-stain--bottom-left" />

      {/* STACKED floral corners */}
      <FloralCornerStack position="top-left" />
      <FloralCornerStack position="top-right" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hero-subtitle"
        >
          THE WEDDING OF
        </motion.p>


        {/* Couple Names */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hero-names"
        >
          {invitationData.couple.brideNickname} &amp; {invitationData.couple.groomNickname}
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="couple-fullname"
        >
          {invitationData.meta.hashtag}
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="countdown-wrapper"
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

        {/* Date */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="hero-date"
        >
          11.07.2026
        </motion.p>

        {/* Save The Date Button */}
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="btn-save-date"
          onClick={handleSaveTheDate}
          id="btn-save-the-date"
        >
          Save The Date
        </motion.button>
      </div>

      <FloralCornerStack position="bottom-left" />
      <FloralCornerStack position="bottom-right" />
    </section>
  );
};

export default HeroSection;
