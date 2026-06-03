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
            {couple.brideNickname} &amp; {couple.groomNickname}
          </motion.p>
        </div>

      </section>

      <WaveDivider type="cream-to-navy" />

      <footer className="footer" id="footer">
        <p className="footer-credit">Made with ❤️ by Halal Journey</p>
      </footer>
    </>
  );
};

export default ClosingSection;
