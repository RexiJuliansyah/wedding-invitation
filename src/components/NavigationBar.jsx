import { useState, useEffect } from 'react';
import { Home, Heart, Calendar, Image as ImageIcon, MessageSquare, Gift } from 'lucide-react';

export default function NavigationBar() {
  const [activeSegment, setActiveSegment] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'couple', icon: Heart, label: 'Couple' },
    { id: 'event', icon: Calendar, label: 'Event' },
    { id: 'gift', icon: Gift, label: 'Gift' },
    { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
    { id: 'wishes', icon: MessageSquare, label: 'Wishes' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -25% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSegment(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSegment(id);
  };

  return (
    <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full md:w-auto z-50 px-4 md:px-0">
      <div className="bg-cream/95 backdrop-blur-md shadow-[0_-4px_25px_rgba(0,0,0,0.1)] md:shadow-2xl rounded-full px-6 md:px-10 py-3 flex items-center justify-between gap-6 md:gap-10 border border-brown-soft/20 max-w-lg mx-auto md:max-w-none">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSegment === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center transition-all duration-300 relative group ${isActive
                ? 'text-brown-dark scale-110'
                : 'text-brown-dark/30 hover:text-brown-dark/60'
                }`}
            >
              {/* Active Indicator Dot */}
              {isActive && (
                <div className="absolute -top-1 w-1 h-1 bg-brown-dark rounded-full" />
              )}

              <Icon className={`w-5 h-5 md:w-6 md:h-6 mb-1 transition-all ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.5px]'}`} />

              <span className={`text-[9px] md:text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${isActive ? 'opacity-100 max-h-4' : 'opacity-0 max-h-0'}`}>
                {item.label}
              </span>

              {!isActive && (
                <span className="absolute -top-10 bg-brown-dark text-cream text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
                  {item.label}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
