import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPlay, FiCode, FiZap, FiGlobe } = FiIcons;

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [userLocation, setUserLocation] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typewriterRef = useRef(null);

  const heroTexts = [
    'AI-Powered Business Automation',
    'Cloud-Native Architectures',
    'Next-Gen IT Consulting',
    'Digital Transformation'
  ];

  // Custom typewriter effect
  useEffect(() => {
    const currentString = heroTexts[currentText];
    let index = 0;
    
    const typeWriter = () => {
      if (index < currentString.length) {
        setDisplayText(currentString.substring(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setDisplayText('');
          setCurrentText((prev) => (prev + 1) % heroTexts.length);
        }, 2000);
      }
    };

    if (isTyping) {
      typeWriter();
    }
  }, [currentText, isTyping, heroTexts]);

  useEffect(() => {
    // Simulate geolocation
    setUserLocation('San Francisco');
  }, []);

  const floatingIcons = [
    { icon: FiCode, delay: 0, position: 'top-20 left-20' },
    { icon: FiZap, delay: 0.5, position: 'top-32 right-32' },
    { icon: FiGlobe, delay: 1, position: 'bottom-32 left-32' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient-x"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: item.delay, duration: 1 }}
          className={`absolute ${item.position} hidden lg:block`}
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <SafeIcon icon={item.icon} className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          {userLocation && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary-200 mb-4"
            >
              Welcome from {userLocation} 👋
            </motion.p>
          )}

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Engineering the
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Typewriter Effect */}
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-primary-100 min-h-[2rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-primary-200 mb-10 max-w-3xl mx-auto">
            Forward-thinking technology partner delivering end-to-end digital transformation, 
            AI-powered solutions, and next-gen IT consulting to global enterprises and startups.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Get Started
                <SafeIcon 
                  icon={FiArrowRight} 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="inline-flex items-center px-8 py-4 border-2 border-primary-400 text-primary-400 rounded-lg hover:bg-primary-400 hover:text-white transition-all duration-200 group">
                <SafeIcon icon={FiPlay} className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-primary-300"
          >
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">500+</span>
              <span>Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">99.9%</span>
              <span>Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">50+</span>
              <span>Global Clients</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;