import React from 'react';

const ProductCard = ({ title, description, arabicTitle, arabicDescription }) => {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl  border border-amber-400/20 transition duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <h4 className="text-xl font-semibold mb-2 text-right">{arabicTitle}</h4>
        <p className="text-gray-200 text-right">{arabicDescription}</p>
      </div>
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
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
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
