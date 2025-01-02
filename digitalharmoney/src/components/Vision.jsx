import React from 'react';
import { motion } from 'framer-motion';
import visionimg from '../assets/vision.png';

const Vision = () => {
  return (
    <section className="min-h-screen my-4 relative overflow-hidden py-20">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center rounded-xl shadow-md"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          backgroundImage: `url(${visionimg})`
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
          Our Vision
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <p className="text-gray-300 text-xl leading-relaxed">
              Digital Harmony: Your window to the world of marketing and creativity
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Digital Harmony Advertising Company is an organization specialized in designing and implementing advertising and marketing campaigns to enhance the image of brands, products and services, and increase awareness of them among the target audience. These companies play a vital role in the world of business, as they help companies communicate with their customers effectively and attractively, thus achieving growth, expansion and redefining visual experiences through innovative 3D display solutions and LED screens.
            </p>
            <div className="text-right mt-8">
              <h3 className="text-3xl font-bold text-amber-400 mb-4">
                شركة Digital Harmony : نافذتك إلى عالم التسويق والإبداع
              </h3>
              <p className="text-gray-300 text-lg">
                شركة Digital Harmony للدعاية والإعلان هي مؤسسة متخصصة في تصميم وتنفيذ الحملات الإعلانية والتسويقية لتعزيز صورة العلامات التجارية والمنتجات والخدمات، وزيادة الوعي بها لدى الجمهور المستهدف. تلعب هذه الشركات دورًا حيويًا في عالم الأعمال، فهي تساعد الشركات على التواصل مع عملائها بشكل فعال وجذاب، وبالتالي تحقيق النمو والتوسع وإعادة تعريف التجارب البصرية من خلال حلول العرض الثلاثية الأبعاد وشاشات LED المبتكرة.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Vision;