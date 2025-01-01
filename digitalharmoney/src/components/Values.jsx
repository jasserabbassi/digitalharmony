import React from 'react';

const ValueCard = ({ title, description, arabicTitle, arabicDescription }) => {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-amber-400/20">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <h4 className="text-xl font-semibold mb-2 text-right">{arabicTitle}</h4>
        <p className="text-gray-300 text-right">{arabicDescription}</p>
      </div>
    );
  };
  
  const Values = () => {
    const values = [
      {
        title: "Innovation",
        description: "Continuously exploring new technologies and creative applications",
        arabicTitle: "الابتكار",
        arabicDescription: "الاستكشاف المستمر للتقنيات الجديدة والتطبيقات الإبداعية"
      },
      {
        title: "Quality",
        description: "Delivering products and services that meet the highest standards",
        arabicTitle: "الجودة",
        arabicDescription: "تقديم المنتجات والخدمات التي تلبي أعلى المعايير"
      },
      {
        title: "Customer Satisfaction",
        description: "Building long-lasting relationships through exceptional service",
        arabicTitle: "رضا العملاء",
        arabicDescription: "بناء علاقات طويلة الأمد من خلال الخدمة الاستثنائية"
      },
      {
        title: "Collaboration",
        description: "Partnering with our clients to achieve their goals",
        arabicTitle: "التعاون",
        arabicDescription: "الشراكة مع عملائنا لتحقيق أهدافهم"
      }
    ];
  
    return (
      <section id="values" className="py-16 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Values;
