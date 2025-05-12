import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <div className="z-50">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-0 space-x-reverse space-s-8">
            <a href="#home" className="font-medium text-neutral-800 hover:text-primary-500 transition-colors">
              الرئيسية
            </a>
            <a href="#services" className="font-medium text-neutral-800 hover:text-primary-500 transition-colors">
              خدماتنا
            </a>
            <a href="#about" className="font-medium text-neutral-800 hover:text-primary-500 transition-colors">
              من نحن
            </a>
            <a href="#contact" className="btn-primary">
              تواصل معنا
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-neutral-800 hover:text-primary-500 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <a 
            href="#home" 
            className="py-3 px-6 text-xl font-medium text-neutral-800 hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
          >
            الرئيسية
          </a>
          <a 
            href="#services" 
            className="py-3 px-6 text-xl font-medium text-neutral-800 hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
          >
            خدماتنا
          </a>
          <a 
            href="#about" 
            className="py-3 px-6 text-xl font-medium text-neutral-800 hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
          >
            من نحن
          </a>
          <a 
            href="#contact" 
            className="btn-primary mt-4"
            onClick={toggleMenu}
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;