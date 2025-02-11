import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from './Logo';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Create smooth floating effect based on scroll
  const navY = useTransform(scrollY, [0, 100], [0, -5]);
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);

  return (
    <motion.nav 
      style={{ y: navY, opacity: navOpacity }}
      className="fixed w-full bg-beige-50/40 backdrop-blur-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24">
          <motion.a 
            href="#"
            className="flex items-center text-navy-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Logo />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex space-x-12">
              <motion.a 
                href="#services" 
                className="text-navy-800 hover:text-navy-600 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Services
              </motion.a>
              <motion.a 
                href="#packages" 
                className="text-navy-800 hover:text-navy-600 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Packages
              </motion.a>
              <motion.a 
                href="#process" 
                className="text-navy-800 hover:text-navy-600 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Process
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-navy-800 hover:text-navy-600 transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                About
              </motion.a>
            </div>
            <motion.a 
              href="#contact" 
              className="px-6 py-2.5 bg-navy-800 text-white rounded-full hover:bg-navy-700 transition-colors"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-navy-800" />
              ) : (
                <Menu className="h-6 w-6 text-navy-800" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-beige-50/40 backdrop-blur-md border-t border-beige-200"
        >
          <div className="px-6 py-8 space-y-6">
            <motion.a 
              href="#services" 
              className="block text-lg text-navy-800"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#packages" 
              className="block text-lg text-navy-800"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Packages
            </motion.a>
            <motion.a 
              href="#process" 
              className="block text-lg text-navy-800"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Process
            </motion.a>
            <motion.a 
              href="#about" 
              className="block text-lg text-navy-800"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              About
            </motion.a>
            <div className="pt-6">
              <motion.a 
                href="#contact" 
                className="block w-full px-6 py-3 bg-navy-800 text-white rounded-full hover:bg-navy-700 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}