import React from 'react';
import Social from '../atoms/Social';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        src="https://smartdesign-expo.com/wp-content/uploads/2024/11/hero-desktop-1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-widest mb-6">
      <span className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] bg-clip-text text-transparent  mb-6">Nakashi </span>
      Expo Innovation 
      </h1>
        <p className="text-lg md:text-xl font-light tracking-wider opacity-90">
          projektujemy i budujemy stoiska targowe
        </p>
      </div>
      <Social isDarkBackground={true}/>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white text-sm opacity-70">
        <span>Anna Europejska</span>
      </div>
    </section>
  );
};

export default HeroSection;