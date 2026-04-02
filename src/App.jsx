import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from './sections/OpeningScreen';
import HeroSection from './sections/HeroSection';
import PrayerSection from './sections/PrayerSection';
import CoupleSection from './sections/CoupleSection';
import EventDetails from './sections/EventDetails';
import CountdownSection from './sections/CountdownSection';
// import StorySection from './sections/StorySection';
// import GallerySection from './sections/GallerySection';
import RSVPSection from './sections/RSVPSection';
import WishesSection from './sections/WishesSection';
import ClosingSection from './sections/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import NavigationBar from './components/NavigationBar';
import bgTexture from './assets/bg-texture.png';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center text-brown-dark font-sans relative"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <AnimatePresence>
        {!isOpen && (
          <OpeningScreen guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer />
          <NavigationBar />
          <div className="relative z-0 scroll-smooth">
            <HeroSection />
            <PrayerSection />
            <CoupleSection />
            <EventDetails />
            <CountdownSection />
            {/* <StorySection /> */}
            {/* <GallerySection /> */}
            <RSVPSection />
            <WishesSection />
            <ClosingSection />
          </div>
        </>
      )}
    </div>
  );
}
