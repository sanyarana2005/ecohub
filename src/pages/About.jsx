import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Leaf, ArrowUpRight, Sprout, Droplet, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      id: 1,
      title: 'Small Steps. Greener Future',
      description: 'Find the property you need with Greenify. From dream homes and modern apartments to commercial properties, Greenify provides the best solutions for sustainable living.',
      highlighted: true,
    },
    {
      id: 2,
      title: 'Boost Results with Advanced Tech',
      description: 'Leverage cutting-edge technology to maximize your agricultural productivity and sustainability.',
      highlighted: false,
    },
    {
      id: 3,
      title: 'Smart Ways to Save Water',
      description: 'Implement intelligent water management systems that reduce waste and increase efficiency.',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-2 border-2 border-gray-900 rounded-full text-sm font-semibold text-gray-900 dark:text-white dark:border-white">
              Empowering Agriculture
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-dark dark:text-green mb-4 leading-tight">
              Green Solutions for Future{' '}
              <span className="inline-flex items-center gap-2">
                <Leaf className="text-green-dark dark:text-green" size={48} />
                Farming
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Agriculture the property you need with Greenify. From dream homes and modern apartments to commercial properties, Greenify provides the best solutions for sustainable living.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-green-dark dark:bg-green text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-green-dark/90 dark:hover:bg-green/90 transition-all shadow-lg"
            >
              Get Started
              <ArrowUpRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              How it work
            </motion.button>
          </motion.div>

          {/* Image and Content Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-green border-2 border-white dark:border-gray-800 flex items-center justify-center text-white font-semibold text-sm"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">100k+ Joined</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green to-green-dark rounded-2xl p-6 text-white">
                <p className="text-lg font-semibold">
                  Join us in transforming the future of farming
                </p>
              </div>
            </motion.div>

            {/* Center Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-background.jpeg"
                  alt="Agricultural fields"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className += ' bg-gradient-to-br from-green-400 to-green-600';
                    e.target.parentElement.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-white text-4xl">🌾</div>';
                  }}
                />
                {/* Overlay Tags */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
                  Innovative Agriculture
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
                  Innovative Agriculture
                </div>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
                <div className="bg-gradient-to-br from-green-200 to-green-400 h-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">🌾</div>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-900 shadow-lg">
                  Innovative Agriculture
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* Left Side - Tag and Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 border-2 border-gray-900 dark:border-white rounded-full text-sm font-semibold text-gray-900 dark:text-white mb-6">
                About us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Clean Solutions for a Productive World
              </h2>
            </motion.div>

            {/* Right Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              <p>
                Find the property you need with Greenify. From dream homes and modern apartments to commercial properties, Greenify provides the best solutions for sustainable living and agricultural innovation.
              </p>
            </motion.div>
          </div>

          {/* Feature/Accordion Section */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`rounded-2xl p-6 md:p-8 shadow-lg transition-all ${
                  feature.highlighted
                    ? 'bg-green/20 dark:bg-green/10 border-2 border-green/30'
                    : 'bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    {feature.highlighted && (
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className={`flex-shrink-0 ${
                      feature.highlighted
                        ? 'w-12 h-12 bg-green-dark dark:bg-green rounded-full flex items-center justify-center text-white'
                        : 'w-10 h-10 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    <ArrowUpRight size={24} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Leaf className="text-green" size={32} />
            <Heart className="text-red-500" size={24} />
            <Leaf className="text-green-dark" size={32} />
          </motion.div>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Building a resilient tomorrow, one action at a time.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            © 2024 Greenify. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-green hover:text-white transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
