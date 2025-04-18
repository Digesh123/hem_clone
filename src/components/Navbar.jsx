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
      title: 'Services', value: 'service', subItems: [
        { title: 'Download Profile', href: 'https://digesh123.github.io/hem_clone/dummy.pdf' }
      ]
    },
    { title: 'Our Team', value: 'teams' },
    { title: 'Our Clients', value: 'client' },
    { title: 'Collection in Dubai', value: 'clientDubai' },
    { title: 'Collection in India', value: 'clientIndia' },
    { title: 'FAQ', value: 'faq' },
  ];

  return (
    <>
      <div className="bg-orange-800 text-white py-2">
        <div className="flex justify-between px-4 items-center">
          <div className="flex space-x-4">
            {[{ Icon: FaLinkedin, link: "https://www.linkedin.com/company/hem-groups/" }, { Icon: FaInstagram, link: "https://www.instagram.com/hemgroup_" }].map(({ Icon, link }, i) => (
              <motion.a key={i} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
          <span className="text-xs font-medium">Connect with us</span>
        </div>
      </div>

      <header className={`sticky top-0 w-full z-50 ${scrolled ? 'py-2' : 'py-3'} bg-orange-200 shadow-md`}>
        <div className="mx-auto px-4 md:px-12">
          <div className="flex items-center justify-between h-16">
            <motion.div className="flex-shrink-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} onClick={() => window.location.reload()}>
              <img src={BASE_URL + "/logo/logo.png"} alt="Logo" className="h-8 md:h-10 w-auto" />
            </motion.div>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  <button onClick={() => handleNavClick(item.value)} className={`cursor-pointer px-4 py-2 capitalize font-medium text-sm ${activePage === item.value ? 'text-orange-600' : 'text-orange-700 hover:text-orange-600'}`}>
                    {item.title}
                  </button>
                  {item.subItems && (
                    <div className="absolute left-0 top-full bg-white shadow-md rounded-md py-1 hidden group-hover:block z-50">
                      {item.subItems.map((sub, subIdx) => (
                        <a key={subIdx} href={sub.href} download target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-orange-700 hover:bg-orange-100">
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <motion.button className="ml-4 px-5 py-2 bg-orange-600 text-white rounded-full font-medium text-sm" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleNavClick('contact')}>
                Contact Us
              </motion.button>
            </nav>

            <div className="flex md:hidden">
              <motion.button className="p-2" whileTap={{ scale: 0.9 }} aria-label="Toggle menu" onClick={toggleMenu}>
                {isMenuOpen ? <HiX size={24} className="text-orange-800" /> : <HiMenuAlt4 size={24} className="text-orange-800" />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div key="mobileMenu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-orange-100 shadow-lg">
            <ul className="flex flex-col px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <button onClick={() => handleNavClick(item.value)} className="w-full text-left text-orange-800 font-medium py-2">
                    {item.title}
                  </button>
                  {item.subItems && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a href={sub.href} download target="_blank" rel="noopener noreferrer" className="block text-sm text-orange-700 hover:text-orange-900">
                            {sub.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <button onClick={() => { handleNavClick('contact'); setIsMenuOpen(false); }} className="mt-2 px-5 py-2 bg-orange-600 text-white rounded-full font-medium w-full">
                  Contact Us
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
