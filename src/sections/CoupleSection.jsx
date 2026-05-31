import React from 'react';
import { motion } from 'framer-motion';
import { FloralCornerStack, FloralAccent, FloralAccent2 } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';
import groomImage from '../assets/groom.jpeg';
import brideImage from '../assets/bride.jpeg';

const CoupleSection = () => {
  const { couple, meta } = invitationData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="couple-section" id="couple">
      <div className="watercolor-stain watercolor-stain--top-right" />
      <div className="watercolor-stain watercolor-stain--bottom-left" />

      <div className="relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="couple-salam"
        >
          Assalamu'alaikum Wr. Wb
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="couple-invitation-text"
        >
          {meta.invitationText}
        </motion.p>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="section-divider-ornament"
        >
          <span className="section-divider-line" />
          <span className="section-divider-dot" />
          <span className="section-divider-line" />
        </motion.div>

        {/* Bride */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="couple-profile mt-10"
        >
          <div className="couple-photo-wrapper">
            <div className="couple-photo-frame">
              <img src={brideImage} alt={couple.brideFullName} loading="lazy" />
            </div>
            <FloralAccent2 className="couple-photo-floral-left" />
          </div>

          <h3 className="couple-nickname">{couple.brideNickname}</h3>
          <p className="couple-fullname">{couple.brideFullName}</p>

          <div className="couple-parents">
            <span className="parents-label">Putri dari</span>
            {couple.brideParents.father} &amp; {couple.brideParents.mother}
          </div>

          <a href={couple.brideIg} target="_blank" rel="noopener noreferrer" className="couple-ig-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@{couple.brideIg.split('/').filter(Boolean).pop()}</span>
          </a>
        </motion.div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="couple-separator"
        >
          &amp;
        </motion.div>

        {/* Groom */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="couple-profile"
        >
          <div className="couple-photo-wrapper">
            <div className="couple-photo-frame">
              <img src={groomImage} alt={couple.groomFullName} loading="lazy" />
            </div>
            <FloralAccent className="couple-photo-floral" />
          </div>

          <h3 className="couple-nickname">{couple.groomNickname}</h3>
          <p className="couple-fullname">{couple.groomFullName}</p>

          <div className="couple-parents">
            <span className="parents-label">Putra dari</span>
            {couple.groomParents.father} &amp; {couple.groomParents.mother}
          </div>

          <a href={couple.groomIg} target="_blank" rel="noopener noreferrer" className="couple-ig-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>@{couple.groomIg.split('/').filter(Boolean).pop()}</span>
          </a>
        </motion.div>
      </div>

      <FloralCornerStack position="bottom-left" />
      <FloralCornerStack position="bottom-right" />
    </section>
  );
};

export default CoupleSection;
