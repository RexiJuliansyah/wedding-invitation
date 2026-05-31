import React, { useState, useEffect } from 'react';

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const isVisible = activeSection !== 'home';

  // Smooth scroll to section
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show navbar only after scrolling past the opening section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Determine active section
          const sections = ['home', 'couple', 'event', 'gift', 'wishes'];
          let current = '';

          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              // If the top of the section is somewhat in the middle of the screen
              if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                current = section;
                break;
              }
            }
          }

          if (current) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGiftClick = () => {
    scrollTo('gift');
    window.dispatchEvent(new Event('openGift'));
  };

  return (
    <nav className={`floating-navbar ${isVisible ? 'floating-navbar--visible' : ''}`}>
      <div className="floating-navbar-inner">
        <button
          className={`nav-item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => scrollTo('home')}
          aria-label="Home"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span>Home</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'couple' ? 'active' : ''}`}
          onClick={() => scrollTo('couple')}
          aria-label="Mempelai"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span>Couple</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'event' ? 'active' : ''}`}
          onClick={() => scrollTo('event')}
          aria-label="Acara"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span>Event</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'gift' ? 'active' : ''}`}
          onClick={handleGiftClick}
          aria-label="Gift"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
          <span>Gift</span>
        </button>

        <button
          className={`nav-item ${activeSection === 'wishes' ? 'active' : ''}`}
          onClick={() => scrollTo('wishes')}
          aria-label="Ucapan"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>Ucapan</span>
        </button>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
