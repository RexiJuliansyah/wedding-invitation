import React from 'react';

/**
 * Wave divider SVG component for smooth cream ↔ navy transitions
 */
export const WaveDivider = ({ type = 'cream-to-navy', className = '' }) => {
  if (type === 'cream-to-navy') {
    return (
      <div className={`wave-divider wave-divider--cream-to-navy ${className}`}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Back wave layer - darker */}
          <path
            d="M0,60 C180,120 360,0 540,60 C720,120 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z"
            fill="#0E3460"
            opacity="0.5"
          />
          {/* Front wave layer - main navy */}
          <path
            d="M0,80 C200,40 400,100 600,70 C800,40 1000,100 1200,70 C1350,50 1400,80 1440,75 L1440,120 L0,120 Z"
            fill="#113468"
          />
        </svg>
      </div>
    );
  }

  // navy-to-cream
  return (
    <div className={`wave-divider wave-divider--navy-to-cream ${className}`}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,60 C180,120 360,0 540,60 C720,120 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z"
          fill="#F5EDE2"
          opacity="0.5"
        />
        <path
          d="M0,80 C200,40 400,100 600,70 C800,40 1000,100 1200,70 C1350,50 1400,80 1440,75 L1440,120 L0,120 Z"
          fill="#FDF9F3"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
