import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera, MapPin, BarChart3, Recycle, Wrench, Heart, TrendingUp } from 'lucide-react';

const EWasteHub = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  const actions = [
    { id: 'donate', label: 'Donate', icon: <Heart size={24} />, color: 'from-green to-green-dark' },
    { id: 'repair', label: 'Repair', icon: <Wrench size={24} />, color: 'from-blue to-blue-600' },
    { id: 'recycle', label: 'Recycle', icon: <Recycle size={24} />, color: 'from-green-dark to-earth-brown' },
  ];

  const impactData = {
    devicesProcessed: 45,
    co2Saved: 1250, // kg
    treesEquivalent: 28,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green/10 via-blue/10 to-green/20 dark:from-green-dark/20 dark:via-blue/20 dark:to-green-dark/30 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Manage Your{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              E-Waste
            </span>
            {' '}Responsibly
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Upload, track, and responsibly dispose of your electronic devices.
          </p>
        </motion.div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Upload/Post Device */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-pointer"
          >
            <div className="w-16 h-16 bg-green/20 rounded-xl flex items-center justify-center mb-4">
              <Upload className="text-green" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Upload Device
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Post your electronic device for responsible disposal
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-green text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-dark transition-all"
            >
              <Camera size={18} />
              Take Photo
            </motion.button>
          </motion.div>

          {/* Select Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Select Action
            </h3>
            <div className="space-y-3">
              {actions.map((action) => (
                <motion.button
                  key={action.id}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAction(action.id)}
                  className={`w-full p-3 rounded-xl flex items-center gap-3 transition-all ${
                    selectedAction === action.id
                      ? `bg-gradient-to-r ${action.color} text-white`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {action.icon}
                  <span className="font-semibold">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Find Drop Center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-pointer"
          >
            <div className="w-16 h-16 bg-blue/20 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="text-blue" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Find Drop Center
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Locate nearest e-waste collection center
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-blue text-white rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              View Map
            </motion.button>
          </motion.div>

          {/* Track Footprint */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="text-purple-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Track Footprint
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">CO₂ Saved</span>
                  <span className="font-bold text-green">{impactData.co2Saved} kg</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="bg-green h-2 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Devices</span>
                  <span className="font-bold text-blue">{impactData.devicesProcessed}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="bg-blue h-2 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Impact Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-gradient-to-br from-green to-green-dark rounded-3xl p-8 shadow-2xl text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={32} />
            <h2 className="text-3xl font-bold">Your Impact So Far</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-4xl font-bold mb-2">{impactData.devicesProcessed}</p>
              <p className="text-white/80">Devices Processed</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-4xl font-bold mb-2">{impactData.co2Saved} kg</p>
              <p className="text-white/80">CO₂ Saved</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="text-4xl font-bold mb-2">{impactData.treesEquivalent}</p>
              <p className="text-white/80">Trees Equivalent</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EWasteHub;

