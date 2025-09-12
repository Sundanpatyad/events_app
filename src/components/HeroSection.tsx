import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import video from '../assets/hero-video.mp4';

const Social = ({ isDarkBackground }) => (
  <motion.div 
    className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 4, duration: 0.8, ease: "easeOut" }}
  >
    <a href="#" className={`${isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    </a>
    <a href="#" className={`${isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
    </a>
    <a href="#" className={`${isDarkBackground ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-600'} transition-colors`}>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0188 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
      </svg>
    </a>
  </motion.div>
);


// Loading Animation Component
const LoadingAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      {/* Loading Text */}
      <motion.div 
        className="text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.h2 
          className="text-white text-lg font-light tracking-widest mb-2"
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          LOADING YOUR EXPERIENCE
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-sm font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          {progress}%
        </motion.p>
      </motion.div>

      {/* Progress Bar */}
      <div className="relative w-full max-w-md mx-auto">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "easeOut" }}
          />
        </div>
        
        {/* Glowing dots animation */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: dot * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoAnimationComplete(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 6000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  const splashVariants = {
    initial: { opacity: 1 },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  const logoVariants = {
    initial: { 
      scale: 0.8,
      y: 0,
      opacity: 0
    },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 1,
        ease: "easeOut"
      }
    },
    moveUp: {
      scale: 0.4,
      y: -400,
      opacity: 0.8,
      transition: {
        duration: 2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 2
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 1.5
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.8,
        delay: 2.5
      }
    }
  };

  const contentVariants = {
    initial: { 
      opacity: 0,
      y: 30
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 1.5
      }
    }
  };

  const backgroundOverlayVariants = {
    initial: { opacity: 0.6 },
    animate: { 
      opacity: 0.6,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {!animationComplete && (
          <motion.div
            className="fixed inset-0 z-50"
            variants={splashVariants}
            initial="initial"
            exit="exit"
          >
            <video 
              className="absolute inset-0 w-full h-full object-cover"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            />
            <motion.div 
              className="absolute inset-0 bg-black/70"
              variants={backgroundOverlayVariants}
              initial="initial"
              animate="animate"
            />
            
            {/* Splash Logo and Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                variants={logoVariants}
                initial="initial"
                animate={logoAnimationComplete ? "moveUp" : "animate"}
              >
                {/* Logo Image */}
                <motion.div className="mb-8">
                  <img src={logo} alt="Logo" className="h-28 mx-auto" />
                </motion.div>

                {/* Brand Text */}
                <AnimatePresence>
                  {!logoAnimationComplete && (
                    <motion.div
                      variants={textVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <motion.h1 
                        className="text-4xl md:text-6xl font-light tracking-widest text-white mb-4"
                        animate={{ 
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        NAKASHI EXPO
                      </motion.h1>
                      <motion.p 
                        className="text-lg text-gray-300 font-light tracking-wider"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.8 }}
                      >
                        Innovation in Exhibition Design
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Loading Animation */}
            <LoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div 
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        />
        
        {/* Top Logo and Text (Small versions that appear after drag) */}
        <motion.div 
          className="absolute top-8 left-8 z-20 flex items-center space-x-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-6 mt-16"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-medium uppercase tracking-wider mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <motion.span 
              className="text-4xl md:text-6xl lg:text-7xl font-medium bg-gradient-to-r from-[#771d1c] to-[#c6c7c9] bg-clip-text font-bolder text-transparent mb-2 block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              EXPO
            </motion.span>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              INNOVATION
            </motion.div>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl font-light tracking-wider opacity-90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
      Our stands stand out with premium craftsmanship, unique materials, and innovative design.
          </motion.p>
        </motion.div>
        
    
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 right-8 text-white text-sm opacity-70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <span>John Doe</span>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;