import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Fallback using placeholder images since there's no real gallery images provided yet
  const images = [
    '/src/assets/bride.jpg',
    '/src/assets/groom.jpg',
    '/src/assets/bride.jpg',
    '/src/assets/groom.jpg',
    '/src/assets/bride.jpg',
    '/src/assets/groom.jpg'
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto" id="gallery">
      <div className="text-center mb-16">
        <p className="text-sm tracking-widest uppercase text-brown-soft mb-2">Moments</p>
        <h2 className="text-4xl md:text-5xl font-serif text-brown-dark">Our Gallery</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
           <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`cursor-pointer overflow-hidden rounded-xl shadow-sm ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            onClick={() => setSelectedImage(src)}
          >
            <img 
              src={src} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover aspect-square md:aspect-auto hover:scale-110 transition-transform duration-700" 
              style={{ minHeight: index === 0 || index === 3 ? '100%' : '200px' }}
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/40 transition">
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Enlarged gallery"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
