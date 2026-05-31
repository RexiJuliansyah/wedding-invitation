import React from 'react';

// Import all ornament images
import ornament01 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-01.webp';
import ornament02 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-02.png';
import ornament03 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-03.webp';
import ornament04 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-04.webp';
import ornament05 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-05.webp';
import ornament06 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-06.webp';
import ornament07 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-07.webp';
import ornament08 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-08.webp';
import ornament09 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-09.webp';
import ornament10 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-10.webp';
import ornament11 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-11.webp';
import ornament12 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-12.webp';
import ornament13 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-13.webp';
import ornament14 from '../assets/ornaments/ORNAMENT-TEMA-01-BUNGA-14.webp';

// ============================================================
// Ornament Map
// ============================================================
export const ornaments = {
  leafBranchTopLeft: ornament01,
  flowersCenter: ornament02,
  flowersCornerTopLeft: ornament03,
  hangingLeaves: ornament04,
  monsteraLeaf: ornament05,
  softFlowersBg: ornament06,
  flowersCornerTopLeft2: ornament07,
  leafBerries: ornament08,
  flowersSmallCorner: ornament09,
  leafBranchAlt: ornament10,
  bouquetVertical: ornament11,
  bouquetUpward: ornament12,
  berryBranch: ornament13,
  bottomRightFlower: ornament14,
};

// ============================================================
// Single Ornament Image
// ============================================================
export const FloralCorner = ({ className = '', style = {}, variant = 'default' }) => {
  const variantMap = {
    default: ornaments.flowersCornerTopLeft,
    leaves: ornaments.leafBranchTopLeft,
    berries: ornaments.leafBerries,
    hanging: ornaments.hangingLeaves,
    small: ornaments.flowersSmallCorner,
    monstera: ornaments.monsteraLeaf,
    bouquet: ornaments.bouquetVertical,
  };

  const src = variantMap[variant] || variantMap.default;

  return (
    <img
      className={className}
      style={{ pointerEvents: 'none', ...style }}
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
    />
  );
};

// ============================================================
// STACKED CORNER — Multiple ornaments layered with wind animation
// Recreates the lush, layered floral look from the reference
// ============================================================
export const FloralCornerStack = ({ position = 'top-left', className = '' }) => {
  const isTop = position.includes('top');

  // NOTE: Mirroring (scaleX/scaleY) is handled by the CSS class on the container
  // (.floral-stack--top-right, .floral-stack--bottom-left, .floral-stack--bottom-right)
  // This prevents CSS wind-sway animations from overriding the flip transforms.

  // Build stacked layers based on position
  // All positions use 'left'/'top' since the container handles mirroring
  const layers = isTop
    ? [
      // Layer 1: Large flower cluster (back, deepest)
      {
        src: ornaments.flowersCornerTopLeft,
        style: {
          width: '150px',
          top: '-10px',
          left: '-15px',
          opacity: 1,
          zIndex: 1,
        },
        animDelay: '0s',
        animClass: 'wind-sway-slow',
      },
      // Layer 2: Leaf branch with berries (overlapping)
      {
        src: ornaments.leafBerries,
        style: {
          width: '140px',
          top: '-8px',
          left: '10px',
          opacity: 0.9,
          zIndex: 3,
        },
        animDelay: '0.4s',
        animClass: 'wind-sway-medium',
      },
      // Layer 3: Monstera leaf (accent in between)
      {
        src: ornaments.monsteraLeaf,
        style: {
          width: '120px',
          top: '30px',
          left: '20px',
          opacity: 1,
          zIndex: 2,
        },
        animDelay: '1s',
        animClass: 'wind-sway-fast',
      },
      // Layer 4: Hanging leaves (front, reaching down)
      {
        src: ornaments.hangingLeaves,
        style: {
          width: '140px',
          top: '-5px',
          opacity: 0.75,
          zIndex: 4,
        },
        animDelay: '0.7s',
        animClass: 'wind-sway-medium',
      },
      // Layer 5: Small leaf branch (subtle extra depth)
      {
        src: ornaments.leafBranchTopLeft,
        style: {
          width: '100px',
          top: '-5px',
          left: '-5px',
          opacity: 0.6,
          zIndex: 0,
        },
        animDelay: '1.2s',
        animClass: 'wind-sway-slow',
      },
    ]
    : [
      // Bottom corners: we use the bottom-right flower image
      // Container handles mirroring for left/right positioning
      {
        src: ornaments.bottomRightFlower,
        style: {
          width: '140px',
          bottom: '-5px',
          right: '-10px',
          opacity: 0.8,
          zIndex: 1,
        },
        animDelay: '0s',
        animClass: 'wind-sway-slow',
      },
      {
        src: ornaments.bouquetUpward,
        style: {
          width: '120px',
          bottom: '0px',
          right: '20px',
          opacity: 0.5,
          zIndex: 0,
        },
        animDelay: '0.5s',
        animClass: 'wind-sway-medium',
      },
    ];

  return (
    <div
      className={`floral-stack floral-stack--${position} ${className}`}
      aria-hidden="true"
    >
      {layers.map((layer, i) => (
        <img
          key={i}
          src={layer.src}
          alt=""
          className={`floral-stack__layer ${layer.animClass}`}
          style={{
            ...layer.style,
            animationDelay: layer.animDelay,
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

// ============================================================
// Floral Accent — for photo frame decoration
// ============================================================
export const FloralAccent = ({ className = '', style = {} }) => (
  <img
    className={`${className} wind-sway-slow`}
    style={{ pointerEvents: 'none', animationDelay: '0.3s', ...style }}
    src={ornaments.bouquetVertical}
    alt=""
    aria-hidden="true"
    loading="lazy"
  />
);

// ============================================================
// Floral Bottom — wide arrangement for section bottoms
// ============================================================
export const FloralBottom = ({ className = '', style = {} }) => (
  <div
    className={className}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      pointerEvents: 'none',
      ...style,
    }}
  >
    <img
      src={ornaments.bottomRightFlower}
      alt=""
      aria-hidden="true"
      className="wind-sway-slow"
      style={{ width: '120px', transform: 'scaleX(-1)' }}
      loading="lazy"
    />
    <img
      src={ornaments.bottomRightFlower}
      alt=""
      aria-hidden="true"
      className="wind-sway-slow"
      style={{ width: '120px', animationDelay: '0.6s' }}
      loading="lazy"
    />
  </div>
);
// ============================================================
// Floral Section Bridge — centered ornament between same-color sections
// Creates visual continuity instead of abrupt section boundary
// ============================================================
export const FloralSectionBridge = ({ className = '' }) => (
  <div
    className={`floral-section-bridge ${className}`}
    aria-hidden="true"
  >
    <span className="floral-bridge-line" />
    <img
      src={ornaments.flowersCenter}
      alt=""
      className="floral-bridge-image wind-sway-slow"
      loading="lazy"
    />
    <span className="floral-bridge-line" />
  </div>
);

export default FloralCorner;
