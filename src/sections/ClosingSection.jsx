import { motion } from 'framer-motion';
import { FloralCornerStack, FloralAccent } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';
import WaveDivider from '../components/WaveDivider';

const ClosingSection = () => {
  const { couple, meta } = invitationData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <>
      <section className="closing-section" id="closing">
        <div className="watercolor-stain watercolor-stain--top-right" />

        <div className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}
            className="closing-photo-wrapper"
          >
            {/* <div className="closing-photo-frame">
              <img src={closingImage} alt={`${couple.groomNickname} & ${couple.brideNickname}`} loading="lazy" />
            </div> */}
            <FloralAccent className="couple-photo-floral" style={{ bottom: '-10px', right: '-30px', width: '85px' }} />
          </motion.div>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="closing-text"
          >
            {meta.closingText}
          </motion.p>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="closing-salam"
          >
            Wassalamu'alaikum Wr. Wb.
          </motion.p>

          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="closing-names"
          >
            {couple.groomNickname} &amp; {couple.brideNickname}
          </motion.p>
        </div>

      </section>

      <WaveDivider type="cream-to-navy" />

      <footer className="footer" id="footer">
        <p className="footer-credit">Made with ❤️ by Halal Journey</p>
        <div className="footer-socials">
          {/* <a href={couple.groomIg} target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a> */}
        </div>
      </footer>
    </>
  );
};

export default ClosingSection;
