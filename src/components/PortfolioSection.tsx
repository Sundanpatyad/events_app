import React, { useState, useEffect, useRef } from 'react';

const PortfolioSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '50px'
    };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setHeaderVisible(true), 100);
      }
    }, observerOptions);

    const contentObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setContentVisible(true), 300);
      }
    }, observerOptions);

    const projectObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setProjectVisible(true), 500);
      }
    }, observerOptions);

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);
    if (projectRef.current) projectObserver.observe(projectRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
      projectObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden ">
      {/* Architectural Grid Lines - Bold and Structural */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Major Vertical Grid Lines */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-400 opacity-80"></div>
        <div className="absolute left-1/6 top-0 h-full w-px bg-gray-300 opacity-60"></div>
        <div className="absolute left-1/4 top-0 h-full w-0.5 bg-gray-400 opacity-70"></div>
        <div className="absolute left-5/6 top-0 h-full w-px bg-gray-300 opacity-60"></div>
        <div className="absolute right-0 top-0 h-full w-0.5 bg-gray-400 opacity-80"></div>
        
   
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 opacity-80"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gray-400 opacity-70"></div>
        <div className="absolute bottom-32 left-0 w-full h-px bg-gray-300 opacity-60"></div>
        <div className="absolute bottom-16 left-0 w-full h-px bg-gray-300 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400 opacity-80"></div>
        
        {/* Additional Fine Grid Lines */}
        <div className="absolute top-20 left-0 w-full h-px bg-gray-200 opacity-40"></div>
        <div className="absolute top-28 left-0 w-full h-px bg-gray-200 opacity-40"></div>
        <div className="absolute top-36 left-0 w-full h-px bg-gray-200 opacity-40"></div>
        <div className="absolute top-44 left-0 w-full h-px bg-gray-200 opacity-40"></div>
        
        {/* Vertical Fine Lines */}
        <div className="absolute left-8 top-0 h-full w-px bg-gray-200 opacity-30"></div>
        <div className="absolute left-16 top-0 h-full w-px bg-gray-200 opacity-30"></div>
        <div className="absolute right-8 top-0 h-full w-px bg-gray-200 opacity-30"></div>
        <div className="absolute right-16 top-0 h-full w-px bg-gray-200 opacity-30"></div>
      </div>

      {/* Header with EXPO and phone number */}
      <div className="relative z-10 flex justify-between items-center p-6 text-sm text-gray-700 font-medium">
        <div className="hover:text-black transition-colors duration-300 cursor-pointer">EXPO</div>
        <div className="hover:text-black transition-colors duration-300 cursor-pointer">+48 61 642 7167</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Large portfolio heading with animation */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 mt-8 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h1 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-black leading-[0.8] tracking-[-0.02em] bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 cursor-default">
            portfolio
          </h1>
        </div>

        {/* Description section with animation */}
        <div 
          ref={contentRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-800 transform ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-gray-700 text-base leading-relaxed mb-6 font-light">
            We have been creating space for almost 18 years - designing and building trade fair stands around the 
            world. Our designers take even the craziest ideas from the realm of dreams to reality. Thanks to your 
            own carpentry shop and production, you don't have to waste time and look for various subcontractors to 
            implement
          </p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center text-black hover:text-gray-600 transition-all duration-300 text-sm font-medium"
          >
            <span className="border-b border-black group-hover:border-gray-600 transition-colors duration-300">
              expand
            </span>
            <span className={`ml-3 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}>
              ▼
            </span>
          </button>
        </div>

        {/* Project showcase with enhanced animation */}
        <div 
          ref={projectRef}
          className={`transition-all duration-1000 transform ${
            projectVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div 
            className="grid grid-cols-12 gap-0 mb-12 group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Left info panel with professional styling */}
            <div className="col-span-12 lg:col-span-3 bg-black text-white p-8 lg:p-12 relative">
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className={`text-3xl lg:text-4xl font-light mb-8 text-white transition-all duration-300 ${
                  isHovered ? 'transform translate-x-1' : ''
                }`}>
                  Wiśniowski
                </h2>
                <div className="space-y-2 text-sm lg:text-base text-gray-300">
                  <p className="font-medium">fair stand</p>
                  <p>Munich</p>
                  <p>BAU 2023</p>
                  <p className="text-white font-semibold text-lg">527 m²</p>
                </div>
              </div>
            </div>
            
            {/* Right image with professional styling - Much larger */}
            <div className="col-span-12 lg:col-span-9 relative overflow-hidden">
              <div 
                className={`h-80 lg:h-[600px] xl:h-[700px] bg-cover bg-center transition-all duration-700 transform ${
                  isHovered ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
                }}
              />
              {/* Subtle overlay */}
              <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                isHovered ? 'opacity-10' : 'opacity-0'
              }`} />
            </div>
          </div>
        </div>

        {/* Bottom navigation with animation */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          projectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-8 bg-white px-8 py-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">
            <button className="text-gray-600 hover:text-black transition-colors duration-300 text-lg">
              ←
            </button>
            <span className="text-base font-medium text-gray-700">See portfolio</span>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">1</div>
              <div className="text-xs text-gray-500 leading-none">8</div>
            </div>
            <button className="text-gray-600 hover:text-black transition-colors duration-300 text-lg">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;