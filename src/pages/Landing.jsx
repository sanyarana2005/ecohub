import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Mail, Send, MessageSquare, Phone, MapPin, Gamepad2, Recycle, Users, BookOpen } from 'lucide-react';

const Landing = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const features = [
    { name: 'VR Forest Trail', icon: <Gamepad2 size={24} />, path: '/vr-forest-trail', emoji: '🌲' },
    { name: 'Gamified Sorting', icon: <Gamepad2 size={24} />, path: '/gamified-sorting', emoji: '♻️' },
    { name: 'E-Waste Hub', icon: <Recycle size={24} />, path: '/e-waste-hub', emoji: '🔌' },
    { name: 'Community Support', icon: <Users size={24} />, path: '/community-support', emoji: '🤝' },
    { name: 'Blog & Knowledge', icon: <BookOpen size={24} />, path: '/blog-knowledge', emoji: '📚' },
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
              Empowering Climate Action
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
              Smart Solutions for a Greener Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore, play, and take real action with Greenify — your all in one platform for sustainability. From immersive VR forests and gamified recycling to e-waste tracking and community challenges, Greenify turns everyday eco-actions into an inspiring, interactive experience.
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
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-green-dark dark:bg-green text-white rounded-xl font-semibold text-lg flex items-center gap-2 hover:bg-green-dark/90 dark:hover:bg-green/90 transition-all shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>

          {/* Features Section in Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            id="features"
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Our Features
            </h2>
            <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.a
                  key={feature.name}
                  href={feature.path}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`rounded-2xl p-6 text-center cursor-pointer transition-all shadow-md hover:shadow-xl ${
                    index === 0
                      ? 'bg-green-100 dark:bg-green-900/30'
                      : 'bg-white dark:bg-gray-800'
                  } min-w-[140px] flex-1 max-w-[180px]`}
                >
                  <div className="text-5xl mb-4 flex justify-center">{feature.emoji}</div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{feature.name}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Content Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
            {/* 1️⃣ Stats / Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-blue-100 dark:bg-blue-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                200K+ Eco Warriors Joined
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                Together we're building a resilient, greener planet — one small action at a time.
              </p>
            </motion.div>

            {/* 2️⃣ Green Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-green-100 dark:bg-green-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4 text-center">♻️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Join us in reshaping the future of sustainability.
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                Play, recycle, and grow — every mission in Greenify helps the real world breathe easier.
              </p>
            </motion.div>

            {/* 3️⃣ Visual Forest Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4 text-center">🌳</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                No Future Without Nature.
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                Step into the VR Forest Trail, explore biodiversity, and see how your actions restore ecosystems.
              </p>
            </motion.div>

            {/* 4️⃣ Minimal Icon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-lime-100 dark:bg-lime-900/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4 text-center">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                Innovate for Earth.
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed text-center">
                Empower communities, reduce e-waste, and make climate resilience a shared reality.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Tag and Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-semibold text-gray-900 dark:text-white mb-6">
                About us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark dark:text-green leading-tight">
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
                Greenify transforms climate awareness into action through immersive VR forests, fun recycling games, and e-waste tracking. It connects users with local eco-communities, inspiring small steps that create a smarter, cleaner, and more resilient planet.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature/Accordion Section */}
      <div className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* First Section - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-2xl p-6 md:p-8 bg-green/20 dark:bg-green/10 border-2 border-green/30 shadow-lg"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Small Steps. Greener Future
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Find the property you need with Greenify. From dream homes and modern apartments to commercial properties, Greenify provides the best solutions for sustainable living.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0 w-12 h-12 bg-green-dark dark:bg-green rounded-full flex items-center justify-center text-white"
              >
                <ArrowRight className="rotate-45" size={24} />
              </motion.button>
            </div>
          </motion.div>

          {/* Second Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Boost Results with Advanced Tech
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0 w-10 h-10 text-gray-600 dark:text-gray-400"
              >
                <ArrowRight className="rotate-45" size={24} />
              </motion.button>
            </div>
          </motion.div>

          {/* Third Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="rounded-2xl p-6 md:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Smart Ways to Save Water
              </h3>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                className="flex-shrink-0 w-10 h-10 text-gray-600 dark:text-gray-400"
              >
                <ArrowRight className="rotate-45" size={24} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contact" className="bg-gradient-to-br from-green/10 via-blue/10 to-green/20 dark:from-green-dark/20 dark:via-blue/20 dark:to-green-dark/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green resize-none"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-6 py-4 bg-green-dark dark:bg-green text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-green-dark/90 dark:hover:bg-green/90 transition-all"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>

                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green/10 text-green rounded-xl text-center font-semibold"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">contact@greenify.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-dark/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-green-dark dark:text-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">123 Green Street, Eco City, EC 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
