import React from 'react';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-amber-700">Sakura Kaze</h1>
            <span className="ml-2 text-sm text-gray-600">Cherry Blossom Breeze</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Menu', 'Atmosphere', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-700 hover:text-amber-700 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
