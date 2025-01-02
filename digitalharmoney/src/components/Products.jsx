import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDesktop, 
  FaCube, 
  FaSquare, 
  FaProjectDiagram 
} from 'react-icons/fa';

const Products = () => {
  const products = [
    {
      title: "LED Screens",
      description: "Versatile displays for indoor and outdoor use with high pixel density and brightness options",
      icon: <FaDesktop />,
      arabicTitle: "شاشات LED",
      arabicDescription: "شاشات متعددة الاستخدامات للاستخدام الداخلي والخارجي مع خيارات كثافة البكسل والسطوع العالية"
    },
    {
      title: "Hologram Stage",
      description: "Create immersive 3D experiences for events, exhibitions, and performances",
      icon: <FaCube />,
      arabicTitle: "الهولوجرام المسرحي",
      arabicDescription: "إنشاء تجارب ثلاثية الأبعاد غامرة للفعاليات والمعارض والعروض"
    },
    {
      title: "Hologram Pyramid",
      description: "Specialized 3D displays for captivating product presentations and exhibitions",
      icon: <FaSquare />,
      arabicTitle: "الهولوجرام الهرمي",
      arabicDescription: "شاشات عرض ثلاثية الأبعاد متخصصة لعروض المنتجات والمعارض الجذابة"
    },
    {
      title: "Projection Mapping",
      description: "Transform any surface into a dynamic display for unforgettable visual experiences",
      icon: <FaProjectDiagram />,
      arabicTitle: "رسم خرائط الإسقاط",
      arabicDescription: "تحويل أي سطح إلى شاشة عرض ديناميكية لتجارب بصرية لا تُنسى"
    }
  ];

  return (
    <section 
    id="products"
    className="min-h-screen  relative overflow-hidden">
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
          Our Products
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {products.map((product, index) => (
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
                {product.icon}
              </motion.div>
              
              <div className="flex-1">
                <motion.h3 
                  className="text-3xl font-bold text-amber-400 mb-4"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.title}
                </motion.h3>
                <p className="text-gray-300 text-lg mb-6">{product.description}</p>
                <motion.h4 
                  className="text-3xl font-bold text-amber-400 text-right mb-4"
                  whileHover={{ x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.arabicTitle}
                </motion.h4>
                <p className="text-gray-300 text-lg text-right">{product.arabicDescription}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
