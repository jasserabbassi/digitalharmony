import React from 'react';
import { motion } from 'framer-motion';
import { FaDigitalOcean, FaPalette, FaHandshake } from 'react-icons/fa';
import mision from '../assets/mision.png';
const Mission = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Designing and implementing online advertising campaigns, such as paid advertising on search engines and social media sites, content marketing, and search engine optimization (SEO).",
      arabicTitle: "التسويق الرقمي",
      arabicDescription: "تصميم وتنفيذ الحملات الإعلانية عبر الإنترنت، مثل الإعلانات المدفوعة على محركات البحث ومواقع التواصل الاجتماعي، والتسويق بالمحتوى، وتحسين محركات البحث (SEO).",
      icon: <FaDigitalOcean />
    },
    {
      title: "Graphic Design",
      description: "Designing logos and visual identities, marketing publications such as flyers and brochures, and website designs.",
      arabicTitle: "التصميم الجرافيكي",
      arabicDescription: "تصميم الشعارات والهويات البصرية، والمطبوعات التسويقية مثل النشرات والكتيبات، والتصميمات الخاصة بالمواقع الإلكترونية.",
      icon: <FaPalette />
    },
    {
      title: "Public Relations",
      description: "Building a positive brand image by communicating with the media and the public.",
      arabicTitle: "العلاقات العامة",
      arabicDescription: "بناء صورة إيجابية للعلامة التجارية من خلال التواصل مع وسائل الإعلام والجمهور.",
      icon: <FaHandshake />
    }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
         <motion.div 
           className="absolute inset-0 bg-cover bg-center rounded-xl shadow-md"
           initial={{ opacity: 0 }}
           animate={{ 
             opacity: 1,
             backgroundImage: `url(${mision})`
           }}
           transition={{
             duration: 5,
             repeat: Infinity,
             repeatType: "reverse"
           }}
         />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl font-bold text-center mb-16 text-amber-400"
          style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}
        >
          Our Mission
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

export default Mission;
