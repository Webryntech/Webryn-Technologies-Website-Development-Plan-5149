import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCpu, FiShield, FiGlobe, FiZap, FiTrendingUp, FiLayers } = FiIcons;

const InnovationShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const innovations = [
    {
      icon: FiCpu,
      title: 'Quantum-Ready Advisory',
      description: 'Prepare for quantum computing with risk assessment and quantum-safe encryption.',
      status: 'Coming Soon',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Sustainability Analytics Suite',
      description: 'AI-driven dashboards for carbon tracking, ESG compliance, and green IT optimization.',
      status: 'Available Now',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: FiLayers,
      title: 'Custom Generative AI Models',
      description: 'Tailored GPT/LLM deployments for content, support, coding, and internal processes.',
      status: 'Beta',
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Innovation at the Forefront
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're not just keeping up with technology trends – we're creating them. 
            Explore our cutting-edge solutions that will shape the future of business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    innovation.status === 'Available Now' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : innovation.status === 'Beta'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
                  }`}>
                    {innovation.status}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${innovation.color} rounded-xl mb-6 shadow-lg`}>
                  <SafeIcon icon={innovation.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {innovation.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {innovation.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${innovation.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ 
                      width: innovation.status === 'Available Now' ? '100%' : 
                             innovation.status === 'Beta' ? '75%' : '25%' 
                    }}
                  />
                </div>

                {/* Action Button */}
                <button className="w-full py-3 px-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-all duration-200 font-medium">
                  {innovation.status === 'Available Now' ? 'Learn More' : 
                   innovation.status === 'Beta' ? 'Join Beta' : 'Get Notified'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Powered by Cutting-Edge Technology
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'TensorFlow', 'Kubernetes', 'AWS', 'Blockchain', 'React', 'Node.js',
              'Python', 'Docker', 'GraphQL', 'MongoDB', 'Redis', 'Elasticsearch'
            ].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationShowcase;