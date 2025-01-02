import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-amber-400">Digital Harmony</h3>
            <p className="text-gray-300 mb-4">Redefining visual experiences through innovative holographic and LED display solutions.</p>
            <p className="text-gray-300">إعادة تعريف التجارب البصرية من خلال حلول العرض الثلاثية الأبعاد وشاشات LED المبتكرة.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Our Services</h3>
            <ul className="text-gray-300">
              <li className="mb-2">Holographic Display Solutions</li>
              <li className="mb-2">LED Screen Solutions</li>
              <li className="mb-2">Technical Support and Consulting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Contact Us</h3>
            <p className="text-gray-300 mb-2">Email: info@digitalharmony.com</p>
            <p className="text-gray-300 mb-4">Phone: +(966) 58 032 5775</p>
            <h4 className="text-lg font-semibold mb-2 text-amber-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300"><FaFacebook /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300"><FaTwitter /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300"><FaLinkedin /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-amber-400 transition-colors duration-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2025 Digital Harmony. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
