import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <video 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        src="https://videos.pexels.com/video-files/2890196/2890196-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </video>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mb-6">
          KREUJEMY PRZESTRZEŃ
        </h1>
        <p className="text-lg md:text-xl font-light tracking-wider opacity-90">
          projektujemy i budujemy stoiska targowe
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white text-sm opacity-70">
        <span>Anna Europejska</span>
      </div>
    </section>
  );
};

export default HeroSection;