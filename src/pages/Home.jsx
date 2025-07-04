import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import InnovationShowcase from '../components/home/InnovationShowcase';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <InnovationShowcase />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
};

export default Home;