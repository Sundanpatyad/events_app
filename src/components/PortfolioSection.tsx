import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedStat = ({ value , label, duration = 2000 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressValue = Math.min(elapsed / duration, 1);
      
      // Use easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progressValue, 4);
      
      setCurrentValue(Math.floor(value * easeOutQuart));
      setProgress(easeOutQuart * 100);

      if (progressValue < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible, value, duration]);

  const circumference = 2 * Math.PI * 58; // radius of 58
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        {/* Background circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="#e5e7eb"
            strokeWidth="2"
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="58"
            stroke="black"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
            style={{
              transition: 'stroke-dashoffset 0.1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </svg>
        {/* Counter text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="text-4xl font-light text-gray-900 transition-all duration-200 ease-out"
            style={{ 
              transform: `scale(${1 + (progress / 100) * 0.1})`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            {currentValue}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 text-center max-w-24">
        {label}
      </p>
    </div>
  );
};

const PortfolioSection = () => {
  const stats = [
    { value: 20, label: "lat doświadczenia", duration: 2200 },
    { value: 200, label: "projektów rocznie", duration: 2400 },
    { value: 150, label: "osób na pokładzie", duration: 2600 },
    { value: 30, label: "prestiżowych nagród i publikacji", duration: 2000 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Header */}
        <div className="text-center mb-16">
          <h2 className="text-8xl font-bold md:text-9xl font-bold mb-8">
            portfolio<span className="text-8xl">/</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Kreujemy przestrzeń od prawie 18 lat - projektując i budując stoiska targowe na całym świecie. Nasi 
              projektanci przenoszą nawet najbardziej szalone pomysły ze sfery marzeń do rzeczywistości. Dzięki 
              własnej stolarni i produkcji nie musisz tracić czasu i szukać różnych podwykonawców do realizacji
            </p>
            <button className="text-black hover:text-gray-600 transition-colors">
              rozwiń <span className="ml-1">▼</span>
            </button>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-black text-white p-8">
            <h3 className="text-3xl font-light mb-6">Wiśniowski</h3>
            <div className="space-y-2 text-sm">
              <p>stoisko targowe</p>
              <p>Monachium</p>
              <p>BAU 2023</p>
              <p>527 m2</p>
            </div>
          </div>
          <div 
            className="h-80 lg:h-auto bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg")',
            }}
          ></div>
        </div>

        {/* Main Portfolio Image */}
        <div className="relative mb-12">
          <div 
            className="h-96 md:h-[600px] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
          </div>
          
          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-6 py-3 flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-black font-medium">Zobacz portfolio</span>
            <div className="text-right">
              <div className="text-2xl font-bold">1</div>
              <div className="text-sm text-gray-500">8</div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Animated Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={index}
              value={stat.value}
              label={stat.label}
              duration={stat.duration}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;