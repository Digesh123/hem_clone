import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BASE_URL } from '../config';

const Navbar = ({ setActivePage, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileDropdown = () => setIsMobileDropdownOpen(!isMobileDropdownOpen);

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { title: 'Home', value: 'home' },
    { title: 'About Us', value: 'about' },
    {
      title: 'Services', value: 'service', sub: {
        title: 'Download Profile', href: 'https://digesh123.github.io/hem_clone/dummy.pdf'
      }
    },
    { title: 'Our Team', value: 'teams' },
    { title: 'Our Clients', value: 'client' },
    { title: 'Collection in Dubai', value: 'clientDubai' },
    { title: 'Collection in India', value: 'clientIndia' },
    { title: "FAQ", value: 'faq' }
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
        <div className="mx-auto px-4 md:px-12 transition-all duration-300 max-w-full">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex-shrink-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} onClick={() => window.location.reload()}>
              <img src={BASE_URL + "/logo/logo.png"} alt="Logo" className="h-8 md:h-10 w-auto" />
            </motion.div>

            <motion.nav className="hidden md:flex items-center space-x-1" initial="hidden" animate="visible">
              {navItems.map((page) => (
                <div key={page.value} className="relative group">
                  <motion.button onClick={() => handleNavClick(page.value)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    className={`cursor-pointer relative px-4 py-2 capitalize font-medium text-sm tracking-wide ${activePage === page.value ? 'text-orange-600' : 'text-orange-700 hover:text-orange-600'}`}>
                    {page.title}
                    {page.sub && <IoIosArrowDown className="inline ml-1" size={12} />}
                    {activePage === page.value && (
                      <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-600 rounded-full mx-2" layoutId="activeTab" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                    )}
                  </motion.button>

                  {page.sub && (
                    <div className="absolute left-0 mt-1 bg-white border border-orange-200 rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-10">
                      <a href={page.sub.href} download className="block px-4 py-2 text-sm text-orange-700 hover:bg-orange-100">{page.sub.title}</a>
                    </div>
                  )}
                </div>
              ))}
            </motion.nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button className="px-5 py-2 bg-orange-600 text-white rounded-full font-medium text-sm cursor-pointer" whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(59, 130, 246, 0.4)" }} whileTap={{ scale: 0.95 }} onClick={() => handleNavClick('contact')}>
                Contact Us
              </motion.button>
            </div>

            <div className="flex md:hidden">
              <motion.button className="p-2 rounded-md hover:bg-orange-100 active:bg-orange-200 transition-colors focus:outline-none" whileTap={{ scale: 0.9 }} aria-label="Toggle menu">
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} onClick={toggleMenu}>
                      <HiX size={20} className="text-orange-800" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }} onClick={toggleMenu}>
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
          <motion.div className="bg-white shadow-lg md:hidden overflow-hidden z-40" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}>
            <motion.nav className="flex flex-col divide-y divide-orange-100">
              {navItems.map((page) => (
                <div key={page.value}>
                  <div className="flex justify-between items-center">
                    <motion.button onClick={() => handleNavClick(page.value)} className={`py-3 px-4 w-full text-left capitalize font-medium transition-colors ${activePage === page.value ? 'bg-orange-50 text-orange-600' : 'text-orange-800 hover:bg-orange-50 active:bg-orange-100'}`}>
                      {page.title}
                    </motion.button>
                    {page.sub && (
                      <motion.button onClick={toggleMobileDropdown} className="px-4">
                        {isMobileDropdownOpen ? <IoIosArrowUp size={18} /> : <IoIosArrowDown size={18} />}
                      </motion.button>
                    )}
                  </div>
                  {page.sub && isMobileDropdownOpen && (
                    <a href={page.sub.href} download className="block px-8 py-2 text-sm text-orange-700 hover:bg-orange-100">
                      {page.sub.title}
                    </a>
                  )}
                </div>
              ))}
              <motion.div className="py-3 px-4">
                <motion.button className="w-full cursor-pointer py-2 bg-orange-600 text-white rounded-md font-medium text-sm hover:bg-orange-700 active:bg-orange-800 transition-colors" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleNavClick('contact')}>
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
