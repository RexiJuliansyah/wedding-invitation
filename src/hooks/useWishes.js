import { useState, useEffect } from 'react';

const STORAGE_KEY = 'wedding_wishes';
const WISHES_EVENT = 'wishes_updated';

export function useWishes() {
  const [wishes, setWishes] = useState([]);

  const loadWishes = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      setWishes([
        { id: 1, name: 'Budi (Teman Kampus)', attendance: 'Hadir', message: 'Selamat menempuh hidup baru! Semoga samawa selalu.' },
        { id: 2, name: 'Tante Sarah', attendance: 'Tidak Hadir', message: 'Maaf tante berhalangan hadir. Doa terbaik untuk kalian berdua.' },
      ]);
    }
  };

  useEffect(() => {
    loadWishes();
    window.addEventListener(WISHES_EVENT, loadWishes);
    return () => window.removeEventListener(WISHES_EVENT, loadWishes);
  }, []);

  const addWish = (wish) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const prevWishes = saved ? JSON.parse(saved) : wishes;
    const newWishes = [wish, ...prevWishes];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newWishes));
    window.dispatchEvent(new Event(WISHES_EVENT));
  };

  return { wishes, addWish };
}
