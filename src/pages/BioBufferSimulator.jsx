import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Droplets, TreePine, TrendingUp } from 'lucide-react';

const BioBufferSimulator = () => {
  const [elements, setElements] = useState({
    trees: 0,
    wetlands: 0,
    mangroves: 0,
  });

  const [stats, setStats] = useState({
    temperature: 72,
    floodRisk: 45,
    airQuality: 65,
  });

  const addElement = (type) => {
    setElements((prev) => {
      const newCount = prev[type] + 1;
      return { ...prev, [type]: newCount };
    });
    
    // Update stats based on added element
    setStats((prev) => {
      const updates = {
        trees: { temperature: -2, floodRisk: -3, airQuality: +5 },
        wetlands: { temperature: -1, floodRisk: -8, airQuality: +3 },
        mangroves: { temperature: -1.5, floodRisk: -10, airQuality: +4 },
      };
      const update = updates[type];
      return {
        temperature: Math.max(60, prev.temperature + update.temperature),
        floodRisk: Math.max(0, prev.floodRisk + update.floodRisk),
        airQuality: Math.min(100, prev.airQuality + update.airQuality),
      };
    });
  };

  const removeElement = (type) => {
    if (elements[type] > 0) {
      setElements((prev) => {
        const newCount = prev[type] - 1;
        return { ...prev, [type]: newCount };
      });
      
      // Revert stats
      setStats((prev) => {
        const updates = {
          trees: { temperature: +2, floodRisk: +3, airQuality: -5 },
          wetlands: { temperature: +1, floodRisk: +8, airQuality: -3 },
          mangroves: { temperature: +1.5, floodRisk: +10, airQuality: -4 },
        };
        const update = updates[type];
        return {
          temperature: Math.min(85, prev.temperature + update.temperature),
          floodRisk: Math.min(100, prev.floodRisk + update.floodRisk),
          airQuality: Math.max(0, prev.airQuality + update.airQuality),
        };
      });
    }
  };

  const elementTypes = [
    {
      key: 'trees',
      name: 'Trees',
      icon: <Sprout size={24} />,
      emoji: '🌲',
      color: 'from-green to-green-dark',
      description: 'Trees reduce temperature through shade and evapotranspiration',
    },
    {
      key: 'wetlands',
      name: 'Wetlands',
      icon: <Droplets size={24} />,
      emoji: '💧',
      color: 'from-blue to-green',
      description: 'Wetlands absorb floodwaters and filter pollutants',
    },
    {
      key: 'mangroves',
      name: 'Mangroves',
      icon: <TreePine size={24} />,
      emoji: '🌴',
      color: 'from-green-dark to-earth-brown',
      description: 'Mangroves protect coastlines and sequester carbon',
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
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Simulate{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Nature's Power
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Add natural elements to see how they improve climate resilience in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Add Elements
              </h3>
              <div className="space-y-3">
                {elementTypes.map((element) => (
                  <div
                    key={element.key}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${element.color} rounded-lg flex items-center justify-center text-2xl`}>
                          {element.emoji}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {element.name}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {elements[element.key]} added
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {element.description}
                    </p>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addElement(element.key)}
                        className={`flex-1 px-4 py-2 bg-gradient-to-r ${element.color} text-white rounded-lg font-semibold text-sm`}
                      >
                        + Add
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => removeElement(element.key)}
                        disabled={elements[element.key] === 0}
                        className="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        - Remove
                      </motion.button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center Panel - Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 h-full min-h-[500px] shadow-2xl relative overflow-hidden">
              {/* Visualization Canvas */}
              <div className="relative h-full flex items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 gap-2 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gray-300 dark:bg-gray-700 rounded"
                      />
                    ))}
                  </div>
                </div>

                {/* Elements Visualization */}
                <div className="relative z-10 flex flex-wrap gap-4 justify-center items-center">
                  {Array.from({ length: elements.trees }).map((_, i) => (
                    <motion.div
                      key={`tree-${i}`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-4xl"
                    >
                      🌲
                    </motion.div>
                  ))}
                  {Array.from({ length: elements.wetlands }).map((_, i) => (
                    <motion.div
                      key={`wetland-${i}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-4xl"
                    >
                      💧
                    </motion.div>
                  ))}
                  {Array.from({ length: elements.mangroves }).map((_, i) => (
                    <motion.div
                      key={`mangrove-${i}`}
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-4xl"
                    >
                      🌴
                    </motion.div>
                  ))}

                  {Object.values(elements).every((val) => val === 0) && (
                    <div className="text-center text-gray-400 dark:text-gray-500">
                      <p className="text-lg mb-2">Add elements to see visualization</p>
                      <p className="text-sm">Click the buttons on the left to start</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-4"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Climate Impact
              </h3>
              <div className="space-y-6">
                {/* Temperature */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Temperature
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {stats.temperature.toFixed(1)}°F
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((stats.temperature - 60) / 25) * 100}%` }}
                      className="bg-gradient-to-r from-red-400 to-orange-400 h-3 rounded-full"
                    />
                  </div>
                </div>

                {/* Flood Risk */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Flood Risk
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {stats.floodRisk.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.floodRisk}%` }}
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full"
                    />
                  </div>
                </div>

                {/* Air Quality */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Air Quality
                    </span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {stats.airQuality.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stats.airQuality}%` }}
                      className="bg-gradient-to-r from-green to-green-dark h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-6 p-4 bg-green/10 dark:bg-green-dark/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green dark:text-green-dark" size={20} />
                  <span className="text-sm font-semibold text-green-dark dark:text-green">
                    Impact Summary
                  </span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Natural elements reduce temperature, flood risk, and improve air quality.
                  Add more to see greater impact!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BioBufferSimulator;
