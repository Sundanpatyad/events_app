import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const [animateItems, setAnimateItems] = useState(false);

  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About US", path: "/about" },
    { id: 3, title: "Events Portfolio", path: "/portfolio" },
    { id: 4, title: "Exhibitions Portfolio", path: "/exhibitions-portfolio" },
    // { id: 5, title: "Technology", path: "/technology" },
    // { id: 6, title: "Designed & Delivered", path: "/designed-delivered" },
    // { id: 7, title: "AI Concept Gallery", path: "/ai-concept-gallery" },
    { id: 8, title: "Team", path: "/team" },
    // { id: 9, title: "Upcoming Shows", path: "/upcoming-shows" },
    { id: 10, title: "Contact Us", path: "/contact-us" },
    // { id: 11, title: "Reviews", path: "/reviews" },
    // { id: 12, title: "Career", path: "/career" }
  ];

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimateItems(true), 200);
      return () => clearTimeout(timer);
    } else {
      setAnimateItems(false);
    }
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-500 ease-in-out ${
        isOpen 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-8 right-8 text-white hover:text-gray-300 transition-all duration-300 z-10 hover:rotate-90 ${
          animateItems 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4'
        }`}
        aria-label="Close menu"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Menu Content */}
      <div className="flex items-center justify-center h-full">
        <nav className="">
          <ul className="space-y-4 ">
            {menuItems.map((item, index) => (
              <li 
                key={item.id}
                className={`transform transition-all duration-600 ease-out ${
                  animateItems 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                }`}
                style={{ 
                  transitionDelay: `${index * 80}ms` 
                }}
              >
                <a
                  href={item.path}
                  className="group relative text-white text-2xl md:text-4xl font-light hover:text-gray-300 transition-all duration-300 block py-2"
                  onClick={onClose}
                >
                  <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">
                    {item.title}
                  </span>
                  
                  {/* Underline animation */}
                  {/* <div className="absolute bottom-0 left-1/2 w-0 h-px bg-white group-hover:w-full group-hover:left-0 transition-all duration-400" /> */}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div 
            className={`mt-16 space-y-4 text-white transform transition-all duration-600 ease-out ${
              animateItems 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="text-lg space-y-2">
              <p className="hover:text-gray-300 transition-colors duration-300">
                office@smartdesign-expo.com
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300">
                +48 61 642 7147
              </p>
            </div>
            
            {/* Languages */}
            <div 
              className={`flex justify-center space-x-6 text-sm mt-8 transform transition-all duration-600 ease-out ${
                animateItems 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              {['EN', 'DE', 'ZH', 'KO'].map((lang) => (
                <button 
                  key={lang}
                  className="hover:text-gray-300 cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenMenu;