import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { 
  FiUser, FiLock, FiEye, FiEyeOff, FiDashboard, FiFolder, FiBarChart, 
  FiMessageSquare, FiSettings, FiDownload, FiUpload, FiClock, FiCheckCircle 
} = FiIcons;

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onLogin = async (data) => {
    try {
      // Simulate login - replace with actual authentication
      if (data.email === 'demo@client.com' && data.password === 'demo123') {
        setIsLoggedIn(true);
        toast.success('Login successful!');
      } else {
        toast.error('Invalid credentials. Use demo@client.com / demo123');
      }
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  const projects = [
    {
      id: 1,
      name: 'AI Automation Platform',
      status: 'In Progress',
      progress: 75,
      deadline: '2024-03-15',
      manager: 'Sarah Chen'
    },
    {
      id: 2,
      name: 'Cloud Migration',
      status: 'Completed',
      progress: 100,
      deadline: '2024-01-20',
      manager: 'Michael Rodriguez'
    },
    {
      id: 3,
      name: 'Security Audit',
      status: 'Planning',
      progress: 25,
      deadline: '2024-04-10',
      manager: 'Emily Johnson'
    }
  ];

  const recentActivity = [
    { id: 1, action: 'Project milestone completed', project: 'AI Automation Platform', time: '2 hours ago' },
    { id: 2, action: 'New document uploaded', project: 'Cloud Migration', time: '1 day ago' },
    { id: 3, action: 'Status report generated', project: 'Security Audit', time: '2 days ago' },
    { id: 4, action: 'Meeting scheduled', project: 'AI Automation Platform', time: '3 days ago' }
  ];

  const documents = [
    { id: 1, name: 'Project Proposal - AI Platform.pdf', size: '2.4 MB', date: '2024-01-15' },
    { id: 2, name: 'Technical Specifications.docx', size: '1.8 MB', date: '2024-01-12' },
    { id: 3, name: 'Progress Report - January.pdf', size: '3.2 MB', date: '2024-01-10' },
    { id: 4, name: 'Meeting Notes - Kickoff.pdf', size: '0.9 MB', date: '2024-01-08' }
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FiDashboard },
    { id: 'projects', label: 'Projects', icon: FiFolder },
    { id: 'documents', label: 'Documents', icon: FiDownload },
    { id: 'reports', label: 'Reports', icon: FiBarChart },
    { id: 'messages', label: 'Messages', icon: FiMessageSquare },
    { id: 'settings', label: 'Settings', icon: FiSettings }
  ];

  if (!isLoggedIn) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen pt-20 bg-white dark:bg-gray-900 flex items-center justify-center"
      >
        <div className="max-w-md w-full mx-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiUser} className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Client Portal
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Access your project dashboards and collaborate with our team
              </p>
            </div>

            <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <SafeIcon icon={FiUser} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    type="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <SafeIcon icon={FiLock} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    {...register('password', { required: 'Password is required' })}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Demo credentials: demo@client.com / demo123
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">DC</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-900 dark:text-white">Demo Client</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">demo@client.com</p>
              </div>
            </div>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <SafeIcon icon={item.icon} className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && (
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, Demo Client
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here's an overview of your projects and recent activity.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Active Projects', value: '3', icon: FiFolder, color: 'text-blue-600' },
                  { title: 'Completed Tasks', value: '24', icon: FiCheckCircle, color: 'text-green-600' },
                  { title: 'Pending Reviews', value: '5', icon: FiClock, color: 'text-yellow-600' },
                  { title: 'Total Hours', value: '156', icon: FiBarChart, color: 'text-purple-600' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                      </div>
                      <SafeIcon icon={stat.icon} className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Current Projects
                  </h2>
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {project.name}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="mb-2">
                          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                          <span>Manager: {project.manager}</span>
                          <span>Due: {project.deadline}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {activity.action}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {activity.project} • {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Documents
                </h1>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                  <SafeIcon icon={FiUpload} className="w-5 h-5 mr-2" />
                  Upload Document
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-6">
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <SafeIcon icon={FiDownload} className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {doc.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {doc.size} • {doc.date}
                            </p>
                          </div>
                        </div>
                        <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would be implemented similarly */}
          {activeTab !== 'dashboard' && activeTab !== 'documents' && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {navigationItems.find(item => item.id === activeTab)?.label}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                This section is under development. Stay tuned for updates!
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ClientPortal;