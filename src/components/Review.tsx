import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const testimonialsRef = useRef(null);
  const brandsRef = useRef(null);

  const testimonials = [
    {
      industry: "SANITARY INDUSTRY",
      quote: "We had the opportunity to cooperate with Smart Design Expo for the 3rd time when exhibiting at the international KBIS fair taking place in the USA. During each trade fair event, we can be sure that we will receive a high-quality trade fair stand. We can count on support, commitment and interesting ideas from experienced Smart Design Expo employees.",
      author: "MARTYNA MAKA",
      position: "Marmite, Trade Marketing and Communication Manager"
    },
    {
      industry: "TECHNOLOGY SECTOR",
      quote: "Smart Design Expo exceeded our expectations with their innovative approach to our booth design. Their attention to detail and professional execution made our presence at the trade show truly memorable. The team's creativity and technical expertise are unmatched.",
      author: "ANNA KOWALSKA",
      position: "Tech Solutions, Marketing Director"
    },
    {
      industry: "AUTOMOTIVE INDUSTRY",
      quote: "Working with Smart Design Expo was a game-changer for our brand presence at international fairs. Their comprehensive approach from design to implementation saved us time and delivered exceptional results that attracted visitors and generated leads.",
      author: "ROBERT NOWAK",
      position: "AutoPro, Exhibition Manager"
    }
  ];

  const brands = [
    { name: "Alprof", logo: "ALPROF" },
    { name: "Marmite", logo: "marmite" },
    { name: "Solaris", logo: "SOLARIS" },
    { name: "Anwis", logo: "anwis" },
    { name: "HM", logo: "HM" },
    { name: "Cersanit", logo: "cersanit" }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observers = [
      {
        ref: headerRef,
        setter: setHeaderVisible,
        delay: 100
      },
      {
        ref: testimonialsRef,
        setter: setTestimonialsVisible,
        delay: 300
      },
      {
        ref: brandsRef,
        setter: setBrandsVisible,
        delay: 500
      }
    ];

    observers.forEach(({ ref, setter, delay }) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setter(true), delay);
        }
      }, observerOptions);

      if (ref.current) observer.observe(ref.current);
    });

    // Auto-play testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(interval);
      observers.forEach(() => {
        // Cleanup observers
      });
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-200 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-gray-300/30 to-transparent rounded-full blur-2xl" />
      
      {/* Download Button - Top Right */}
      <div className="absolute top-8 right-8 z-10">
        <button className="bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
          DOWNLOAD TREND EXPO
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Main Heading */}
        <div 
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 transform ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-black">
            They trusted us
          </h2>
        </div>

        {/* Testimonial Section */}
        <div 
          ref={testimonialsRef}
          className={`transition-all duration-1000 transform ${
            testimonialsVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="relative bg-white rounded-2xl p-12 md:p-16  mb-16 overflow-hidden">
            {/* Background Quote Mark */}
            <div className="absolute top-8 left-8 text-gray-100 text-8xl font-serif leading-none select-none">
              "
            </div>
            
            <div className="relative z-10">
              {/* Industry Tag */}
              <div className="text-center mb-8">
                <span className="text-sm font-bold tracking-widest text-gray-600 uppercase">
                  {testimonials[currentTestimonial].industry}
                </span>
              </div>

              {/* Quote */}
              <div className="text-center mb-12">
                <div className="text-6xl text-gray-300 mb-6 leading-none">"</div>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light max-w-4xl mx-auto italic">
                  {testimonials[currentTestimonial].quote}
                </blockquote>
              </div>

              {/* Author */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-black mb-2">
                  {testimonials[currentTestimonial].author}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Progress Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div 
          ref={brandsRef}
          className={`transition-all duration-1000 transform ${
            brandsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex items-center justify-center space-x-12 md:space-x-16 flex-wrap gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className={`text-2xl md:text-3xl font-bold text-gray-400 hover:text-black transition-all duration-500 cursor-pointer transform hover:scale-110 ${
                  brandsVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  fontFamily: brand.name === 'marmite' ? 'serif' : 'sans-serif'
                }}
              >
                {brand.logo}
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows for Brands */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            <button className="p-2 text-gray-400 hover:text-black transition-colors duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-black transition-colors duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;