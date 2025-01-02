import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Values from './components/Values';
import Footer from './components/Footer';
import { startTextAnimation } from './TextAnimation';


function App() {
  useEffect(() => {
    startTextAnimation();
  }, []);
  return (
    <div className="App bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Services />
        <Products />
        <Values />
      </main>
      <Footer />
    </div>
  );
}

export default App;
