import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from './sections/OpeningScreen';
import HeroSection from './sections/HeroSection';
import PrayerSection from './sections/PrayerSection';
import CoupleSection from './sections/CoupleSection';
import EventDetails from './sections/EventDetails';
import CountdownSection from './sections/CountdownSection';
import StorySection from './sections/StorySection';
import GallerySection from './sections/GallerySection';
import RSVPSection from './sections/RSVPSection';
import WishesSection from './sections/WishesSection';
import ClosingSection from './sections/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import NavigationBar from './components/NavigationBar';

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
    <div className="min-h-screen bg-texture bg-cover bg-fixed bg-center text-brown-dark font-sans relative">
      <AnimatePresence>
        {!isOpen && (
          <OpeningScreen guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer />
          <NavigationBar />
          <div className="relative z-0 h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
            <div className="snap-start min-h-screen flex flex-col justify-center"><HeroSection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><PrayerSection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><CoupleSection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><EventDetails /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><CountdownSection /></div>
            {/* <div className="snap-start min-h-screen flex flex-col justify-center"><StorySection /></div> */}
            <div className="snap-start min-h-screen flex flex-col justify-center"><GallerySection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><RSVPSection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><WishesSection /></div>
            <div className="snap-start min-h-screen flex flex-col justify-center"><ClosingSection /></div>
          </div>
        </>
      )}
    </div>
  );
}
