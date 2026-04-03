import { motion, useScroll, useSpring } from 'framer-motion';
import { Heart, Sparkles, Gem } from 'lucide-react';
import { useRef } from 'react';

export default function StorySection() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });
  // Spring untuk membuat animasi garis lebih smooth
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const stories = [
    {
      year: '2020',
      title: 'First Meet',
      description: 'Bertemu tanpa sengaja di sebuah acara kampus. Saling bertukar pandang yang berujung pada perkenalan singkat namun berkesan.',
      icon: <Sparkles className="w-5 h-5 text-cream" />
    },
    {
      year: '2022',
      title: 'In Relationship',
      description: 'Setelah beberapa lama saling mengenal, kami memutuskan untuk memulai sebuah cerita baru bersama, berjalan berdampingan saling melengkapi.',
      icon: <Heart className="w-5 h-5 text-cream" />
    },
    {
      year: '2024',
      title: 'Engagement',
      description: 'Hari yang sangat bersejarah, sebuah langkah pasti diambil untuk mengikat janji suci dan merencanakan masa depan bersama.',
      icon: <Gem className="w-5 h-5 text-cream" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-cream-light/30" id="story">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest uppercase text-brown-soft mb-2">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-serif text-brown-dark">Love Story</h2>
        </motion.div>

        <motion.div 
          ref={timelineRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative pl-8 md:pl-0"
        >
          {/* Timeline Line - Static background */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-brown-soft/20 md:-translate-x-1/2"></div>
          
          {/* Timeline Line - Animated progress yang "tumbuh" saat di-scroll */}
          <motion.div 
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-brown-dark/60 md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          ></motion.div>
          
          <div className="space-y-16">
            {stories.map((story, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Space on desktop */}
                <div className="hidden md:block w-1/2 px-12"></div>
                
                {/* Icon with pulse animation */}
                <motion.div 
                  className="absolute left-[-24px] md:left-1/2 top-0 md:top-1/2 w-12 h-12 bg-brown-dark rounded-full border-4 border-cream flex items-center justify-center md:-translate-x-1/2 md:-translate-y-1/2 z-10"
                  whileInView={{ scale: [0.8, 1.15, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {story.icon}
                </motion.div>
                
                {/* Content */}
                <div className="w-full md:w-1/2 pb-4 md:pb-0 px-8 md:px-12">
                  <motion.div 
                    className={`glass-panel p-6 shadow-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}
                    whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                  >
                    <span className="text-sm font-bold text-brown-soft mb-1 block tracking-widest">{story.year}</span>
                    <h4 className="text-xl font-serif text-brown-dark mb-3">{story.title}</h4>
                    <p className="text-sm text-brown-dark/80 leading-relaxed">{story.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
