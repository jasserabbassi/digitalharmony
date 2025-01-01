import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Values from './components/Values';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#1A1A1A] to-[#2C2C2C] text-white min-h-screen">
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
