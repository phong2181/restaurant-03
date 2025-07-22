import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/Hero';
import AboutSection from '../components/About';
import MenuSection from '../components/MenuSection';
import AtmosphereSection from '../components/AtmosphereSection';
import ContactSection from '../components/ContactSection';

// ✅ Import dữ liệu đã tách riêng
import { beverages } from '../datas/beverages'
import { menuItems } from '../datas/menuItems'

export default function HomePage() {
  const [ , setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToMenu={() => scrollToSection('menu')} />
      <AboutSection />
      <MenuSection menuItems={menuItems} beverages={beverages} />
      <AtmosphereSection />
      <ContactSection />
    </div>
  );
}
