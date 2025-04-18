import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiMenuAlt4, HiX, HiChevronDown } from 'react-icons/hi';
import { BASE_URL } from '../config';

const Navbar = ({ setActivePage, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdownMobile, setShowServicesDropdownMobile] = useState(false);
  const [showServicesDropdownDesktop, setShowServicesDropdownDesktop] = useState(false);

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
    { title: 'Services', value: 'service' },
    { title: 'Our Team', value: 'teams' },
    { title: 'Our Clients', value: 'client' },
    { title: 'Collection in Dubai', value: 'clientDubai' },
    { title: 'Collection in India', value: 'clientIndia' },
    { title: "FAQ", value: 'faq' },
  ];

  return (
    <>
      <div className="bg-orange-800 text-white py-2">
        <div className="flex justify-between px-4 items-center">
          <div className="flex space-x-4">
            {[{ Icon: FaLinkedin, link: "https://www.linkedin.com/company/hem-groups/" }, { Icon: FaInstagram, link: "https://www.instagram.com/hemgroup_" }].map(({ Icon, link }, i) => (
              <motion.a key={i} href={link} target='_blank' className="hover:text-orange-400 transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
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
            <motion.div className="flex-shrink-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} onClick={() => window.location.reload()}>
              <img src={BASE_URL + "/logo/logo.png"} alt="Logo" className="h-8 md:h-10 w-auto" />
            </motion.div>

            <motion.nav className="hidden md:flex items-center space-x-1" initial="hidden" animate="visible">
              {navItems.map((page) => (
                page.value === 'service' ? (
                  <div key={page.value} className="relative group">
                    <motion.button
                      onClick={() => handleNavClick(page.value)}
                      className={`cursor-pointer relative px-4 py-2 capitalize font-medium text-sm tracking-wide ${activePage === page.value ? 'text-orange-600' : 'text-orange-700 hover:text-orange-600'}`}
                    >
                      {page.title}
                    </motion.button>
                    <div className="absolute right-0 top-full mt-1 hidden group-hover:block">
                      <a href="/dummy.pdf" download className="block bg-white text-orange-800 hover:bg-orange-100 px-4 py-2 text-sm rounded shadow">
                        Download Profile
                      </a>
                    </div>
                  </div>
                ) : (
                  <motion.button
                    key={page.value}
                    onClick={() => handleNavClick(page.value)}
                    className={`cursor-pointer relative px-4 py-2 capitalize font-medium text-sm tracking-wide ${activePage === page.value ? 'text-orange-600' : 'text-orange-700 hover:text-orange-600'}`}
                  >
                    {page.title}
                  </motion.button>
                )
              ))}
            </motion.nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium text-sm cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick('contact')}
              >
                Contact Us
              </motion.button>
            </div>

            <div className="flex md:hidden">
              <motion.button className="p-2 rounded-md hover:bg-orange-100 active:bg-orange-200 transition-colors focus:outline-none" whileTap={{ scale: 0.9 }} aria-label="Toggle menu" onClick={toggleMenu}>
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <HiX size={20} className="text-orange-800" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <HiMenuAlt4 size={20} className="text-orange-800" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="bg-white shadow-lg md:hidden overflow-hidden z-40" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            <motion.nav className="flex flex-col divide-y divide-orange-100">
              {navItems.map((page) => (
                page.value === 'service' ? (
                  <div key={page.value}>
                    <motion.button
                      onClick={() => setShowServicesDropdownMobile(!showServicesDropdownMobile)}
                      className={`py-3 px-4 text-left capitalize font-medium flex justify-between items-center ${activePage === page.value ? 'bg-orange-50 text-orange-600' : 'text-orange-800 hover:bg-orange-50 active:bg-orange-100'}`}
                    >
                      {page.title} <HiChevronDown className={`transition-transform ${showServicesDropdownMobile ? 'rotate-180' : ''}`} />
                    </motion.button>
                    <AnimatePresence>
                      {showServicesDropdownMobile && (
                        <motion.a
                          href="/dummy.pdf"
                          download
                          className="block px-6 py-2 text-sm text-orange-800 hover:bg-orange-50"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          Download Profile
                        </motion.a>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.button
                    key={page.value}
                    onClick={() => handleNavClick(page.value)}
                    className={`py-3 px-4 text-left capitalize font-medium transition-colors ${activePage === page.value ? 'bg-orange-50 text-orange-600' : 'text-orange-800 hover:bg-orange-50 active:bg-orange-100'}`}
                  >
                    {page.title}
                  </motion.button>
                )
              ))}
              <motion.div className="py-3 px-4">
                <motion.button
                  className="w-full cursor-pointer py-2 bg-orange-600 text-white rounded-md font-medium text-sm hover:bg-orange-700 active:bg-orange-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
