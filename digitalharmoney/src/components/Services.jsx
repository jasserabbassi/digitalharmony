import React from 'react';
import { motion } from 'framer-motion';
import { FaProjectDiagram, FaLightbulb, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Holographic Display Solutions",
      description: "Custom holographic displays for events, exhibitions, and retail spaces",
      icon: <FaProjectDiagram />,
      arabicTitle: "حلول العرض المجسم",
      arabicDescription: "عروض ثلاثية الأبعاد مخصصة للأحداث والمعارض ومساحات البيع بالتجزئة"
    },
    {
      title: "LED Screen Solutions",
      description: "High-resolution LED screens for indoor and outdoor applications",
      icon: <FaLightbulb />,
      arabicTitle: "حلول شاشات LED",
      arabicDescription: "شاشات LED عالية الدقة للتطبيقات الداخلية والخارجية"
    },
    {
      title: "Technical Support and Consulting",
      description: "Expert guidance on selecting the right technology for your needs",
      icon: <FaTools />,
      arabicTitle: "الدعم الفني والاستشارات",
      arabicDescription: "إرشادات الخبراء حول اختيار التكنولوجيا المناسبة لاحتياجاتك"
    }
  ];

  return (
    <section id="services" className="min-h-screen  relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        
        className="absolute inset-1 bg-gradient-to-br from-black to-gray-900 rounded-xl shadow-md"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold text-center mb-16 text-amber-400"
          style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8"
            >
              <motion.div 
                className="text-6xl text-amber-400"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl font-bold text-amber-400 mb-4"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-gray-300 text-lg mb-6">{service.description}</p>
                <motion.h4 
                  className="text-3xl font-bold text-amber-400 text-right mb-4"
                  whileHover={{ x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.arabicTitle}
                </motion.h4>
                <p className="text-gray-300 text-lg text-right">{service.arabicDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
