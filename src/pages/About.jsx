import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import { teamMembers } from '../data/mockData';

const { FiTarget, FiUsers, FiTrendingUp, FiAward, FiLinkedin, FiTwitter } = FiIcons;

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: FiTarget,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with cutting-edge technology and creative solutions."
    },
    {
      icon: FiUsers,
      title: "Client-Centric",
      description: "Every solution is tailored to meet our clients' unique needs and business objectives."
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Growth",
      description: "We embrace learning and evolution, staying ahead of technological trends and market demands."
    },
    {
      icon: FiAward,
      title: "Excellence",
      description: "We deliver exceptional quality in every project, maintaining the highest standards of professionalism."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Global Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime SLA" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-white dark:bg-gray-900"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Webryn Technologies
            </h1>
            <p className="text-xl text-primary-100 max-w-4xl mx-auto">
              We are a forward-thinking technology partner dedicated to engineering the digital future 
              through innovative solutions, exceptional service, and unwavering commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                To empower businesses with cutting-edge technology solutions that drive innovation, 
                efficiency, and sustainable growth. We believe in creating a digital future where 
                technology serves humanity's greatest ambitions and solves real-world challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                From AI-powered automation to quantum-ready systems, we're building the infrastructure 
                that will power tomorrow's enterprises while maintaining the highest standards of 
                security, reliability, and performance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                To be the global leader in next-generation technology solutions, recognized for our 
                innovation, integrity, and impact on businesses worldwide. We envision a world where 
                every organization can harness the full potential of modern technology.
              </p>
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Webryn?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    500+ Successful Projects Delivered
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    99.9% Uptime Guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    24/7 Expert Support & Monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Cutting-Edge Technology Stack
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Global Team of Certified Experts
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we approach every project and client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, 
              business strategy, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a small startup to a global technology leader, our journey has been marked by 
              innovation, growth, and an unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200 dark:bg-primary-800"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2010",
                  title: "Company Founded",
                  description: "Started as a small team of passionate developers with a vision to transform businesses through technology."
                },
                {
                  year: "2015",
                  title: "First Major Breakthrough",
                  description: "Launched our first AI-powered business automation platform, serving 50+ clients across various industries."
                },
                {
                  year: "2018",
                  title: "Global Expansion",
                  description: "Opened offices in New York, London, and Singapore, establishing our presence as a global technology partner."
                },
                {
                  year: "2020",
                  title: "Innovation Leadership",
                  description: "Recognized as a leader in cloud-native solutions and awarded multiple industry certifications."
                },
                {
                  year: "2024",
                  title: "Future Forward",
                  description: "Continuing to pioneer next-generation technologies including quantum computing and advanced AI systems."
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 px-8">
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <div className="text-primary-600 dark:text-primary-400 font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 relative z-10"></div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;