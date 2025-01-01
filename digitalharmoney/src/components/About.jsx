import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCard = ({ title, description, arabicTitle, arabicDescription }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-amber-400/20"
    >
      <h3 className="text-xl font-semibold mb-2 text-amber-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <h4 className="text-xl font-semibold mb-2 text-right text-amber-400">{arabicTitle}</h4>
      <p className="text-gray-300 text-right">{arabicDescription}</p>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#FFD700]" 
          style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <AboutCard
            title="Our Mission"
            description="Digital Harmony is a leading provider of advanced holographic and LED display systems. With a commitment to excellence and innovation, we offer a comprehensive range of products and services designed to transform the way people interact with visual content."
            arabicTitle="مهمتنا"
            arabicDescription="تعد شركة Digital Harmony شركة رائدة في مجال توفير أنظمة العرض الثلاثية الأبعاد وشاشات LED المتقدمة. مع الالتزام بالتميز والابتكار، نقدم مجموعة شاملة من المنتجات والخدمات المصممة لتغيير طريقة تفاعل الأشخاص مع المحتوى المرئي."
          />
          <AboutCard
            title="Our Process"
            description="We follow a comprehensive process including strategic planning, research and development, design and creativity, implementation, and evaluation and analysis to deliver the best results for our clients."
            arabicTitle="عمليتنا"
            arabicDescription="نتبع عملية شاملة تشمل التخطيط الاستراتيجي والبحث والتطوير والتصميم والإبداع والتنفيذ والتقييم والتحليل لتقديم أفضل النتائج لعملائنا."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
