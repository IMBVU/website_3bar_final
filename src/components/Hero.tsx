import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-navy-900/60 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="![pexels-cottonbro-4667035.jpg](<https://media-hosting.imagekit.io//ff4d179a608f4267/pexels-cottonbro-4667035.jpg?Expires=1834013573&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=keCl3FIoNSc6kihATafppdxWWp-V7lqvUySKnB-6q04BbNk1KicHKdL7ZLaILsayxO~sK~eWX~BWOO-rd0mxjD0qW9zeXSMwK1yKCH~bPsbqb7sgwoROivDFRFRyR-MO82Q7dXWmkW9gwg8Y45gs~-ZKSq9XNTINoiozB9KY4jHH40T8FYzPfYbVKrddDUXF54Cr9Nj7hvNCIlLhya0Z01iT-P72PSqhPXED1STOlTXyALS1aTDX9x3ARlagJRbW8CVvyU51cGzBUpH0cSpfQaIzum2BmWz3fylhc9ldOWD2t6h0dPyrK1KYpwHYlpKUimRCj630qXbacn7P1iNWsQ__>)" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-white">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="text-lg uppercase tracking-[0.2em] text-white/80 font-inter">Welcome to</span>
            <h1 className="hero-title text-7xl md:text-8xl font-light mt-4 mb-6">
              Exceptional
              <span className="font-medium block mt-2">Bartending</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
              Where artistry meets sophistication in every carefully crafted cocktail
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors text-lg tracking-wide"
            >
              Explore Services
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-navy-900 rounded-full hover:bg-white/90 transition-colors text-lg tracking-wide"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-10 h-10 text-white/80" />
        </motion.div>
      </motion.div>

      {/* Animated Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-900/50 z-10"
      />
    </section>
  );
}
