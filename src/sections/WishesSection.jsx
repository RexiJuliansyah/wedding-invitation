import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useWishes } from '../hooks/useWishes';

const WishesSection = () => {
  const { wishes, addWish, hasSubmitted } = useWishes();
  const [formData, setFormData] = useState({ name: '', attendance: 'Hadir', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setIsSubmitting(true);

    try {
      await addWish({
        id: Date.now(),
        name: formData.name.trim(),
        message: formData.message.trim(),
        attendance: formData.attendance,
      });
      setSuccess(true);
      setFormData({ name: '', attendance: 'Hadir', message: '' });
    } catch (error) {
      if (error.message === 'ALREADY_SUBMITTED') {
        setSuccess(true);
      } else if (error.message === 'DUPLICATE_NAME') {
        setSuccess(true);
      } else {
        console.error("Gagal mengirim:", error);
        alert("Maaf, terjadi kesalahan saat mengirim ucapan. Pastikan koneksi lancar.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // Stats
  const totalHadir = wishes.filter(w => w.attendance === 'Hadir').length;
  const totalTidak = wishes.filter(w => w.attendance === 'Tidak Hadir').length;

  return (
    <section className="wishes-section" id="wishes">
      <div className="relative z-10">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="wishes-title"
        >
          Ucapkan Sesuatu
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="wishes-subtitle"
        >
          Berikan Ucapan &amp; Doa Restu
        </motion.p>

        {/* Stats */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="wishes-stats"
        >
          <span className="wishes-stat-badge badge-total">
            💬 {wishes.length} Ucapan
          </span>
          <span className="wishes-stat-badge badge-hadir">
            ✅ {totalHadir} Hadir
          </span>
          <span className="wishes-stat-badge badge-tidak">
            ❌ {totalTidak} Tidak Hadir
          </span>
        </motion.div>

        {/* Form RSVP — Show form or thank you message */}
        {hasSubmitted || success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="wishes-form"
            style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💌</div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: 'var(--gold)',
              marginBottom: '0.5rem'
            }}>
              Terima Kasih!
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'var(--white)',
              opacity: 0.8,
              lineHeight: 1.6
            }}>
              Ucapan & doa restu Anda telah kami terima. <br />
              Terima kasih atas kebaikan hatinya 🙏
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="wishes-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Nama"
              className="wishes-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />

            <textarea
              placeholder="Tuliskan ucapan & doa restu..."
              className="wishes-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />

            <select
              className="wishes-select"
              value={formData.attendance}
              onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
            >
              <option value="Hadir">Konfirmasi Kehadiran — Hadir</option>
              <option value="Tidak Hadir">Konfirmasi Kehadiran — Tidak Hadir</option>
            </select>

            <button type="submit" className="btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
            </button>
          </motion.form>
        )}

        {/* Wishes List */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="wishes-list"
        >
          {wishes.map((wish) => (
            <div className="wish-card" key={wish.id}>
              <div className="wish-card-header">
                <span className="wish-card-name">{wish.name}</span>
                <span className="wish-card-badge">✅</span>
                <span
                  className="wish-card-attendance"
                  style={{
                    background: wish.attendance === 'Hadir'
                      ? 'rgba(39, 174, 96, 0.2)'
                      : 'rgba(231, 76, 60, 0.2)',
                    color: wish.attendance === 'Hadir'
                      ? '#5ED89B'
                      : '#F08B80',
                  }}
                >
                  {wish.attendance}
                </span>
              </div>
              <p className="wish-card-text">{wish.message}</p>
              <span className="wish-card-time">
                ⏰ {wish.created_at ? new Date(wish.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Baru saja'}
              </span>
            </div>
          ))}

          {wishes.length === 0 && (
            <p className="text-center text-charcoal opacity-70 mt-4 italic">Belum ada ucapan. Jadilah yang pertama memberikan doa!</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WishesSection;
