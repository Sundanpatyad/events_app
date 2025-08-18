import React, { useState, useEffect, useRef } from 'react';

const ServiceCard = ({ service, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 200);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`relative group overflow-hidden cursor-pointer transition-all duration-1000 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-96 md:h-[500px] relative overflow-hidden">
        {/* Background Image with Zoom Effect */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{
            backgroundImage: `url("${service.image}")`,
          }}
        />
        
        {/* Dynamic Overlay */}
        <div className={`absolute inset-0 bg-black transition-all duration-500 ${
          isHovered ? 'bg-opacity-60' : 'bg-opacity-40'
        }`} />
        
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Service Title */}
        <div className="absolute top-8 left-8 z-10">
          <h3 className={`text-white font-light transition-all duration-500 transform ${
            isHovered 
              ? 'text-5xl md:text-6xl translate-x-2' 
              : 'text-4xl md:text-5xl'
          }`}>
            {service.title}
          </h3>
        </div>
        
        {/* Service Description - Appears on Hover */}
        <div className={`absolute bottom-8 left-8 right-8 z-10 transition-all duration-500 transform ${
          isHovered 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-4 opacity-0'
        }`}>
          <p className="text-white text-lg leading-relaxed font-light">
            {service.description}
          </p>
          
          {/* Call to Action */}
          <div className="mt-6">
            <button className="text-white border-b border-white/50 hover:border-white transition-all duration-300 pb-1">
              Dowiedz się więcej →
            </button>
          </div>
        </div>
        
        {/* Number Badge */}
        <div className={`absolute top-8 right-8 w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-500 transform ${
          isHovered ? 'scale-110 bg-opacity-30' : ''
        }`}>
          <span className="text-white font-bold text-lg">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        
        {/* Animated Border */}
        <div className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-700 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
        
        {/* Corner Accent */}
        <div className={`absolute top-0 left-0 w-0 h-0 border-l-[50px] border-t-[50px] border-l-transparent transition-all duration-500 ${
          isHovered ? 'border-t-white/20' : 'border-t-transparent'
        }`} />
      </div>
    </div>
  );
};

const OfertaSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  const services = [
    {
      title: "Projekt",
      description: "Tworzymy unikalne projekty stoisk targowych, które przyciągają uwagę i skutecznie komunikują wartości Twojej marki.",
      image: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
    },
    {
      title: "Produkcja",
      description: "Własna stolarka i produkcja gwarantują najwyższą jakość wykonania i pełną kontrolę nad procesem budowy.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
    },
    {
      title: "Realizacja",
      description: "Kompleksowa realizacja od montażu po demontaż. Zajmujemy się wszystkimi aspektami logistycznymi i technicznymi.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
    }
  ];

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

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (contentRef.current) contentObserver.observe(contentRef.current);

    return () => {
      headerObserver.disconnect();
      contentObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-black/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-gray-200/20 to-transparent rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Main Heading */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${
            headerVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none">
            <span className="bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent hover:scale-105 transition-transform duration-700 cursor-default inline-block">
              Oferta
            </span>
          </h2>
          
          <div 
            ref={contentRef}
            className={`max-w-4xl mx-auto transition-all duration-800 transform ${
              contentVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-6 opacity-0'
            }`}
          >
            <p className="text-gray-700 text-xl leading-relaxed font-light">
              Funkcjonalność spotyka się u nas z pięknem i estetyką. Projektujemy i budujemy stoiska targowe na 
              całym świecie. Kompleksowo prowadzimy Twój projekt, przez co oszczędzisz mnóstwo czasu i energii na 
              szukanie wykonawców.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service} 
              index={index}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 transform ${
          contentVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        }`}>
          <button className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-black transition-all duration-500 hover:text-white overflow-hidden border-2 border-black hover:border-black">
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            
            {/* Button Text */}
            <span className="relative z-10 transition-all duration-300">
              Rozpocznij projekt
            </span>
            
            {/* Arrow */}
            <div className="relative z-10 ml-4 transform group-hover:translate-x-2 transition-transform duration-300">
              →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfertaSection;