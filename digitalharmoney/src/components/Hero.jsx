import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "HIGH TECH SOLUTIONS",
      title: "DIGITAL HARMONY",
      arabicTitle: "ديجيتال هارموني",
      arabicDescription: "LED إعادة تعريف التجارب البصرية من خلال حلول العرض الثلاثية الأبعاد وشاشات  المبتكرة"
    },
    {
      subtitle: "HOLOGRAPHIC DISPLAYS",
      title: "INNOVATIVE SOLUTIONS",
      arabicTitle: "حلول مبتكرة",
      arabicDescription: "تجارب ثلاثية الأبعاد تفاعلية لمشاركة غامرة وعروض لا تُنسى"
    },
    {
      subtitle: "LED TECHNOLOGY",
      title: "VISUAL EXCELLENCE",
      arabicTitle: "التميز البصري",
      arabicDescription: "شاشات LED عالية الدقة للتطبيقات الداخلية والخارجية مع أحدث التقنيات"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-900">
      {/* Animated background with particles effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Animated lines in background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-amber-400"
            style={{
              left: `${i * 25}%`,
              width: '100%',
            }}
            animate={{
              y: [0, 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div
      id="hero"
      className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.p 
              className="text-amber-400/80 text-xl mb-4 tracking-wider"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-amber-400 mb-8 tracking-tight"
              style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}
            >
              {slides[currentSlide].title}
            </motion.h1>

            <div className="text-right">
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-amber-400 mb-4"
                whileHover={{ x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {slides[currentSlide].arabicTitle}
              </motion.h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                {slides[currentSlide].arabicDescription}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex gap-4"
        >
          <motion.a 
            href="#services" 
            className="group inline-flex items-center text-lg border-2 border-amber-400 text-amber-400 px-8 py-4 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE OUR SERVICES
            <motion.svg 
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Interactive slide indicators */}
      <div className="absolute bottom-8 left-8 flex space-x-3">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 cursor-pointer ${index === currentSlide ? 'w-12 bg-amber-400' : 'w-8 bg-amber-400/30'}`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ width: 48, backgroundColor: 'rgb(251 191 36)' }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
