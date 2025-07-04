import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCpu, FiCloud, FiShield, FiGlobe, FiZap, FiEye } = FiIcons;

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: FiCpu,
      title: 'AI-Powered Business Automation',
      description: 'Automate complex workflows using custom AI agents, RPA, and natural language interfaces.',
      features: ['Custom AI Models', 'Workflow Automation', 'Natural Language Processing'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: FiCloud,
      title: 'Autonomous Cloud Optimization',
      description: 'Self-healing, auto-scaling cloud solutions powered by AI for cost and performance optimization.',
      features: ['Auto-scaling', 'Cost Optimization', 'Performance Monitoring'],
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: FiShield,
      title: 'Zero Trust Cybersecurity',
      description: 'AI-driven threat detection, SASE, and advanced penetration testing for comprehensive security.',
      features: ['Threat Detection', 'SASE Implementation', 'Penetration Testing'],
      color: 'from-red-500 to-orange-600'
    },
    {
      icon: FiGlobe,
      title: 'Blockchain & Web3 Consulting',
      description: 'Smart contracts, decentralized apps, and digital identity management solutions.',
      features: ['Smart Contracts', 'DeFi Solutions', 'Digital Identity'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FiZap,
      title: 'IoT & Edge Computing',
      description: 'Secure device management, edge AI inference, and real-time analytics solutions.',
      features: ['Device Management', 'Edge AI', 'Real-time Analytics'],
      color: 'from-yellow-500 to-red-600'
    },
    {
      icon: FiEye,
      title: 'AR/VR & Metaverse',
      description: 'Custom AR/VR solutions for training, product visualization, and immersive collaboration.',
      features: ['AR/VR Development', 'Metaverse Solutions', 'Immersive Training'],
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Next-Generation Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that prepare your business for the future. 
            From AI automation to quantum-ready systems, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 shadow-lg`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                >
                  Learn More
                  <SafeIcon icon={FiIcons.FiArrowRight} className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All Services
            <SafeIcon icon={FiIcons.FiArrowRight} className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;