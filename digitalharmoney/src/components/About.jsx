import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      description: "Digital Harmony is a leading provider of advanced holographic and LED display systems. With a commitment to excellence and innovation, we offer a comprehensive range of products and services designed to transform the way people interact with visual content.",
      icon: <FaUsers />,
      arabicTitle: "مهمتنا",
      arabicDescription: "تعد شركة Digital Harmony شركة رائدة في مجال توفير أنظمة العرض الثلاثية الأبعاد وشاشات LED المتقدمة. مع الالتزام بالتميز والابتكار، نقدم مجموعة شاملة من المنتجات والخدمات المصممة لتغيير طريقة تفاعل الأشخاص مع المحتوى المرئي."
    },
    {
      title: "Our Process",
      description: "We follow a comprehensive process including strategic planning, research and development, design and creativity, implementation, and evaluation and analysis to deliver the best results for our clients.",
      icon: <FaChartLine />,
      arabicTitle: "عمليتنا",
      arabicDescription: "نتبع عملية شاملة تشمل التخطيط الاستراتيجي والبحث والتطوير والتصميم والإبداع والتنفيذ والتقييم والتحليل لتقديم أفضل النتائج لعملائنا."
    }
  ];

  return (
    <section id="about" className="min-h-screen  relative overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-1 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-md"
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
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {aboutSections.map((section, index) => (
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
                {section.icon}
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl font-bold text-amber-400 mb-4"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {section.title}
                </motion.h3>
                <p className="text-gray-300 text-lg mb-6">{section.description}</p>
                <motion.h4 
                  className="text-3xl font-bold text-amber-400 text-right mb-4"
                  whileHover={{ x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {section.arabicTitle}
                </motion.h4>
                <p className="text-gray-300 text-lg text-right">{section.arabicDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
