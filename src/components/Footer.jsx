import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = ({ setActivePage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hem Debt Consultants Pvt Ltd.</h3>
            <p className="text-gray-400 mb-4">
              A Risk Management Team
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/hemgroup_" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/hem-groups/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><span onClick={() => { setActivePage('home'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</span></li>
              <li><span onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</span></li>
              <li><span onClick={() => { setActivePage('service'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</span></li>
              <li><span onClick={() => { setActivePage('faq'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">FAQ's</span></li>
              <li><span onClick={() => { setActivePage('client'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">client</span></li>
              <li><span onClick={() => { setActivePage('teams'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Teams</span></li>
              <li><span onClick={() => { setActivePage('Privacy'); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy & Policy</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <span className="text-gray-400">Head Office: <br />
                  Flat No. 201, 2nd Floor, Indira Chambers, 1549-B, Sadashiv Peth, Opp. Maharashtra Mandal, Tilak Road, Pune - 411030.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gray-400 mt-1" />
                <span className="text-gray-400">
                  Regional Office: <br />
                  Flat no. 6. Rugved CHS Ltd. Landmark Near Kirti college, Veer Savarkar Marg. Prabhadevi, Mumbai Pincode : 400028</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-400" />
                <span className="text-gray-400">+91 9028402097 <br />
                  +91 84840 58582</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-400">support@hemgroups.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Hem Debt Consultants Pvt Ltd. All rights reserved.
            </p>
            {/* <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;