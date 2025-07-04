import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiUser, FiMessageSquare } = FiIcons;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Replace with your actual email service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          to: 'your-email@gmail.com', // Replace with your email
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      details: 'your-email@gmail.com',
      description: 'Send us an email anytime'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: '24/7 support available'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Our headquarters'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM PST',
      description: 'We respond within 24 hours'
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@webryn.com'
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 987-6543',
      email: 'ny@webryn.com'
    },
    {
      city: 'London',
      address: '789 Digital Road, London, UK EC1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'london@webryn.com'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-white dark:bg-gray-900"
    >
      <Toaster position="top-right" />
      
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how we can help you achieve 
              your digital transformation goals and drive innovation in your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mb-4">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          {...register('firstName', { required: 'First name is required' })}
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                          placeholder="John"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          {...register('lastName', { required: 'Last name is required' })}
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                          placeholder="Doe"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiMail} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        type="email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiPhone} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      {...register('company')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-automation">AI-Powered Automation</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="blockchain">Blockchain & Web3</option>
                      <option value="iot">IoT & Edge Computing</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ar-vr">AR/VR Solutions</option>
                      <option value="consulting">General Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        {...register('message', { required: 'Message is required' })}
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white resize-none"
                        placeholder="Tell us about your project and requirements..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <SafeIcon icon={FiSend} className="mr-2 w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Office Locations
                </h2>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        {office.city} Office
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-600 dark:text-gray-300">{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiPhone} className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-600 dark:text-gray-300">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <SafeIcon icon={FiMail} className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-600 dark:text-gray-300">{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Schedule a free consultation to discuss your project requirements and explore how we can help transform your business.
                </p>
                <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;