

// Hologram Stage Images
import hologramStageImg1 from '../assets/hologramStageImg1.jpg';
import hologramStageImg2 from '../assets/hologramStageImg2.jpg';
import hologramStageImg3 from '../assets/hologramStageImg3.jpg';

// Hologram Pyramid Images
import hologramPyramidImg1 from '../assets/hologramPyramidImg1.jpg';
import hologramPyramidImg2 from '../assets/hologramPyramidImg2.jpg';
import hologramPyramidImg3 from '../assets/hologramPyramidImg3.jpg';

// Hologram Outdoor Images
import hologramOutdoorImg1 from '../assets/hologramOutdoorImg1.jpg';
import hologramOutdoorImg2 from '../assets/hologramOutdoorImg2.jpg';
import hologramOutdoorImg3 from '../assets/hologramOutdoorImg3.jpg';

// Mirror Display Images
import mirrorDisplayImg1 from '../assets/mirrorDisplayImg1.jpg';
import mirrorDisplayImg2 from '../assets/mirrorDisplayImg2.jpg';
import mirrorDisplayImg3 from '../assets/mirrorDisplayImg3.jpg';

// Mirror Infinity Images
import mirrorInfinityImg1 from '../assets/mirrorInfinityImg1.jpg';
import mirrorInfinityImg2 from '../assets/mirrorInfinityImg2.jpg';
import mirrorInfinityImg3 from '../assets/mirrorInfinityImg3.jpg';

// Projection Mapping Images
import projectionMappingImg1 from '../assets/projectionMappingImg1.jpg';
import projectionMappingImg2 from '../assets/projectionMappingImg2.jpg';
import projectionMappingImg3 from '../assets/projectionMappingImg3.jpg';

// LED Screens Images
import ledScreensImg1 from '../assets/ledScreensImg1.jpg';


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Product view ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-amber-400 w-4' : 'bg-amber-400/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
const Products = () => {
  const products = [
    {
      title: "Hologram Stage",
      description: "A hologram stage is a cutting-edge technology that creates the illusion of three-dimensional images suspended in mid-air. It's a captivating way to engage audiences and deliver unforgettable experiences.",
      images: [
        hologramStageImg1,
        hologramStageImg2,
        hologramStageImg3
      ],
      arabicTitle: "الهولوجرام المسرحي",
      arabicDescription: "تقنية متطورة تخلق وهم الصور ثلاثية الأبعاد المعلقة في الهواء. إنها طريقة آسرة لإشراك الجماهير وتقديم تجارب لا تُنسى",
      benefits: [
        "Immersive Experiences",
        "Visual Impact",
        "Versatility",
        "Innovation"
      ]
    },
    {
      title: "Hologram Pyramid",
      description: "A specialized type of holographic display that projects 3D images within a pyramid-shaped enclosure. This unique design offers enhanced viewing angles and improved image quality through reduced ambient light.",
      images: [
        hologramPyramidImg1,
        hologramPyramidImg2,
        hologramPyramidImg3
      ],
      arabicTitle: "الهولوجرام الهرمي",
      arabicDescription: "نوع متخصص من شاشات العرض الثلاثية الأبعاد التي تعرض صورًا ثلاثية الأبعاد داخل حاوية على شكل هرم",
      benefits: [
        "Enhanced Viewing Angles",
        "Improved Image Quality",
        "Immersive Experience",
        "Aesthetic Appeal"
      ]
    },
    {
      title: "Hologram Outdoor",
      description: "Create captivating visual experiences in public spaces with weather-resistant holographic displays perfect for advertising, entertainment, and public information.",
      images: [
        hologramOutdoorImg1,
        hologramOutdoorImg2,
        hologramOutdoorImg3
      ],
      arabicTitle: "الهولوجرام الخارجي",
      arabicDescription: "شاشات الهولوغرام الخارجية لخلق تجارب بصرية آسرة في الأماكن العامة",
      benefits: [
        "Weather Resistant",
        "Public Space Display",
        "Interactive Content",
        "Dynamic Advertising"
      ]
    },
    {
      title: "Mirror Display",
      description: "A reflective innovation combining traditional display functionality with mirror aesthetics. Perfect for retail, home decor, and public spaces.",
      images: [
        mirrorDisplayImg1,
        mirrorDisplayImg2,
        mirrorDisplayImg3
      ],
      arabicTitle: "شاشات المرآة",
      arabicDescription: "تقنيات العرض الشفافة التي تستخدم سطحًا عاكسًا لعرض الصور بطريقة فريدة وملفتة للنظر",
      benefits: [
        "Interactive Displays",
        "Smart Home Integration",
        "Retail Solutions",
        "Digital Signage"
      ]
    },
    {
      title: "Mirror Infinity",
      description: "A captivating visual effect created by placing two parallel mirrors facing each other, creating an infinite series of reflections that extend endlessly into the distance.",
      images: [
        mirrorInfinityImg1,
        mirrorInfinityImg2,
        mirrorInfinityImg3
      ],
      arabicTitle: "المرآة اللامتناهية",
      arabicDescription: "تأثير بصري آسر يخلق سلسلة لا حصر لها من الصور، مما يعطي وهمًا بوجود نفق يمتد إلى ما لا نهاية",
      benefits: [
        "Art Installations",
        "Interior Design",
        "Photography Effects",
        "Entertainment Venues"
      ]
    },
    {
      title: "Projection Mapping",
      description: "Transform any surface into a dynamic display using video projectors. Create stunning visual illusions that make ordinary objects come alive.",
      images: [
        projectionMappingImg1,
        projectionMappingImg2,
        projectionMappingImg3
      ],
      arabicTitle: "رسم خرائط الإسقاط",
      arabicDescription: "تحويل أي سطح إلى شاشة عرض ديناميكية من خلال محاذاة أجهزة العرض والمحتوى بعناية",
      benefits: [
        "Architectural Projections",
        "Live Performances",
        "Museum Exhibits",
        "Interactive Displays"
      ]
    },
    {
      title: "LED Screens",
      description: "Versatile displays for indoor and outdoor use with high pixel density and brightness options. Available in various sizes and customizable designs.",
      images: [
        ledScreensImg1
      ],
      arabicTitle: "شاشات LED",
      arabicDescription: "شاشات متعددة الاستخدامات للاستخدام الداخلي والخارجي مع خيارات كثافة البكسل والسطوع العالية",
      benefits: [
        "High Resolution",
        "Weather Resistant",
        "Customizable Sizes",
        "Indoor/Outdoor Use"
      ]
    }
  ];
  
  

  return (
    <section
    id="products"
    className="min-h-screen  relative overflow-hidden py-20">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl shadow-md"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
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
          Our Products
        </motion.h2>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col lg:flex-row gap-12 items-center"
            >
              <motion.div 
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageCarousel images={product.images} />
              </motion.div>
              
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.h3 
                  className="text-4xl font-bold text-amber-400"
                  whileHover={{ x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.title}
                </motion.h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {product.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2 text-gray-300"
                      whileHover={{ x: 10, color: '#FCD34D' }}
                    >
                      <span className="w-2 h-2 bg-amber-400 rounded-full"/>
                      <span>{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-right mt-8 border-t border-amber-400/20 pt-6">
                  <motion.h4 
                    className="text-3xl font-bold text-amber-400 mb-4"
                    whileHover={{ x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.arabicTitle}
                  </motion.h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {product.arabicDescription}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;