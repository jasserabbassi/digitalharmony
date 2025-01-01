import logo from '../assets/logo.png'; 
import { motion } from 'framer-motion';
const Hero = () => {
  
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-400">Digital Harmony</h1>
        <div className="text-xl mb-4 h-20">
          <span id="animated-text"></span>
          <span className="cursor">|</span>
        </div>
        <p className="text-lg mb-8 text-amber-300">إعادة تعريف التجارب البصرية من خلال حلول العرض الثلاثية الأبعاد وشاشات LED المبتكرة</p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-amber-400 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-amber-300 transition duration-300">Contact Us</a>
          <a href="#services" className="bg-transparent border-2 border-amber-400 text-amber-400 py-2 px-6 rounded-full text-lg font-semibold hover:bg-amber-400 hover:text-gray-900 transition duration-300">Our Services</a>
        </div>
      </div>
    </div>
        </motion.div>
  );
};


  
  export default Hero;