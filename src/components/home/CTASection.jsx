import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCalendar, FiMessageSquare } = FiIcons;

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 animate-gradient-x"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-3xl mx-auto">
            Join the ranks of forward-thinking companies that have already embraced 
            the digital future. Let's build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-900 rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold group"
              >
                <SafeIcon icon={FiCalendar} className="mr-3 w-5 h-5" />
                Schedule a Consultation
                <SafeIcon 
                  icon={FiArrowRight} 
                  className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 border-2 border-primary-300 text-primary-100 rounded-lg hover:bg-primary-300 hover:text-primary-900 transition-all duration-200 font-semibold group"
              >
                <SafeIcon icon={FiMessageSquare} className="mr-3 w-5 h-5" />
                View Our Work
                <SafeIcon 
                  icon={FiArrowRight} 
                  className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                />
              </Link>
            </motion.div>
          </div>

          {/* Additional CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-primary-100 text-sm mb-4">
                Get expert advice on your digital transformation journey
              </p>
              <Link to="/contact" className="text-primary-300 hover:text-white transition-colors text-sm font-medium">
                Book Now →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Technical Assessment</h3>
              <p className="text-primary-100 text-sm mb-4">
                Comprehensive analysis of your current infrastructure
              </p>
              <Link to="/contact" className="text-primary-300 hover:text-white transition-colors text-sm font-medium">
                Get Started →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Custom Demo</h3>
              <p className="text-primary-100 text-sm mb-4">
                See our solutions in action with a personalized demo
              </p>
              <Link to="/contact" className="text-primary-300 hover:text-white transition-colors text-sm font-medium">
                Request Demo →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;