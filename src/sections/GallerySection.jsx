import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FloralCornerStack } from '../components/FloralOrnaments';
import { invitationData } from '../data/invitationData';
import image1 from '../assets/bride.jpeg';
import image2 from '../assets/groom.jpeg';
import image3 from '../assets/groom.jpeg';

const galleryImages = [image1, image2, image3, image1];

const GallerySection = () => {
  const { meta, gallery } = invitationData;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="watercolor-stain watercolor-stain--top-right" />

      <FloralCornerStack position="top-left" />
      <FloralCornerStack position="top-right" />

      <div className="relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="gallery-title"
        >
          Galeri Foto
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="gallery-text"
        >
          {meta.galleryText}
        </motion.p>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="gallery-grid"
        >
          {gallery.map((item, index) => (
            <div
              className="gallery-item"
              key={item.id}
              onClick={() => openLightbox(index)}
            >
              <img src={galleryImages[index % galleryImages.length]} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>

      {typeof document !== 'undefined' && createPortal(
        <div
          className={`lightbox-overlay ${lightboxIndex !== null ? 'lightbox-overlay--visible' : ''}`}
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">✕</button>
          {lightboxIndex !== null && (
            <img
              className="lightbox-image"
              src={galleryImages[lightboxIndex % galleryImages.length]}
              alt={gallery[lightboxIndex]?.alt || 'Gallery photo'}
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>,
        document.body
      )}
    </section>
  );
};

export default GallerySection;
