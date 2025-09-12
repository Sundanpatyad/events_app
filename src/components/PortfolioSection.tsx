import React, { useState, useEffect, useRef } from 'react';
import image from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';


const PortfolioSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [projectVisible, setProjectVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const projectRef = useRef(null);

  // Sample carousel data - you can replace with your actual data
  const portfolioItems = [
    {
      id: 1,
      title: "Wiśniowski",
      type: "fair stand",
      location: "Munich",
      event: "BAU 2023",
      area: "527 m²",
      image: image
    },
    {
      id: 2,
      title: "ModernTech",
      type: "exhibition booth",
      location: "Berlin",
      event: "IFA 2023",
      area: "320 m²",
      image: image2
    },
    {
      id: 3,
      title: "InnovateSpace",
      type: "trade show stand",
      location: "Frankfurt",
      event: "Light + Building 2024",
      area: "650 m²",
      image: image3
    },
    {
      id: 4,
      title: "FutureDesign",
      type: "pavilion",
      location: "Milan",
      event: "Salone del Mobile 2024",
      area: "890 m²",
      image: image4
    },
    {
      id: 5,
      title: "TechVision",
      type: "conference booth",
      location: "Barcelona",
      event: "MWC 2024",
      area: "425 m²",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const totalSlides = portfolioItems.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const currentItem = portfolioItems[currentSlide];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Enhanced Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Major Vertical Grid Lines with glow effect */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 opacity-60 shadow-sm"></div>
        <div className="absolute left-1/6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
        <div className="absolute left-1/4 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
        <div className="absolute left-5/6 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
        <div className="absolute right-0 top-0 h-full w-0.5 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-300 opacity-60 shadow-sm"></div>
        
        {/* Major Horizontal Grid Lines */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 opacity-60"></div>
        <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 opacity-50"></div>
        <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40"></div>
        <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 opacity-60"></div>
        
        {/* Fine Grid Lines with fade effect */}
        {[20, 28, 36, 44].map((top, index) => (
          <div 
            key={index}
            className={`absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-${30 + index * 5}`}
            style={{ top: `${top * 0.25}rem` }}
          />
        ))}
        
        {/* Vertical Fine Lines */}
        {[8, 16].map((left) => (
          <React.Fragment key={left}>
            <div className={`absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-25`} style={{ left: `${left * 0.25}rem` }} />
            <div className={`absolute top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-25`} style={{ right: `${left * 0.25}rem` }} />
          </React.Fragment>
        ))}
      </div>

      {/* Header with enhanced styling */}
      <div className="relative z-10 flex justify-between items-center p-6 text-sm text-gray-600 font-medium backdrop-blur-sm">
        <div className="hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-bold tracking-wider">
          EXPO
        </div>
        <div className="hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer font-mono">
          +48 61 642 7167
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced portfolio heading */}
        <div 
          ref={headerRef}
          className={`text-center mb-8 mt-8 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-black leading-[0.8] tracking-[-0.02em] bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent transition-all duration-700 cursor-default drop-shadow-sm mb-4">
            portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light tracking-wide">
            30 years of experience
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-black to-transparent mx-auto mt-6 opacity-60"></div>
        </div>

        {/* Enhanced description section */}
        <div 
          ref={contentRef}
          className={`max-w-2xl mx-auto text-center mb-16 transition-all duration-800 transform ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-8 border-gray-200">
            <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
              30 years of experience in building exhibition stands.
              The company's and employees' years of experience translate into high-quality services.
            </p>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center text-black hover:text-gray-600 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
             
            </button>
          </div>
        </div>

        {/* Enhanced carousel showcase */}
        <div 
          ref={projectRef}
          className={`transition-all duration-1000 transform ${
            projectVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
        >
          <div 
            className="relative grid grid-cols-12 gap-0 mb-12 group cursor-pointer overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Enhanced left info panel */}
            <div className="col-span-12 lg:col-span-3 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 lg:p-12 relative overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-50"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className={`text-3xl lg:text-4xl font-light mb-8 text-white transition-all duration-300 ${
                  isHovered ? 'transform translate-x-2 scale-105' : ''
                }`}>
                  {currentItem.title}
                </h2>
                <div className="space-y-3 text-sm lg:text-base text-gray-300">
                  <p className="font-medium text-white/90 border-l-2 border-white/50 pl-3">{currentItem.type}</p>
                  <p className="pl-3">{currentItem.location}</p>
                  <p className="pl-3">{currentItem.event}</p>
                  <p className="text-white font-bold text-xl mt-4 bg-white/10 px-3 py-1 rounded">{currentItem.area}</p>
                </div>
                
                {/* Decorative element */}
                <div className={`absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full transition-all duration-500 ${
                  isHovered ? 'scale-150 rotate-45' : ''
                }`}></div>
              </div>
            </div>
            
            {/* Enhanced carousel image section */}
            <div className="col-span-12 lg:col-span-9 relative overflow-hidden">
              <div className="relative">
                <img 
                  src={currentItem.image}
                  alt={`${currentItem.title} exhibition stand at ${currentItem.event}`}
                  className={`w-full h-80 lg:h-[600px] xl:h-[700px] object-cover transition-all duration-700 transform ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Enhanced overlay effects */}
                <div className={`absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent transition-opacity duration-300 ${
                  isHovered ? 'opacity-30' : 'opacity-10'
                }`} />
                
                {/* Navigation arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Subtle corner accent */}
                <div className={`absolute top-4 right-4 w-12 h-12 border-2 border-white/50 transition-all duration-500 ${
                  isHovered ? 'rotate-45 scale-125' : ''
                }`}></div>
                
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom navigation */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          projectVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-full">
            <button 
              onClick={prevSlide}
              className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300 text-xl font-bold"
            >
              ←
            </button>
            <span className="text-base font-medium text-gray-700 tracking-wide">See portfolio</span>
            <div className="text-center flex gap-1 bg-black text-white px-3 py-2 rounded-full">
              <div className="text-sm font-bold">{currentSlide + 1}</div>
              <div className="text-xs text-gray-300 leading-none mt-1">of {totalSlides}</div>
            </div>
            <button 
              onClick={nextSlide}
              className="text-gray-600 hover:text-black hover:scale-125 transition-all duration-300 text-xl font-bold"
            >
              →
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-black/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-16 w-1 h-1 bg-gray-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-black/10 rounded-full animate-pulse delay-500"></div>
    </div>
  );
};

export default PortfolioSection;