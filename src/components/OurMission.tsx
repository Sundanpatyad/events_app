import React, { useState, useEffect, useRef } from 'react';

const OurVisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), 100);
        setTimeout(() => setContentVisible(true), 400);
        setTimeout(() => setStatsVisible(true), 700);
      }
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const industries = [
    'Automotive', 'Electric & Batteries', 'Compressor & Refrigeration',
    'Wires & Cable', 'Chemical', 'Footwear', 'Technology', 'Healthcare'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Architectural Grid Background - matching your portfolio style */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Major Vertical Grid Lines */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 opacity-60"></div>
        <div className="absolute left-1/4 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
        <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 opacity-60"></div>
        
        {/* Major Horizontal Grid Lines */}
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 opacity-50"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 opacity-60"></div>
        
        {/* Fine Grid Lines */}
        {[16, 24, 32].map((top, index) => (
          <div 
            key={index}
            className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25"
            style={{ top: `${top * 0.25}rem` }}
          />
        ))}
      </div>

      {/* Header - matching your portfolio style */}
      <div className="relative z-10 flex justify-between items-center p-6 text-sm text-gray-600 font-medium backdrop-blur-sm">
        <div className="hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-bold tracking-wider">
          EXPO
        </div>
        <div className="hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-mono">
          +48 61 642 7167
        </div>
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Vision Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-bold tracking-[0.2em] text-gray-600 uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
              Our Vision
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-[-0.02em] bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-8 hover:scale-105 transition-all duration-700 cursor-default">
            designing brilliance
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto leading-relaxed">
            in the world of events & exhibitions
          </p>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mt-8 opacity-60"></div>
        </div>

        {/* Main Content Grid */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 transform ${
          contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                More than space, we create experiences
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe every exhibition stand is a powerful marketing tool that transforms brands into unforgettable experiences. Our designs don't just attract attention—they create connections.
              </p>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-12 h-0.5 bg-gradient-to-r from-gray-900 to-gray-400"></div>
                <span className="text-sm font-medium tracking-wide">30 Years of Excellence</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`grid grid-cols-3 gap-4 transition-all duration-800 transform ${
              statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-300 mt-1">Projects</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-gray-900">8+</div>
                <div className="text-xs text-gray-600 mt-1">Industries</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold">30</div>
                <div className="text-xs text-gray-300 mt-1">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Industries */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 ">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Industries We Transform
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <div 
                    key={industry}
                    className={`bg-gray-50 hover:bg-gradient-to-r hover:from-gray-900 hover:to-black hover:text-white p-4 rounded-lg text-center transition-all duration-300 cursor-pointer group transform hover:scale-105 ${
                      statsVisible ? 'animate-pulse' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-sm font-medium group-hover:text-white transition-colors">
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-gray-900 to-black text-white px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View All Industries →
                </button>
              </div>
            </div>

            {/* Decorative elements */}
           
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white rounded-2xl p-12 transition-all duration-1000 transform ${
          statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to create something extraordinary?
            </h3>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Let's transform your brand vision into a compelling exhibition experience that drives results and creates lasting impressions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-medium hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50 rounded-2xl"></div>
        </div>
      </div>
      
      {/* Floating decorative elements - matching your portfolio style */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-black/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-black/10 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default OurVisionSection;