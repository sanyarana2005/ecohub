import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Target, Leaf, TreePine, Bird, CheckCircle, Sparkles } from 'lucide-react';

const VRForestTrail = () => {
  const [isExploring, setIsExploring] = useState(false);

  const stats = {
    forestHealth: 75,
    speciesUnlocked: 12,
    missionsCompleted: 8,
  };

  const missions = [
    { id: 1, title: 'Plant 10 Trees', completed: true, progress: 100 },
    { id: 2, title: 'Save 3 Endangered Species', completed: true, progress: 100 },
    { id: 3, title: 'Clean River Path', completed: false, progress: 60 },
    { id: 4, title: 'Discover New Species', completed: false, progress: 30 },
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
            Step into the{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Virtual Forest
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore nature and restore it through real-world eco-actions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main VR Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-[600px] relative">
              {/* 3D/VR Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: -100, x: Math.random() * 1000, opacity: 0 }}
                      animate={{
                        y: 800,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: 'linear',
                      }}
                      className="absolute text-4xl"
                    >
                      🍃
                    </motion.div>
                  ))}
                </div>

                {/* VR Scene Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="text-8xl mb-4"
                    >
                      🌳
                    </motion.div>
                    <p className="text-white text-xl font-semibold mb-2">3D Forest Environment</p>
                    <p className="text-white/80 text-sm">VR/Three.js Scene Placeholder</p>
                    {isExploring && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4"
                      >
                        <Sparkles className="text-yellow-300 mx-auto" size={48} />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Floating Plants */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute bottom-20 left-20 text-6xl"
                >
                  🌿
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute top-20 right-20 text-5xl"
                >
                  🍀
                </motion.div>
              </div>

              {/* Control Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsExploring(!isExploring)}
                  className="flex-1 px-6 py-3 bg-white/90 backdrop-blur-sm text-gray-900 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-white transition-all"
                >
                  <Play size={20} />
                  {isExploring ? 'Pause Exploration' : 'Start Exploration'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-green/90 backdrop-blur-sm text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green transition-all"
                >
                  <Target size={20} />
                  My Missions
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Side Panel - Progress */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Forest Health */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green/20 rounded-xl flex items-center justify-center">
                  <TreePine className="text-green" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Forest Health</h3>
                  <p className="text-2xl font-bold text-green">{stats.forestHealth}%</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${stats.forestHealth}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-green to-green-dark h-3 rounded-full"
                />
              </div>
            </div>

            {/* Species Unlocked */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center">
                  <Bird className="text-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Species Unlocked</h3>
                  <p className="text-2xl font-bold text-blue">{stats.speciesUnlocked}</p>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {[...Array(stats.speciesUnlocked)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="text-2xl"
                  >
                    🐦
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Missions Completed */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-yellow-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Missions</h3>
                  <p className="text-2xl font-bold text-yellow-500">{stats.missionsCompleted}/10</p>
                </div>
              </div>
              <div className="space-y-3">
                {missions.map((mission) => (
                  <div key={mission.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${mission.completed ? 'text-green' : 'text-gray-600 dark:text-gray-300'}`}>
                        {mission.completed && <CheckCircle className="inline mr-1" size={16} />}
                        {mission.title}
                      </span>
                      <span className="text-xs text-gray-500">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${mission.progress}%` }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className={`h-2 rounded-full ${mission.completed ? 'bg-green' : 'bg-blue'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VRForestTrail;

