import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, Trophy, Award, Plus, Sparkles } from 'lucide-react';

const CommunitySupport = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);

  const groups = [
    { id: 1, name: 'NYC Green Warriors', location: 'New York', members: 245, emoji: '🗽' },
    { id: 2, name: 'Campus Eco Club', location: 'Los Angeles', members: 189, emoji: '🎓' },
    { id: 3, name: 'Bay Area Cleanup', location: 'San Francisco', members: 312, emoji: '🌉' },
    { id: 4, name: 'Seattle Green Team', location: 'Seattle', members: 156, emoji: '☔' },
    { id: 5, name: 'Austin Earth Keepers', location: 'Austin', members: 203, emoji: '🤠' },
    { id: 6, name: 'Boston Eco Hub', location: 'Boston', members: 178, emoji: '🏛️' },
  ];

  const drives = [
    {
      id: 1,
      title: 'Beach Cleanup Drive',
      date: '2024-12-15',
      type: 'cleanup',
      participants: 45,
      location: 'Sunset Beach',
      emoji: '🏖️',
    },
    {
      id: 2,
      title: 'Recycling Awareness Campaign',
      date: '2024-12-20',
      type: 'awareness',
      participants: 32,
      location: 'City Center',
      emoji: '📢',
    },
    {
      id: 3,
      title: 'E-Waste Collection Mission',
      date: '2024-12-25',
      type: 'sorting',
      participants: 28,
      location: 'Tech Park',
      emoji: '🔌',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'EcoHero', xp: 1250, badge: '🥇', avatar: '🦸' },
    { rank: 2, name: 'GreenWarrior', xp: 980, badge: '🥈', avatar: '🛡️' },
    { rank: 3, name: 'PlanetSaver', xp: 850, badge: '🥉', avatar: '🌍' },
    { rank: 4, name: 'EcoChampion', xp: 720, badge: '⭐', avatar: '🌟' },
    { rank: 5, name: 'GreenGuardian', xp: 650, badge: '⭐', avatar: '🌿' },
  ];

  const handleJoinGroup = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups([...joinedGroups, groupId]);
    }
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
            Together for a{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Greener Tomorrow
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join communities, participate in drives, and make a collective impact.
          </p>
        </motion.div>

        {/* Section 1: Join Groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-green" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Join Groups</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{group.emoji}</div>
                  {joinedGroups.includes(group.id) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-green rounded-full p-1"
                    >
                      <Sparkles className="text-white" size={16} />
                    </motion.div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {group.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">{group.location}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  {group.members} members
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleJoinGroup(group.id)}
                  disabled={joinedGroups.includes(group.id)}
                  className={`w-full px-4 py-2 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    joinedGroups.includes(group.id)
                      ? 'bg-green text-white cursor-not-allowed'
                      : 'bg-green/10 text-green hover:bg-green hover:text-white'
                  }`}
                >
                  {joinedGroups.includes(group.id) ? (
                    <>
                      <Award size={18} />
                      Joined
                    </>
                  ) : (
                    <>
                      <Plus size={18} />
                      Join
                    </>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 2: Upcoming Drives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-blue" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Upcoming Drives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drives.map((drive, index) => (
              <motion.div
                key={drive.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">{drive.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {drive.title}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <p>📅 {drive.date}</p>
                  <p>📍 {drive.location}</p>
                  <p>👥 {drive.participants} participants</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-blue text-white rounded-xl font-semibold hover:bg-blue-600 transition-all"
                >
                  Join Drive
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Leaderboard / Members
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="space-y-4">
              {leaderboard.map((member, index) => (
                <motion.div
                  key={member.rank}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{member.badge}</div>
                    <div className="text-4xl">{member.avatar}</div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{member.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Rank #{member.rank}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green">{member.xp} XP</p>
                    <p className="text-xs text-gray-500">Points</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunitySupport;

