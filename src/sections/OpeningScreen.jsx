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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="opening-label"
        >
          The Wedding of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="opening-names"
        >
          {invitationData.couple.brideNickname} & {invitationData.couple.groomNickname}
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
