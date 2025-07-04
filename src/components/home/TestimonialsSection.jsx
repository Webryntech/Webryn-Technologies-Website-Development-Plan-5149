import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiChevronLeft, FiChevronRight } = FiIcons;

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechCorp',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Webryn transformed our entire infrastructure with their AI-powered automation. We\'ve seen a 40% increase in efficiency and significant cost savings.',
      rating: 5,
      project: 'AI Automation Implementation'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateLabs',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The blockchain solutions provided by Webryn have revolutionized our supply chain management. Their expertise in Web3 is unmatched.',
      rating: 5,
      project: 'Blockchain Integration'
    },
    {
      name: 'Emily Johnson',
      role: 'VP of Operations, DataFlow',
      company: 'DataFlow',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Their zero-trust cybersecurity implementation has given us peace of mind. The AI-driven threat detection is incredibly sophisticated.',
      rating: 5,
      project: 'Cybersecurity Overhaul'
    },
    {
      name: 'David Park',
      role: 'Director of Innovation, FutureTech',
      company: 'FutureTech',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The AR/VR training solutions have transformed how we onboard new employees. The immersive experience is game-changing.',
      rating: 5,
      project: 'AR/VR Training Platform'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from industry leaders who have 
            transformed their businesses with our solutions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-200 dark:border-primary-800"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-1">
                      {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? 'bg-primary-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Trusted by leading companies worldwide
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {['TechCorp', 'InnovateLabs', 'DataFlow', 'FutureTech'].map((company) => (
              <div key={company} className="text-lg font-semibold text-gray-400 dark:text-gray-500">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;