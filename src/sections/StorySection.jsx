import React from 'react';
import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';
import storyImage from '../assets/bride.jpeg';

const StorySection = () => {
  const { story } = invitationData;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="story-section" id="story">
      <div className="watercolor-stain watercolor-stain--bottom-left" />

      <div className="relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="story-title"
        >
          Love Story
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="story-photo"
        >
          <img
            src={storyImage}
            alt="Love Story"
            loading="lazy"
          />
        </motion.div>

        <div className="story-timeline">
          {story.map((item, index) => (
            <motion.div
              className="story-item"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="story-item-title">{item.title}</h3>
              <p className="story-item-text">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <FloralCornerStack position="bottom-left" />
      <FloralCornerStack position="bottom-right" />
    </section>
  );
};

export default StorySection;
