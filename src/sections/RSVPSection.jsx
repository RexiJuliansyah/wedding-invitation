import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useWishes } from '../hooks/useWishes';

export default function RSVPSection() {
  const { addWish } = useWishes();
  
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'Hadir',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      addWish({
        id: Date.now(),
        ...formData
      });
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', attendance: 'Hadir', message: '' });
      
      setTimeout(() => setSuccess(false), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 px-6 md:px-12 relative" id="rsvp">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-brown-dark mb-2">RSVP</h2>
          <p className="text-brown-dark/70 text-sm">Harap konfirmasi kehadiran Anda</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-sm font-medium text-brown-dark mb-2 uppercase tracking-widest text-xs">Nama Lengkap</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-b border-brown-soft/50 bg-transparent px-2 py-2 focus:outline-none focus:border-brown-dark text-brown-dark"
              required
              placeholder="Fulan bin Fulan"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-brown-dark mb-2 uppercase tracking-widest text-xs">Kehadiran</label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="attendance" 
                  value="Hadir"
                  checked={formData.attendance === 'Hadir'}
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                  className="accent-brown-dark"
                />
                <span className="text-brown-dark">Hadir</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="attendance" 
                  value="Tidak Hadir"
                  checked={formData.attendance === 'Tidak Hadir'}
                  onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                  className="accent-brown-dark"
                />
                <span className="text-brown-dark">Tidak Hadir</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-brown-dark mb-2 uppercase tracking-widest text-xs">Pesan / Doa</label>
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full border border-brown-soft/50 bg-cream/50 rounded-lg px-4 py-3 focus:outline-none focus:border-brown-dark text-brown-dark min-h-[100px]"
              required
              placeholder="Tuliskan doa untuk kedua mempelai..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-brown-dark text-cream rounded-lg hover:bg-brown-dark/90 transition flex justify-center items-center font-medium disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="animate-pulse">Mengirim...</span>
            ) : success ? (
              <span className="text-green-300">Terkirim ✓</span>
            ) : (
              <>
                Kirim Konfirmasi <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
