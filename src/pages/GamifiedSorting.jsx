import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Clock, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

const GamifiedSorting = () => {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [selectedItem, setSelectedItem] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [gameActive, setGameActive] = useState(false);

  const items = [
    { id: 1, name: 'Plastic Bottle', type: 'recycle', emoji: '🥤' },
    { id: 2, name: 'Aluminum Can', type: 'recycle', emoji: '🥫' },
    { id: 3, name: 'Newspaper', type: 'recycle', emoji: '📰' },
    { id: 4, name: 'Banana Peel', type: 'trash', emoji: '🍌' },
    { id: 5, name: 'Glass Jar', type: 'recycle', emoji: '🍯' },
    { id: 6, name: 'Old Shirt', type: 'reuse', emoji: '👕' },
    { id: 7, name: 'Battery', type: 'recycle', emoji: '🔋' },
    { id: 8, name: 'Food Scraps', type: 'trash', emoji: '🍎' },
  ];

  const bins = [
    { id: 'recycle', label: 'Recycle', color: 'from-blue to-blue-600', emoji: '♻️' },
    { id: 'reuse', label: 'Reuse', color: 'from-green to-green-dark', emoji: '♻️' },
    { id: 'trash', label: 'Trash', color: 'from-gray-500 to-gray-700', emoji: '🗑️' },
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleBinDrop = (binType) => {
    if (!selectedItem) return;

    const isCorrect = selectedItem.type === binType;
    setFeedback({ correct: isCorrect, item: selectedItem.name });

    if (isCorrect) {
      setScore(score + 10);
    }

    setTimeout(() => {
      setFeedback(null);
      setSelectedItem(null);
    }, 2000);
  };

  const leaderboard = [
    { rank: 1, name: 'EcoHero', score: 1250, badge: '🥇' },
    { rank: 2, name: 'GreenWarrior', score: 980, badge: '🥈' },
    { rank: 3, name: 'PlanetSaver', score: 850, badge: '🥉' },
    { rank: 4, name: 'EcoChampion', score: 720, badge: '⭐' },
    { rank: 5, name: 'GreenGuardian', score: 650, badge: '⭐' },
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
            Play.{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Sort.
            </span>
            {' '}Win.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Master waste sorting through interactive gameplay and climb the leaderboard!
          </p>
        </motion.div>

        {/* Top Bar - Score, Badges, Time */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Trophy className="text-yellow-500" size={24} />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Score</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{score}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-green" size={24} />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Badges</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-blue" size={24} />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{time}s</p>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setGameActive(!gameActive)}
              className="px-6 py-3 bg-green text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-green-dark transition-all"
            >
              <RefreshCw size={20} />
              {gameActive ? 'Reset Game' : 'Start Game'}
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Items to Sort */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Drag items to the correct bin
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleItemClick(item)}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${
                      selectedItem?.id === item.id
                        ? 'bg-green/20 ring-4 ring-green'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="text-4xl text-center mb-2">{item.emoji}</div>
                    <p className="text-xs text-center text-gray-700 dark:text-gray-300">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bins */}
            <div className="grid grid-cols-3 gap-4">
              {bins.map((bin) => (
                <motion.div
                  key={bin.id}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleBinDrop(bin.id)}
                  className={`bg-gradient-to-br ${bin.color} rounded-2xl p-6 text-white shadow-lg cursor-pointer transition-all ${
                    selectedItem ? 'ring-4 ring-yellow-400' : ''
                  }`}
                >
                  <div className="text-5xl text-center mb-3">{bin.emoji}</div>
                  <h3 className="text-xl font-bold text-center">{bin.label}</h3>
                  {selectedItem && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-center mt-2 text-white/80"
                    >
                      Drop {selectedItem.name} here
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="text-yellow-500" size={24} />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Leaderboard</h3>
            </div>
            <div className="space-y-3">
              {leaderboard.map((entry, index) => (
                <motion.div
                  key={entry.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{entry.badge}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{entry.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Rank #{entry.rank}</p>
                    </div>
                  </div>
                  <p className="font-bold text-green">{entry.score}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feedback Messages */}
        <AnimatePresence>
          {feedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 ${
                feedback.correct ? 'bg-green' : 'bg-red-500'
              } text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3`}
            >
              {feedback.correct ? (
                <>
                  <CheckCircle size={32} />
                  <div>
                    <p className="text-xl font-bold">Correct!</p>
                    <p className="text-sm">+10 points</p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle size={32} />
                  <div>
                    <p className="text-xl font-bold">Try Again!</p>
                    <p className="text-sm">Wrong bin</p>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GamifiedSorting;

