import React from 'react';
import { FaProjectDiagram, FaLightbulb, FaTools } from 'react-icons/fa';
import Card from './Card';

const Services = () => {
  const services = [
    {
      title: "Holographic Display Solutions",
      description: "Custom holographic displays for events, exhibitions, and retail spaces",
      icon: <FaProjectDiagram />,
      arabicTitle: "حلول العرض المجسم",
      arabicDescription: "عروض ثلاثية الأبعاد مخصصة للأحداث والمعارض ومساحات البيع بالتجزئة"
    },
    {
      title: "LED Screen Solutions",
      description: "High-resolution LED screens for indoor and outdoor applications",
      icon: <FaLightbulb />,
      arabicTitle: "حلول شاشات LED",
      arabicDescription: "شاشات LED عالية الدقة للتطبيقات الداخلية والخارجية"
    },
    {
      title: "Technical Support and Consulting",
      description: "Expert guidance on selecting the right technology for your needs",
      icon: <FaTools />,
      arabicTitle: "الدعم الفني والاستشارات",
      arabicDescription: "إرشادات الخبراء حول اختيار التكنولوجيا المناسبة لاحتياجاتك"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
