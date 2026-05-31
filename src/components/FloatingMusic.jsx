import React, { useState, useRef, useEffect } from 'react';

const FloatingMusic = ({ isPlaying, onToggle }) => {
  return (
    <button
      className={`music-toggle ${isPlaying ? 'music-toggle--playing' : ''}`}
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      id="music-toggle-btn"
    >
      {isPlaying ? (
        // Pause icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        // Play icon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      )}
    </button>
  );
};

export default FloatingMusic;
