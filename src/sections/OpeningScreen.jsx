import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import coverImage from '../assets/bg-texture.png';
import { invitationData } from '../data/invitationData';

const OpeningScreen = ({ onOpen, guestName }) => {
  return (
    <motion.div
      key="opening-screen"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
      className="opening-section"
    >
      {/* Background Photo */}
      <div className="opening-bg">
        <img
          src={coverImage}
          alt={`${invitationData.couple.groomNickname} & ${invitationData.couple.brideNickname}`}
          loading="eager"
        />
      </div>

      {/* Gradient overlay from bottom */}
      <div className="opening-gradient" />

      {/* Content */}
      <div className="opening-content">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mb-6"
        >
          <p className="font-serif italic text-lg md:text-xl tracking-wide opacity-90 text-navy">
            The Intimate Wedding of
          </p>
          <div className="w-12 h-[1px] mt-3 opacity-50" style={{ backgroundColor: 'var(--navy)' }}></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="opening-names flex flex-col items-center justify-center leading-none"
        >
          <span>{invitationData.couple.brideNickname}</span>
          <span className="text-3xl sm:text-4xl text-sage-600/80 my-1 font-serif italic">&amp;</span>
          <span>{invitationData.couple.groomNickname}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="opening-guest-label"
        >
          Kepada Bapak/Ibu/Saudara/i
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="opening-guest-name"
        >
          {guestName || 'Tamu Undangan'}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="btn-open"
          onClick={onOpen}
          id="btn-open-invitation"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Buka Undangan
        </motion.button>
      </div>

    </motion.div>
  );
};

export default OpeningScreen;
