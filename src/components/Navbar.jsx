import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BASE_URL } from '../config';

const Navbar = ({ setActivePage, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { title: 'Home', value: 'home' },
    { title: 'About Us', value: 'about' },
    { 
      title: 'Services', 
      value: 'service', 
      subItems: [
        { title: 'Download Profile', type: 'download', href: 'https://digesh123.github.io/hem_clone/dummy.pdf' }
      ]
    },
    { title: 'Our Team', value: 'teams' },
    { title: 'Our Clients', value: 'client' },
    { title: 'Collection in Dubai', value: 'clientDubai' },
    { title: 'Collection in India', value: 'clientIndia' },
    { title: "FAQ", value: 'faq' },
  ];

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <>
      <div className="bg-orange-800 text-white py-2">
        <div className="flex justify-between px-4 items-center">
          <div className="flex space-x-4">
            {[
              { Icon: FaLinkedin, link: "https://www.linkedin.com/company/hem-groups/" },
              { Icon: FaInstagram, link: "https://www.instagram.com/hemgroup_" },
            ].map(({ Icon, link }, i) => (
              <motion.a
                key={i}
                href={link}
                target='_blank'
                className="hover:text-orange-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
          <span className="text-xs font-medium">Connect with us</span>
        </div>
      </div>

      <header className={`sticky top-0 w-full z-50 ${scrolled ? 'py-2' : 'py-3'} bg-orange-200 shadow-md`}>
        <div className={`mx-auto px-4 md:px-12 transition-all duration-300 ${scrolled ? 'max-w-[90%]' : 'max-w-full'}`}>
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => { window.location.reload() }}
            >
              <img src={BASE_URL + "/logo/logo.png"} alt="Logo" className="h-8 md:h-10 w-auto" />
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              className="hidden md:flex items-center space-x-1"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((page) => (
                <motion.div
                  key={page.value}
                  className="relative group"
                  variants={navItemVariants}
                >
                  <button
                    onClick={() => handleNavClick(page.value)}
                    className={`cursor-pointer relative px-4 py-2 capitalize font-medium text-sm tracking-wide ${
                      activePage === page.value
                        ? 'text-orange-600'
                        : 'text-orange-700 hover:text-orange-600'
                    }`}
                  >
                    {page.title}
                    {activePage === page.value && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600 rounded-full mx-2"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>

                  {/* Submenu for Services */}
                  {page.subItems && (
                    <div className="absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-md p-2 top-full mt-1 z-10">
                      {page.subItems.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          download
                          target="_blank"
                          rel="noopener noreferrer"
                          className="whitespace-nowrap px-4 py-2 text-sm text-orange-700 hover:text-orange-800 hover:bg-orange-100 rounded"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.nav>

            {/* Right Side Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium text-sm cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { handleNavClick('contact') }}
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <motion.button
                className="p-2 rounded-md hover:bg-orange-100 active:bg-orange-200 transition-colors focus:outline-none"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
                onClick={toggleMenu}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX size={20} className="text-orange-800" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenuAlt4 size={20} className="text-orange-800" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Nav Dropdown – Optional, let me know if you want this to have the same submenu behavior */}
    </>
  );
};

export default Navbar;
