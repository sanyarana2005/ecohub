import { motion } from 'framer-motion';
import { MapPin, Phone, Users, AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

const LocalLifeline = () => {
  const alertLevels = [
    {
      type: 'high',
      label: 'High Risk',
      color: 'red',
      bgColor: 'bg-red-500',
      bgLight: 'bg-red-50',
      bgDark: 'bg-red-900/20',
      borderLight: 'border-red-200',
      borderDark: 'border-red-800',
      textColor: 'text-red-600',
      textDark: 'text-red-400',
      textLabel: 'text-red-900',
      textLabelDark: 'text-red-100',
      textDesc: 'text-red-700',
      textDescDark: 'text-red-300',
      icon: <AlertTriangle size={24} />,
      description: 'Immediate action required',
    },
    {
      type: 'moderate',
      label: 'Moderate Risk',
      color: 'yellow',
      bgColor: 'bg-yellow-500',
      bgLight: 'bg-yellow-50',
      bgDark: 'bg-yellow-900/20',
      borderLight: 'border-yellow-200',
      borderDark: 'border-yellow-800',
      textColor: 'text-yellow-600',
      textDark: 'text-yellow-400',
      textLabel: 'text-yellow-900',
      textLabelDark: 'text-yellow-100',
      textDesc: 'text-yellow-700',
      textDescDark: 'text-yellow-300',
      icon: <AlertCircle size={24} />,
      description: 'Stay alert and prepared',
    },
    {
      type: 'safe',
      label: 'Safe Zone',
      color: 'green',
      bgColor: 'bg-green-500',
      bgLight: 'bg-green-50',
      bgDark: 'bg-green-900/20',
      borderLight: 'border-green-200',
      borderDark: 'border-green-800',
      textColor: 'text-green-600',
      textDark: 'text-green-400',
      textLabel: 'text-green-900',
      textLabelDark: 'text-green-100',
      textDesc: 'text-green-700',
      textDescDark: 'text-green-300',
      icon: <CheckCircle size={24} />,
      description: 'Area is currently safe',
    },
  ];

  const infoCards = [
    {
      title: 'Nearest Shelter',
      icon: <MapPin size={24} />,
      content: 'Community Center - 2.3 miles',
      subtext: '123 Main Street, Open 24/7',
      color: 'from-blue to-green',
    },
    {
      title: 'Emergency Contact',
      icon: <Phone size={24} />,
      content: '911 or Local Emergency',
      subtext: 'Available 24/7',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'Community Volunteers',
      icon: <Users size={24} />,
      content: '45 Active Volunteers',
      subtext: 'Ready to assist',
      color: 'from-green to-green-dark',
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
            Stay Safe.{' '}
            <span className="bg-gradient-to-r from-green to-blue bg-clip-text text-transparent">
              Stay Prepared.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find nearby safe zones, shelters, and updates during climate emergencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden h-[600px] relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                {/* Mock Map Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-green mx-auto mb-4" size={64} />
                    <p className="text-gray-600 dark:text-gray-400 text-lg font-semibold">
                      Interactive Map
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">
                      Safe zones and shelters marked
                    </p>
                  </div>
                </div>

                {/* Alert Markers */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute top-20 left-20"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-4 h-4 bg-green rounded-full"
                    />
                    <div className="absolute inset-0 w-4 h-4 bg-green rounded-full animate-ping opacity-75" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute bottom-32 right-24"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="w-4 h-4 bg-yellow-500 rounded-full"
                    />
                    <div className="absolute inset-0 w-4 h-4 bg-yellow-500 rounded-full animate-ping opacity-75" />
                  </div>
                </motion.div>
              </div>

              {/* Map Controls Overlay */}
              <div className="absolute top-4 right-4 flex gap-2">
                {alertLevels.map((alert, index) => (
                  <motion.div
                    key={alert.type}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className={`${alert.bgColor} bg-opacity-90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-lg`}
                  >
                    {alert.icon}
                    {alert.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Panel - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-4"
          >
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-lg mb-1">{card.content}</p>
                    <p className="text-white/80 text-sm">{card.subtext}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Alert Status Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Current Alerts
              </h3>
              <div className="space-y-3">
                {alertLevels.map((alert) => {
                  const getAlertClasses = (type) => {
                    const classes = {
                      high: {
                        container: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
                        icon: 'text-red-600 dark:text-red-400',
                        label: 'text-red-900 dark:text-red-100',
                        desc: 'text-red-700 dark:text-red-300',
                      },
                      moderate: {
                        container: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
                        icon: 'text-yellow-600 dark:text-yellow-400',
                        label: 'text-yellow-900 dark:text-yellow-100',
                        desc: 'text-yellow-700 dark:text-yellow-300',
                      },
                      safe: {
                        container: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                        icon: 'text-green-600 dark:text-green-400',
                        label: 'text-green-900 dark:text-green-100',
                        desc: 'text-green-700 dark:text-green-300',
                      },
                    };
                    return classes[type];
                  };
                  const alertClasses = getAlertClasses(alert.type);
                  
                  return (
                    <motion.div
                      key={alert.type}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 ${alertClasses.container}`}
                    >
                      <div className={alertClasses.icon}>
                        {alert.icon}
                      </div>
                      <div>
                        <p className={`font-semibold ${alertClasses.label}`}>
                          {alert.label}
                        </p>
                        <p className={`text-xs ${alertClasses.desc}`}>
                          {alert.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Weather Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Weather Conditions
              </h3>
              <div className="flex gap-4 justify-center">
                {['☀️', '🌧️', '🌪️', '❄️'].map((icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut",
                    }}
                    className="text-4xl"
                  >
                    {icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LocalLifeline;
