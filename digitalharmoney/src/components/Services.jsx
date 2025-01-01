import React from 'react';
import { FaProjectDiagram, FaLightbulb, FaTools } from 'react-icons/fa';

const ServiceCard = ({ title, description, icon, arabicTitle, arabicDescription, details }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-md p-6 hover:shadow-xl  border border-amber-400/20 transition duration-300">
      <div className="text-3xl text-amber-400 mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
      <ul className="text-sm text-gray-300 mb-4">
        {details.map((detail, index) => (
          <li key={index} className="mb-1">• {detail}</li>
        ))}
      </ul>
      <h4 className="text-xl font-semibold mb-2 text-right">{arabicTitle}</h4>
      <p className="text-gray-300 text-right">{arabicDescription}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Holographic Display Solutions",
      description: "Custom holographic displays for events, exhibitions, and retail spaces",
      icon: <FaProjectDiagram />,
      arabicTitle: "حلول العرض المجسم",
      arabicDescription: "عروض ثلاثية الأبعاد مخصصة للأحداث والمعارض ومساحات البيع بالتجزئة",
      details: [
        "Custom holographic displays for events and exhibitions",
        "Interactive holographic experiences for immersive engagement",
        "Holographic advertising campaigns to capture attention"
      ]
    },
    {
      title: "LED Screen Solutions",
      description: "High-resolution LED screens for indoor and outdoor applications",
      icon: <FaLightbulb />,
      arabicTitle: "حلول شاشات LED",
      arabicDescription: "شاشات LED عالية الدقة للتطبيقات الداخلية والخارجية",
      details: [
        "High-resolution LED screens for indoor and outdoor use",
        "Video walls and digital signage for impactful visual communication",
        "LED lighting design and installation for architectural and entertainment purposes"
      ]
    },
    {
      title: "Technical Support and Consulting",
      description: "Expert guidance on selecting the right technology for your needs",
      icon: <FaTools />,
      arabicTitle: "الدعم الفني والاستشارات",
      arabicDescription: "إرشادات الخبراء حول اختيار التكنولوجيا المناسبة لاحتياجاتك",
      details: [
        "Expert guidance on selecting the right technology for your needs",
        "Installation and maintenance services",
        "Ongoing support and troubleshooting"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
