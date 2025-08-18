import React, { useState, useEffect, useRef } from 'react';

const MinimalCard = ({ card, index, isActive, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`group cursor-pointer transition-all duration-700 ease-out bg-gray-50 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-16 opacity-0'
      } ${isActive ? 'scale-105' : 'scale-100'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(index)}
    >
      <div className="relative border border-gray-100 hover:border-gray-900 transition-all duration-500 hover:shadow-2xl overflow-hidden">
        
        {/* Floating Number Badge */}
        <div className={`absolute top-6 right-6 z-20 transition-all duration-500 ${
          isHovered ? 'translate-x-2 -translate-y-2' : 'translate-x-0 translate-y-0'
        }`}>
          <div className="w-12 h-12 bg-black text-white flex items-center justify-center text-sm font-mono font-bold">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Image with Parallax Effect */}
        <div className="relative overflow-hidden h-72">
          <div 
            className={`w-full h-full bg-cover bg-center transition-all duration-1000 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            style={{
              backgroundImage: `url("${card.image}")`
            }}
          />
          
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Sliding Color Bar */}
          <div className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-700 ease-out ${
            isHovered ? 'w-full' : 'w-0'
          }`}></div>
        </div>

        {/* Content Area */}
        <div className="p-8 relative">
          {/* Category Tag */}
          <div className={`inline-block mb-4 transition-all duration-300 ${
            isHovered ? 'translate-x-1' : 'translate-x-0'
          }`}>
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-gray-500 border-b border-gray-300 pb-1">
              {card.category}
            </span>
          </div>
          
          {/* Title with Character Animation */}
          <h3 className="text-2xl font-bold leading-tight mb-4 text-gray-900 overflow-hidden">
            <span className={`block transition-all duration-500 ${
              isHovered ? 'translate-y-0' : 'translate-y-0'
            }`}>
              {card.title}
            </span>
          </h3>
          
          {/* Description with Reveal Effect */}
          <div className="relative overflow-hidden">
            <p className={`text-gray-600 leading-relaxed text-sm transition-all duration-500 ${
              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
            }`}>
              {card.description}
            </p>
          </div>

          {/* Read More Link */}
          <div className={`mt-6 transition-all duration-500 ${
            isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <span className="inline-flex items-center text-sm font-mono text-black group-hover:text-gray-600 transition-colors duration-300">
              <span className="border-b border-current">Read more</span>
              <div className="ml-2 w-4 h-4 border-t border-r border-current rotate-45 transition-transform duration-300 group-hover:translate-x-1"></div>
            </span>
          </div>
        </div>

        {/* Corner Accent */}
        <div className={`absolute top-0 left-0 w-0 h-0 border-l-[20px] border-b-[20px] border-l-black border-b-transparent transition-all duration-500 ${
          isHovered ? 'border-l-[30px] border-b-[30px]' : ''
        }`}></div>
      </div>
    </div>
  );
};

const CardShowcase = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const headerRef = useRef(null);

  const cards = [
    {
      category: "Award Winner",
      title: "Smart Design Expo Silver A'Design Award",
      description: "Recognition for innovative exhibition stand design that pushed the boundaries of spatial storytelling and user experience. A testament to our commitment to excellence.",
      image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      category: "Innovation",
      title: "Interactive Digital Experience Platform",
      description: "Groundbreaking digital installation that seamlessly blends physical and virtual spaces, creating immersive brand experiences that captivate and engage audiences.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      category: "Excellence",
      title: "Sustainable Exhibition Architecture",
      description: "Award-winning eco-friendly design approach that demonstrates how environmental consciousness and cutting-edge aesthetics can work in perfect harmony.",
      image: "https://images.pexels.com/photos/3183127/pexels-photo-3183127.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      category: "Recognition",
      title: "International Design Competition",
      description: "Global recognition for our innovative approach to brand activation and spatial design, showcasing our ability to create memorable, impactful experiences.",
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setHeaderVisible(true), 300);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '100px'
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="min-h-screen ">
      {/* Floating Geometric Elements */}
      <div className="fixed top-20 right-20 w-1 h-24 bg-black opacity-20 animate-pulse"></div>
      <div className="fixed bottom-32 left-20 w-24 h-1 bg-black opacity-20"></div>
      <div className="fixed top-1/2 right-16 w-3 h-3 bg-black rotate-45 opacity-30"></div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Typography-Focused Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-20 transition-all duration-1000 transform ${
              headerVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Floating Counter */}
            <div className="mb-6">
              <span className="text-[12rem] font-black text-gray-200 leading-none select-none">
                04
              </span>
            </div>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8">
                <span className="block text-black">That's what they talk about...</span>
                <span className="block text-black italic">about...</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Each project represents our dedication to pushing creative boundaries 
                and delivering exceptional results that speak for themselves.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cards.map((card, index) => (
              <MinimalCard
                key={index}
                card={card}
                index={index}
                isActive={activeCard === index}
                onClick={setActiveCard}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center space-x-6">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-500 ${
                  activeCard === index 
                    ? 'w-8 h-2 bg-black' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-500'
                }`}
                onClick={() => setActiveCard(index)}
              />
            ))}
          </div>

          {/* Minimal Footer Action */}
          <div className="text-center mt-20">
            <button className="group relative bg-transparent border-2 border-black text-black px-12 py-4 font-mono text-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-black hover:text-white overflow-hidden">
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-2">
                View All Projects
              </span>
              
              {/* Sliding Background */}
              <div className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></div>
              
              {/* Arrow */}
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 group-hover:translate-x-2">
                <div className="w-3 h-3 border-t border-r border-current rotate-45"></div>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardShowcase;