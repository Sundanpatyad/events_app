import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import FullScreenMenu from './FullScreenMenu';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      setIsScrolled(scrollPosition > 50);
      
      // Determine background color based on scroll position
      if (scrollPosition < windowHeight * 0.8) {
        // Hero section (dark background)
        setIsDarkBackground(true);
      } else if (scrollPosition < windowHeight * 2.5) {
        // Portfolio section (light background)
        setIsDarkBackground(false);
      } else if (scrollPosition < windowHeight * 3.5) {
        // Oferta section (light background)
        setIsDarkBackground(false);
      } else {
        // About section (light background)
        setIsDarkBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkBackground 
          ? 'bg-black/40 backdrop-blur-md' 
          : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}>
      <div className="max-w-7xl md:max-w-9xl lg:max-w-8xl mx-auto  py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-4 items-center">
             <img src={logo} alt=""  height={80} width={80}/>
            <div className={isDarkBackground ? 'text-white' : 'text-black'}>
            <div className="text-sm font-light tracking-[0.2em] leading-tight">
                  <div className="uppercase">Nakashi</div>
                  <div>EXPO</div>
                  <div>INNOVATION</div>
                </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              className={`flex items-center space-x-2 transition-colors ${
                isDarkBackground 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-black hover:text-gray-600'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="text-xl tracking-wider">MENU</span>
              <HiOutlineMenuAlt2 className="w-8 h-8" />
            </button>
            
            <div className={`flex items-center space-x-6 text-xl ${
              isDarkBackground ? 'text-white' : 'text-black'
            }`}>
              <span className={`cursor-pointer transition-colors ${
                isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>EN</span>
              <span className={`cursor-pointer transition-colors ${
                isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>DE</span>
              <span className={`cursor-pointer transition-colors ${
                isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>ZH</span>
              <span className={`cursor-pointer transition-colors ${
                isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
              }`}>KO</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`flex items-center text-sm ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <Mail className="w-4 h-4 mr-2" />
                <span>office@smartdesign-expo.com</span>
              </div>
              <div className={`flex items-center text-sm ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <Phone className="w-4 h-4 mr-2" />
                <span>+48 61 642 7147</span>
              </div>
            </div>

         
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden ${
              isDarkBackground ? 'text-white' : 'text-black'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden backdrop-blur-sm ${
          isDarkBackground ? 'bg-black/95' : 'bg-white/95'
        }`}>
          <div className="px-6 py-4 space-y-4">
            <div className={`flex flex-wrap gap-4 text-sm ${
              isDarkBackground ? 'text-white' : 'text-black'
            }`}>
              <span>EN</span>
              <span>DE</span>
              <span>ZH</span>
              <span>KO</span>
            </div>
            <div className={`text-sm ${
              isDarkBackground ? 'text-white' : 'text-black'
            }`}>
              <div className="mb-2">office@smartdesign-expo.com</div>
              <div>+48 61 642 7147</div>
            </div>
            <div className="flex space-x-3">
              <Instagram className={`w-5 h-5 ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`} />
              <Facebook className={`w-5 h-5 ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`} />
              <Linkedin className={`w-5 h-5 ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`} />
            </div>
          </div>
        </div>
      )}
      </header>

      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
