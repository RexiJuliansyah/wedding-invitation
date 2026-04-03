import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import OpeningScreen from './sections/OpeningScreen';
import HeroSection from './sections/HeroSection';
import PrayerSection from './sections/PrayerSection';
import CoupleSection from './sections/CoupleSection';
import EventDetails from './sections/EventDetails';
import CountdownSection from './sections/CountdownSection';
import StorySection from './sections/StorySection';
import GallerySection from './sections/GallerySection';
import GiftSection from './sections/GiftSection';
import RSVPSection from './sections/RSVPSection';
import WishesSection from './sections/WishesSection';
import ClosingSection from './sections/ClosingSection';
import MusicPlayer from './components/MusicPlayer';
import NavigationBar from './components/NavigationBar';
import FloatingParticles from './components/FloatingParticles';
import SectionDivider from './components/SectionDivider';
import bgTexture from './assets/bg-texture.png';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) {
      setGuestName(to);
    }

    // Splash screen timer - tunggu 2.5 detik agar semua aset dimuat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen text-brown-dark font-sans relative overflow-x-hidden">
      {/* Fixed Background Layer to prevent jumpy behavior on mobile */}
      <div
        className="fixed top-0 left-0 w-full h-[100lvh] z-[-1] bg-cover bg-[center_15%] bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${bgTexture})` }}
      />

      {/* Animasi Partikel Kelopak Gugur */}
      <FloatingParticles />

      {/* Splash Screen */}
      <AnimatePresence>
        {isLoading && <SplashScreen />}
      </AnimatePresence>

      {/* Opening Screen */}
      <AnimatePresence>
        {!isLoading && !isOpen && (
          <OpeningScreen guestName={guestName} onOpen={handleOpen} />
        )}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer />
          <NavigationBar />
          <div className="relative z-0 scroll-smooth">
            <HeroSection />
            <SectionDivider />
            <PrayerSection />
            <CoupleSection />
            <SectionDivider />
            <EventDetails />
            <CountdownSection />
            {/* <SectionDivider /> */}
            {/* <StorySection /> */}
            {/* <SectionDivider /> */}
            {/* <GallerySection /> */}
            <SectionDivider />
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
