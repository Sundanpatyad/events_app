import React from 'react';
import { X } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About US", path: "/about" },
    { id: 3, title: "Events Portfolio", path: "/portfolio" },
    { id: 4, title: "Exhibitions Portfolio", path: "/exhibitions-portfolio" },
    { id: 5, title: "Technology", path: "/technology" },
    { id: 6, title: "Designed & Delivered", path: "/designed-delivered" },
    { id: 7, title: "AI Concept Gallery", path: "/ai-concept-gallery" },
    { id: 8, title: "Upcoming Shows", path: "/upcoming-shows" },
    { id: 9, title: "Contact Us", path: "/contact" },
    { id: 10, title: "Google and Social Media Reviews", path: "/reviews" },
    { id: 11, title: "Career", path: "/career" }
  ];

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
        aria-label="Close menu"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Menu Content */}
      <div className="flex items-center justify-center h-full">
        <nav className="text-center">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.path}
                  className="text-white text-2xl md:text-4xl font-light hover:text-gray-300 transition-colors block"
                  onClick={onClose}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="mt-16 space-y-4 text-white">
            <div className="text-lg">
              <p>office@smartdesign-expo.com</p>
              <p>+48 61 642 7147</p>
            </div>
            
            {/* Languages */}
            <div className="flex justify-center space-x-6 text-sm mt-8">
              <button className="hover:text-gray-300 cursor-pointer transition-colors">EN</button>
              <button className="hover:text-gray-300 cursor-pointer transition-colors">DE</button>
              <button className="hover:text-gray-300 cursor-pointer transition-colors">ZH</button>
              <button className="hover:text-gray-300 cursor-pointer transition-colors">KO</button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default FullScreenMenu;