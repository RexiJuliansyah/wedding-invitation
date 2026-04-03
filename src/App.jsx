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
import GiftSection from './sections/GiftSection';
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
    <div className="min-h-screen text-brown-dark font-sans relative overflow-x-hidden">
      {/* Fixed Background Layer to prevent jumpy behavior on mobile */}
      {/* Menggunakan h-[100lvh] atau dvh/svh untuk mencegah loncatan saat address bar HP disembunyikan/dimunculkan */}
      <div
        className="fixed top-0 left-0 w-full h-[100lvh] z-[-1] bg-cover bg-[center_15%] bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />

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
            <GiftSection />
            <RSVPSection />
            <WishesSection />
            <ClosingSection />
          </div>
        </>
      )}
    </div>
  );
}
