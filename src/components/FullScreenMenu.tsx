import React from 'react';
import { X } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-700 ease-in-out ${
        isOpen 
          ? 'opacity-100' 
          : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Menu Content */}
      <div className="flex items-center justify-center h-full">
        <nav className="text-center">
          <ul className="space-y-8">
            <li>
              <a 
                href="#home"
                className="text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors block"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="/portfolio"
                className="text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors block"
                onClick={onClose}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#oferta"
                className="text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors block"
                onClick={onClose}
              >
                Oferta
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className="text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors block"
                onClick={onClose}
              >
                O nas
              </a>
            </li>
            <li>
              <a 
                href="#contact"
                className="text-white text-4xl md:text-6xl font-light hover:text-gray-300 transition-colors block"
                onClick={onClose}
              >
                Kontakt
              </a>
            </li>
          </ul>

          {/* Contact Info */}
          <div className="mt-16 space-y-4 text-white">
            <div className="text-lg">
              <p>office@smartdesign-expo.com</p>
              <p>+48 61 642 7147</p>
            </div>
            
            {/* Languages */}
            <div className="flex justify-center space-x-6 text-sm mt-8">
              <span className="hover:text-gray-300 cursor-pointer transition-colors">EN</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">DE</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">ZH</span>
              <span className="hover:text-gray-300 cursor-pointer transition-colors">KO</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenMenu;