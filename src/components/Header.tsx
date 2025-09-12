import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';
import FullScreenMenu from './FullScreenMenu';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const [showMobileContact, setShowMobileContact] = useState(false);

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

  // Close mobile menu when clicking outside or on overlay
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setShowMobileContact(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isDarkBackground 
          ? 'bg-black/40 backdrop-blur-md' 
          : 'bg-white/90 backdrop-blur-md shadow-sm'
      }`}>
        <div className="max-w-7xl md:max-w-8xl lg:max-w-9xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Responsive sizing */}
            <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center flex-shrink-0">
              <img 
                src={logo} 
                alt="Nakashi Expo Innovation Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 object-contain"
              />
              <div className={`${isDarkBackground ? 'text-white' : 'text-black'} leading-tight`}>
                <div className="text-xs sm:text-sm lg:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                  <div>Nakashi</div>
                  <div className="hidden sm:block">EXPO</div>
                  <div className="hidden sm:block">INNOVATION</div>
                  {/* Mobile: Show compact version */}
                  <div className="sm:hidden text-[10px]">EXPO</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile/tablet */}
            <div className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              <button 
                className={`flex items-center space-x-2 transition-colors hover:scale-105 transform duration-200 ${
                  isDarkBackground 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-lg lg:text-xl tracking-wider font-medium">MENU</span>
                <HiOutlineMenuAlt2 className="w-6 h-6 lg:w-8 lg:h-8" />
              </button>
              
              {/* Language Selector */}
              <div className={`flex items-center space-x-4 lg:space-x-6 text-sm lg:text-lg ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>EN</span>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>DE</span>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>ZH</span>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>KO</span>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 lg:space-x-6">
                <div className={`flex items-center text-xs lg:text-sm transition-colors hover:scale-105 duration-200 ${
                  isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                }`}>
                  <Mail className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 flex-shrink-0" />
                  <span className="hidden 2xl:block">office@smartdesign-expo.com</span>
                  <span className="xl:block 2xl:hidden">office@...</span>
                </div>
                <div className={`flex items-center text-xs lg:text-sm transition-colors hover:scale-105 duration-200 ${
                  isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                }`}>
                  <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2 flex-shrink-0" />
                  <span>+48 61 642 7147</span>
                </div>
              </div>
            </div>

            {/* Tablet Navigation - Visible on medium screens only */}
            <div className="hidden lg:flex xl:hidden items-center space-x-4">
              <div className={`flex items-center space-x-3 text-sm ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>EN</span>
                <span className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isDarkBackground ? 'hover:text-gray-300' : 'hover:text-gray-600'
                }`}>DE</span>
              </div>
              
              <button 
                className={`flex items-center space-x-2 transition-colors hover:scale-105 transform duration-200 ${
                  isDarkBackground 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="text-base tracking-wide font-medium">MENU</span>
                <HiOutlineMenuAlt2 className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Button & Contact Toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Contact Info Toggle - Mobile/Small Tablet */}
              <button
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDarkBackground 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setShowMobileContact(!showMobileContact)}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Menu Button */}
              <button 
                className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                  isDarkBackground 
                    ? 'text-white hover:text-gray-300' 
                    : 'text-black hover:text-gray-600'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Contact Info Dropdown */}
        {showMobileContact && (
          <div className={`lg:hidden border-t transition-all duration-300 ${
            isDarkBackground 
              ? 'bg-black/95 backdrop-blur-sm border-white/10' 
              : 'bg-white/95 backdrop-blur-sm border-black/10'
          }`}>
            <div className="px-4 py-4 space-y-3">
              <div className={`flex items-center text-sm ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="mailto:office@smartdesign-expo.com" className="hover:underline break-all">
                  office@smartdesign-expo.com
                </a>
              </div>
              <div className={`flex items-center text-sm ${
                isDarkBackground ? 'text-white' : 'text-black'
              }`}>
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href="tel:+48616427147" className="hover:underline">
                  +48 61 642 7147
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile/Tablet Menu */}
        {isMenuOpen && (
          <div className={`xl:hidden border-t transition-all duration-300 ${
            isDarkBackground 
              ? 'bg-black/95 backdrop-blur-sm border-white/10' 
              : 'bg-white/95 backdrop-blur-sm border-black/10'
          }`}>
            <div className="px-4 sm:px-6 py-6 space-y-6">
              {/* Language Selector - Mobile/Tablet */}
              <div className="flex flex-col space-y-3">
                <h3 className={`text-xs uppercase tracking-wider font-semibold ${
                  isDarkBackground ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Language
                </h3>
                <div className={`flex flex-wrap gap-4 text-base ${
                  isDarkBackground ? 'text-white' : 'text-black'
                }`}>
                  <span className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                    isDarkBackground 
                      ? 'hover:bg-white/10 hover:text-gray-300' 
                      : 'hover:bg-black/5 hover:text-gray-600'
                  }`}>English</span>
                  <span className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                    isDarkBackground 
                      ? 'hover:bg-white/10 hover:text-gray-300' 
                      : 'hover:bg-black/5 hover:text-gray-600'
                  }`}>Deutsch</span>
                  <span className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                    isDarkBackground 
                      ? 'hover:bg-white/10 hover:text-gray-300' 
                      : 'hover:bg-black/5 hover:text-gray-600'
                  }`}>中文</span>
                  <span className={`cursor-pointer py-2 px-3 rounded-lg transition-all duration-200 hover:scale-105 ${
                    isDarkBackground 
                      ? 'hover:bg-white/10 hover:text-gray-300' 
                      : 'hover:bg-black/5 hover:text-gray-600'
                  }`}>한국어</span>
                </div>
              </div>

              {/* Contact Info - Only show if not already shown above */}
              {!showMobileContact && (
                <div className="flex flex-col space-y-3">
                  <h3 className={`text-xs uppercase tracking-wider font-semibold ${
                    isDarkBackground ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Contact
                  </h3>
                  <div className={`space-y-3 text-sm ${
                    isDarkBackground ? 'text-white' : 'text-black'
                  }`}>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                      <a href="mailto:office@smartdesign-expo.com" className="hover:underline break-all">
                        office@smartdesign-expo.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                      <a href="tel:+48616427147" className="hover:underline">
                        +48 61 642 7147
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Media */}
              <div className="flex flex-col space-y-3">
                <h3 className={`text-xs uppercase tracking-wider font-semibold ${
                  isDarkBackground ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Instagram className={`w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                  }`} />
                  <Facebook className={`w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                  }`} />
                  <Linkedin className={`w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'
                  }`} />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={closeMobileMenu} />
    </>
  );
};

export default Header;