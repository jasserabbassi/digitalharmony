import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCard = ({ title, description, arabicTitle, arabicDescription }) => {
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

const Products = () => {
  const products = [
    {
      title: "LED Screens",
      description: "Versatile displays for indoor and outdoor use with high pixel density and brightness options",
      arabicTitle: "شاشات LED",
      arabicDescription: "شاشات متعددة الاستخدامات للاستخدام الداخلي والخارجي مع خيارات كثافة البكسل والسطوع العالية"
    },
    {
      title: "Hologram Stage",
      description: "Create immersive 3D experiences for events, exhibitions, and performances",
      arabicTitle: "الهولوجرام المسرحي",
      arabicDescription: "إنشاء تجارب ثلاثية الأبعاد غامرة للفعاليات والمعارض والعروض"
    },
    {
      title: "Hologram Pyramid",
      description: "Specialized 3D displays for captivating product presentations and exhibitions",
      arabicTitle: "الهولوجرام الهرمي",
      arabicDescription: "شاشات عرض ثلاثية الأبعاد متخصصة لعروض المنتجات والمعارض الجذابة"
    },
    {
      title: "Projection Mapping",
      description: "Transform any surface into a dynamic display for unforgettable visual experiences",
      arabicTitle: "رسم خرائط الإسقاط",
      arabicDescription: "تحويل أي سطح إلى شاشة عرض ديناميكية لتجارب بصرية لا تُنسى"
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-[#FFD700]" 
          style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}
        >
          Our Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
