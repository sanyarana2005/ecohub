import { motion } from 'framer-motion';
import { Camera, Eye, Droplets, Sparkles } from 'lucide-react';

const ResilienceLens = () => {
  const modes = [
    {
      title: 'View 2050',
      description: 'See how your environment might look in 2050 based on current climate projections',
      icon: <Eye size={32} />,
      color: 'from-green to-green-dark',
    },
    {
      title: 'Flood Risk Mode',
      description: 'Visualize potential flood zones and water levels in your area',
      icon: <Droplets size={32} />,
      color: 'from-blue to-green',
    },
    {
      title: 'Greener Future',
      description: 'See how green infrastructure could transform your surroundings',
      icon: <Sparkles size={32} />,
      color: 'from-green-dark to-green',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green/10 via-blue/10 to-green/20 dark:from-green-dark/20 dark:via-blue/20 dark:to-green-dark/30 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Experience Climate Change{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Through Your Lens
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Use your camera to visualize floods, greenery, or urban cooling in AR.
            Explore different climate scenarios and see the future of your environment.
          </p>
        </motion.div>

        {/* Camera Frame Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mb-16 max-w-4xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            {/* Camera Frame Border */}
            <div className="absolute inset-4 border-4 border-green/50 rounded-2xl"></div>
            
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-center"
              >
                <Camera size={64} className="text-green mx-auto mb-4" />
                <p className="text-white text-xl font-semibold">AR Camera View</p>
                <p className="text-gray-400 mt-2">Point your camera to see AR visualization</p>
              </motion.div>
            </div>

            {/* Animated Background Elements */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-10 right-10 w-32 h-32 bg-green/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, -60, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-10 left-10 w-40 h-40 bg-blue/20 rounded-full blur-2xl"
            />
          </div>
        </motion.div>

        {/* Mode Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {modes.map((mode, index) => (
            <motion.button
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${mode.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-bold">{mode.title}</h3>
                <p className="text-white/90 text-center">{mode.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Real-time Visualization',
              description: 'See climate impacts overlaid on your real-world view',
              icon: '👁️',
            },
            {
              title: 'Data-Driven Projections',
              description: 'Based on latest climate science and IPCC reports',
              icon: '📊',
            },
            {
              title: 'Interactive Learning',
              description: 'Explore different scenarios and understand solutions',
              icon: '🎓',
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResilienceLens;
