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
<a href="#contract">
< button className = "bg-transparent border-2 border-dashed border-amber-400  px-6 py-3 font-semibold uppercase text-amber-400 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none " > 
          Contact Us
    </button >
</a>
<a href="#services">
          < button className = "bg-transparent border-2 border-dashed border-amber-400  px-6 py-3 font-semibold uppercase text-amber-400 transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none " > 
          Our Services
    </button >
    </a>
        </div>
      </div>
    </div>
        </motion.div>
  );
};


  
  export default Hero;