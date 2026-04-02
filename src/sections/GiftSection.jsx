import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Gift, MapPin } from 'lucide-react';

export default function GiftSection() {
  const [copiedId, setCopiedId] = useState(null);

  const bankAccounts = [
    {
      id: 1,
      bankName: 'BSI',
      accountNumber: '7220510624',
      accountHolder: 'Juliana Kus Inggardini',
      icon: '🏦'
    },
    {
      id: 2,
      bankName: 'BCA',
      accountNumber: '3761381847',
      accountHolder: 'Rexi Faza Juliansyah',
      icon: '🏦'
    }
  ];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden" id="gift">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-12">
          <Gift className="w-10 h-10 mx-auto text-brown-soft mb-4" />
          <h2 className="text-4xl md:text-5xl font-serif text-brown-dark mb-4">Kado Digital</h2>
          <p className="text-brown-soft max-w-lg mx-auto">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat memberikannya melalui:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {bankAccounts.map((account) => (
            <motion.div
              key={account.id}
              variants={itemVariants}
              className="glass-panel p-8 relative group hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-left">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-2xl font-bold text-brown-dark/20 italic">{account.bankName}</span>
                  <span className="text-2xl">{account.icon}</span>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-brown-soft mb-1 font-medium">Nomor Rekening</p>
                  <p className="text-2xl font-medium tracking-wider text-brown-dark font-sans">{account.accountNumber}</p>
                </div>

                <div className="mb-8">
                  <p className="text-xs uppercase tracking-widest text-brown-soft mb-1 font-medium">Atas Nama</p>
                  <p className="text-lg text-brown-dark font-serif">{account.accountHolder}</p>
                </div>

                <button
                  onClick={() => handleCopy(account.id, account.accountNumber)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brown-dark text-cream rounded-xl hover:bg-brown-dark/90 transition-all group overflow-hidden relative"
                >
                  <AnimatePresence mode="wait">
                    {copiedId === account.id ? (
                      <motion.div
                        key="copied"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">Tersalin</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">Salin Nomor</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="glass-panel p-8 md:p-12 max-w-2xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <MapPin className="w-8 h-8 text-brown-soft" />
            <div>
              <p className="text-xs uppercase tracking-widest text-brown-soft mb-2 font-medium">Alamat Pengiriman Kado Fisik</p>
              <p className="text-brown-dark text-lg leading-relaxed font-serif italic mb-4">
                Jl. Contoh Alamat Pernikahan No. 123, <br />
                Kecamatan Blimbing, Kota Malang, Jawa Timur
              </p>
              <button
                onClick={() => handleCopy('address', 'Jl. Contoh Alamat Pernikahan No. 123, Kecamatan Blimbing, Kota Malang')}
                className="inline-flex items-center gap-2 text-sm text-brown-soft hover:text-brown-dark transition-colors font-medium"
              >
                {copiedId === 'address' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copiedId === 'address' ? 'Alamat Tersalin' : 'Salin Alamat'}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
