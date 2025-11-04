import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, Search, ChevronDown, Leaf, Sprout, Globe } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { 
      name: 'Resources', 
      path: '/blog-knowledge', 
      hasDropdown: false,
      icon: <Globe size={16} />
    },
    { 
      name: 'Community', 
      path: '/community-support', 
      hasDropdown: false,
      icon: <Sprout size={16} />
    },
    { 
      name: 'Services', 
      path: '#', 
      hasDropdown: true,
      icon: <Sprout size={16} />,
      dropdownItems: [
        { name: 'VR Forest Trail', path: '/vr-forest-trail' },
        { name: 'Gamified Sorting', path: '/gamified-sorting' },
        { name: 'E-Waste Hub', path: '/e-waste-hub' },
      ]
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-sm relative"
      style={{
        borderBottomLeftRadius: '2rem',
        borderBottomRightRadius: '2rem',
        paddingBottom: '1rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo - White Pill Background */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-md"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                {!logoError ? (
                  <img
                    src="/logo.png"
                    alt="Greenify Logo"
                    className="w-8 h-8 object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center">
                    <Leaf className="text-white" size={20} />
                  </div>
                )}
              </div>
              <span className="text-lg font-bold text-gray-900">Greenify</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 flex-1 justify-center">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.path === '#' ? (
                  <div className="flex items-center gap-1 cursor-pointer group px-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-dark dark:hover:text-green transition-colors flex items-center gap-1.5 whitespace-nowrap">
                      {link.icon}
                      {link.name}
                    </span>
                    <ChevronDown className="text-gray-500 group-hover:text-green-dark transition-colors" size={14} />
                  </div>
                ) : (
                  <Link to={link.path} className="flex items-center gap-1.5 group px-1">
                    <motion.span
                      className={`text-sm font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                        location.pathname === link.path
                          ? 'text-green-dark dark:text-green'
                          : 'text-gray-700 dark:text-gray-300 hover:text-green-dark dark:hover:text-green'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {link.icon}
                      {link.name}
                    </motion.span>
                    {link.hasDropdown && (
                      <ChevronDown className="text-gray-500 group-hover:text-green-dark transition-colors" size={14} />
                    )}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-dark dark:bg-green rounded-full"
                      />
                    )}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-2 z-50"
                  >
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-green/10 hover:text-green-dark dark:hover:text-green transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Search & Dark Mode */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer shadow-sm"
            >
              <Search size={16} className="text-gray-600 dark:text-gray-300" />
              <span className="text-xs text-gray-600 dark:text-gray-300">Search</span>
            </motion.div>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 space-y-2"
          >
            {navLinks.map((link) => (
              <div key={link.path}>
                {link.path === '#' ? (
                  <div className="px-4 py-2 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{link.name}</span>
                      <ChevronDown size={16} />
                    </div>
                    {link.dropdownItems && (
                      <div className="ml-4 mt-2 space-y-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-green/10 hover:text-green-dark rounded-lg transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-green/10 text-green-dark'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && <ChevronDown size={16} />}
                  </Link>
                )}
              </div>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/#contact';
              }}
              className="w-full px-4 py-2 bg-green text-white rounded-lg font-semibold text-sm hover:bg-green-dark transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
