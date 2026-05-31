import { motion } from 'framer-motion';
import { FloralCornerStack, FloralAccent, ornaments } from '../components/FloralOrnaments';
import { useCountdown } from '../hooks/useCountdown';
import { invitationData } from '../data/invitationData';

const HeroSection = () => {
  const { days, hours, minutes, seconds } = useCountdown(invitationData.event.weddingDate);

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

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="scroll-indicator"
          onClick={() => document.getElementById('couple')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll Down</span>
        </motion.div>
      </div>

      <FloralCornerStack position="bottom-left" />
      <FloralCornerStack position="bottom-right" />
    </section>
  );
};

export default HeroSection;
