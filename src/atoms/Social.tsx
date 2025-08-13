import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface SocialProps {
  isDarkBackground: boolean;
}

const Social: React.FC<SocialProps> = ({ isDarkBackground }) => {
  return (
    <div className='absolute top-40 right-4 z-50'>
      <div className="flex flex-col items-center space-y-3">
        <Instagram
          className={`w-4 h-4 cursor-pointer transition-colors ${
            isDarkBackground
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-600'
          }`}
        />
        <Facebook
          className={`w-4 h-4 cursor-pointer transition-colors ${
            isDarkBackground
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-600'
          }`}
        />
        <Linkedin
          className={`w-4 h-4 cursor-pointer transition-colors ${
            isDarkBackground
              ? 'text-white hover:text-gray-300'
              : 'text-black hover:text-gray-600'
          }`}
        />
        <span className={`text-sm ${isDarkBackground ? 'text-white' : 'text-black'}`}>
          Bé
        </span>
      </div>
    </div>
  );
};

export default Social;