import React from 'react';

interface HeroSectionProps {
  scrollToMenu: () => void;
}

export function HeroSection({ scrollToMenu }: HeroSectionProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/5474031/pexels-photo-5474031.jpeg?auto=compress&cs=tinysrgb&w=1600)'
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">Sakura Kaze</h1>
        <p className="text-xl md:text-2xl mb-4 font-light">Cherry Blossom Breeze</p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Celebrating the beauty of seasonal Japanese ingredients and traditional techniques,
          presented in a calm, elegant atmosphere inspired by nature.
        </p>
        <button
          onClick={scrollToMenu}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Our Menu
        </button>
      </div>
    </section>
  );
}
