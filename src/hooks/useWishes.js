import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

// Mock data as fallback
const initialMockWishes = [
  { id: 1, name: 'John Doe', attendance: 'Hadir', message: 'Selamat menempuh hidup baru!', created_at: new Date().toISOString() },
  { id: 2, name: 'Jane Smith', attendance: 'Tidak Hadir', message: 'Maaf tidak bisa hadir, doa terbaik untuk kalian.', created_at: new Date().toISOString() }
];

export function useWishes() {
  const [wishes, setWishes] = useState([]);
  const hasSupabase = Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);

  const loadWishes = async () => {
    if (!hasSupabase) {
      console.warn('Supabase URL/Key missing. Using local fallback.');
      const localWishes = localStorage.getItem('localWishes');
      if (localWishes) {
        setWishes(JSON.parse(localWishes));
      } else {
        setWishes(initialMockWishes);
      }
      return;
    }

    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching wishes:', error);
      return;
    }
    
    if (data) {
      setWishes(data);
    }
  };

  useEffect(() => {
    loadWishes();

    if (hasSupabase) {
      const channelName = 'wishes-channel-' + Math.random().toString(36).substring(7);
      
      const subscription = supabase
        .channel(channelName)
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'wishes' },
          (payload) => {
            setWishes((currentWishes) => {
              if (currentWishes.some(w => w.id === payload.new.id)) return currentWishes;
              return [payload.new, ...currentWishes];
            });
          }
        )
        .subscribe();

      window.addEventListener('wishes_updated', loadWishes);

      return () => {
        supabase.removeChannel(subscription);
        window.removeEventListener('wishes_updated', loadWishes);
      };
    }
  }, []);

  const addWish = async (wish) => {
    if (!hasSupabase) {
      // Local fallback
      const newWish = { ...wish, created_at: new Date().toISOString(), id: Date.now() };
      const currentWishes = localStorage.getItem('localWishes') ? JSON.parse(localStorage.getItem('localWishes')) : initialMockWishes;
      const updatedWishes = [newWish, ...currentWishes];
      setWishes(updatedWishes);
      localStorage.setItem('localWishes', JSON.stringify(updatedWishes));
      return;
    }

    const { id, ...wishData } = wish;
    
    const { error } = await supabase
      .from('wishes')
      .insert([wishData]);
      
    if (error) {
      console.error('Error adding wish:', error);
      throw error;
    } else {
      window.dispatchEvent(new Event('wishes_updated'));
      loadWishes();
    }
  };

  return { wishes, addWish };
}
