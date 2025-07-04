import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiGlobe, FiAward } = FiIcons;

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FiTrendingUp,
      value: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries'
    },
    {
      icon: FiUsers,
      value: '50+',
      label: 'Global Clients',
      description: 'Trusted by enterprises and startups worldwide'
    },
    {
      icon: FiGlobe,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Reliable infrastructure and 24/7 monitoring'
    },
    {
      icon: FiAward,
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognized for innovation and excellence'
    }
  ];

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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped organizations across the globe 
            achieve their digital transformation goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {stat.value}
              </motion.div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>
              
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;