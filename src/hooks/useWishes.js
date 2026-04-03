import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useWishes() {
  const [wishes, setWishes] = useState([]);

  const loadWishes = async () => {
    // Return early if no supabase url/key is set (prevents crashing if env not filled)
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      console.warn('Supabase URL/Key missing. Check .env.local');
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

    // Pastikan env variable ada sebelum mencoba subscribe
    if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
      // Gunakan nama channel unik (dengan string acak) agar tidak bertabrakan saat React Strict Mode berjalan 2 kali
      const channelName = 'wishes-channel-' + Math.random().toString(36).substring(7);
      
      const subscription = supabase
        .channel(channelName)
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'wishes' },
          (payload) => {
            // Add the new wish to the top of the list
            setWishes((currentWishes) => {
              // Pencegah duplikat karena event sinkron lokal
              if (currentWishes.some(w => w.id === payload.new.id)) return currentWishes;
              return [payload.new, ...currentWishes];
            });
          }
        )
        .subscribe();

      // Tambahkan event listener lokal sebagai fallback jika realtime mati
      window.addEventListener('wishes_updated', loadWishes);

      return () => {
        supabase.removeChannel(subscription);
        window.removeEventListener('wishes_updated', loadWishes);
      };
    }
  }, []);

  const addWish = async (wish) => {
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      console.warn('Supabase URL/Key missing. Check .env.local');
      return;
    }

    // Remove 'id' if frontend added it because Supabase will auto-generate it
    const { id, ...wishData } = wish;
    
    const { error } = await supabase
      .from('wishes')
      .insert([wishData]);
      
    if (error) {
      console.error('Error adding wish:', error);
      throw error;
    } else {
      // Panggil event lokal agar komponen lain (seperti WishesSection) menyadari ada data baru
      window.dispatchEvent(new Event('wishes_updated'));
      loadWishes();
    }
  };

  return { wishes, addWish };
}
