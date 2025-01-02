import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaAward, FaHandshake, FaUsers } from 'react-icons/fa';

const Values = () => {
  const values = [
    {
      title: "Innovation",
      description: "Continuously exploring new technologies and creative applications",
      arabicTitle: "الابتكار",
      arabicDescription: "الاستكشاف المستمر للتقنيات الجديدة والتطبيقات الإبداعية",
      icon: <FaLightbulb />
    },
    {
      title: "Quality",
      description: "Delivering products and services that meet the highest standards",
      arabicTitle: "الجودة",
      arabicDescription: "تقديم المنتجات والخدمات التي تلبي أعلى المعايير",
      icon: <FaAward />
    },
    {
      title: "Customer Satisfaction",
      description: "Building long-lasting relationships through exceptional service",
      arabicTitle: "رضا العملاء",
      arabicDescription: "بناء علاقات طويلة الأمد من خلال الخدمة الاستثنائية",
      icon: <FaHandshake />
    },
    {
      title: "Collaboration",
      description: "Partnering with our clients to achieve their goals",
      arabicTitle: "التعاون",
      arabicDescription: "الشراكة مع عملائنا لتحقيق أهدافهم",
      icon: <FaUsers />
    }
  ];

  return (
    <section 
    id="values"
    className="min-h-screen  relative overflow-hidden">
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
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {values.map((value, index) => (
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
                {value.icon}
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl font-bold text-amber-400 mb-4"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.title}
                </motion.h3>
                <p className="text-gray-300 text-lg mb-6">{value.description}</p>
                <motion.h4 
                  className="text-3xl font-bold text-amber-400 text-right mb-4"
                  whileHover={{ x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {value.arabicTitle}
                </motion.h4>
                <p className="text-gray-300 text-lg text-right">{value.arabicDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
