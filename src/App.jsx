import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import OpeningScreen from './sections/OpeningScreen';
import HeroSection from './sections/HeroSection';
import CoupleSection from './sections/CoupleSection';
import QuoteSection from './sections/QuoteSection';
import EventSection from './sections/EventDetails';
import GiftSection from './sections/GiftSection';
import WishesSection from './sections/WishesSection';
import ClosingSection from './sections/ClosingSection';

import FloatingMusic from './components/FloatingMusic';
import FloatingNavbar from './components/FloatingNavbar';

import { invitationData } from './data/invitationData';
import WaveDivider from './sections/WaveDivider';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [guestName, setGuestName] = useState('');

  const audioRef = useRef(null);

  useEffect(() => {
    // Get guest name from URL parameter ?to=Nama+Tamu
    const urlParams = new URLSearchParams(window.location.search);
    const to = urlParams.get('to');
    if (to) {
      setGuestName(to);
    }

    // Initialize audio
    audioRef.current = new Audio(invitationData.music.src);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Play music when invitation is opened
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsMusicPlaying(true))
        .catch(err => console.log('Autoplay prevented:', err));
    }
  };

  const toggleMusic = () => {
    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="app-wrapper">
      <AnimatePresence>
        {!isOpen && (
          <OpeningScreen
            onOpen={handleOpenInvitation}
            guestName={guestName}
          />
        )}
      </AnimatePresence>

      <main className={`main-content ${isOpen ? 'main-content--visible' : ''}`}>
        <HeroSection />
        <CoupleSection />
        <WaveDivider type="cream-to-navy" />
        <QuoteSection />
        <EventSection />
        <WaveDivider type="cream-to-navy" />
        <GiftSection />
        <WishesSection />
        <ClosingSection />
      </main>

      {/* Global Elements - Only visible when invitation is opened */}
      <div className={`global-elements ${isOpen ? 'global-elements--visible' : ''}`}>
        <FloatingMusic isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        <FloatingNavbar />
      </div>
    </div>
  );
}

export default App;
