import logo from '../assets/logo.png'; 
const Hero = () => {
    return (
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2C2C2C] text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <img src={logo} alt="Digital Harmony Logo" className="pt-2 w-96 h-96 mx-auto mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#FFD700]" style={{ fontFamily: 'Stopwatch, sans-serif', fontStyle: 'italic' }}>Digital Harmony</h1>
          
          <p className="text-xl mb-4">Redefining visual experiences through innovative holographic and LED display solutions</p>
          <p className="text-lg mb-8 text-[#F2C94C]">إعادة تعريف التجارب البصرية من خلال حلول العرض الثلاثية الأبعاد وشاشات LED المبتكرة</p>
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-[#FFD700] text-[#1A1A1A] py-2 px-6 rounded-full text-lg font-semibold hover:bg-[#F2C94C] transition duration-300">Contact Us</a>
            <a href="#services" className="bg-transparent border-2 border-[#FFD700] text-[#FFD700] py-2 px-6 rounded-full text-lg font-semibold hover:bg-[#FFD700] hover:text-[#1A1A1A] transition duration-300">Our Services</a>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default Hero;