import React from 'react';
import { motion } from 'framer-motion';
import { invitationData } from '../data/invitationData';
import bismillahImage from '../assets/images/Bismillah-image.png';

const QuoteSection = () => {
  const { meta } = invitationData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="quote-section" id="save-the-date">
      <div className="relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="flex justify-center w-full"
        >
          <img
            src={bismillahImage}
            alt="Bismillah"
            className="couple-bismillah-img-putih mb-5"
          />
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="quote-text"
        >
          {meta.quranQuote.text}
        </motion.p>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="quote-source"
        >
          {meta.quranQuote.source}
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteSection;
