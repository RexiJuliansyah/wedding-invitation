import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';

import OpeningScreen from './sections/OpeningScreen';
import HeroSection from './sections/HeroSection';

const CoupleSection = lazy(() => import('./sections/CoupleSection'));
const QuoteSection = lazy(() => import('./sections/QuoteSection'));
const EventSection = lazy(() => import('./sections/EventDetails'));
const GiftSection = lazy(() => import('./sections/GiftSection'));
const WishesSection = lazy(() => import('./sections/WishesSection'));
const ClosingSection = lazy(() => import('./sections/ClosingSection'));

import FloatingMusic from './components/FloatingMusic';
import FloatingNavbar from './components/FloatingNavbar';
import FloatingParticles from './components/FloatingParticles';
import SplashScreen from './components/SplashScreen';

import { invitationData } from './data/invitationData';
import WaveDivider from './components/WaveDivider';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [guestName, setGuestName] = useState('');

  const [isLoaded, setIsLoaded] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    // Wait for fonts and initial assets to load before showing the app
    document.fonts.ready.then(() => {
      // Add a tiny delay for smoother transition
      setTimeout(() => setIsLoaded(true), 300);
    });

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

  // Show splash screen while fonts/assets are loading
  if (!isLoaded) {
    return <SplashScreen />;
  }

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
        {isOpen && (
          <Suspense fallback={<SplashScreen />}>
            <CoupleSection />
            <WaveDivider type="cream-to-navy" />
            <QuoteSection />
            <EventSection />
            <WaveDivider type="cream-to-navy" />
            <GiftSection />
            <WishesSection />
            <ClosingSection />
          </Suspense>
        )}
      </main>

      {/* Global Elements - Only visible when invitation is opened */}
      <div className={`global-elements ${isOpen ? 'global-elements--visible' : ''}`}>
        <FloatingMusic isPlaying={isMusicPlaying} onToggle={toggleMusic} />
        <FloatingNavbar />
        <FloatingParticles />
      </div>
    </div>
  );
}

export default App;
