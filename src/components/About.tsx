import React from 'react';
import { Award, Clock, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import aboutVideo from '../components/Videos/IMG_5455.mp4'

const stats = [
  {
    icon: Users2,
    value: "1000+",
    label: "Served"
  },
  {
    icon: Clock,
    value: "10+",
    label: "Years Bar Experience"
  },
  {
    icon: Award,
    value: "100%",
    label: "Satisfaction Rate"
  }
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-20"
        >
          <motion.div variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-8">Our Story</motion.h2>
            <div className="space-y-6 text-lg text-dark-700">
              <motion.p variants={fadeInUp}>
                EST 2024, 3BAR has redefined private event bartending through our commitment to excellence and innovation in bartending.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Our journey began with a simple vision: to elevate every celebration through exceptional beverage service and unforgettable experiences.
              </motion.p>
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-3 gap-8 pt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                  >
                    <stat.icon className="h-8 w-8 text-dark-900 mb-4" />
                    <div className="text-3xl font-medium text-dark-900 mb-2">{stat.value}</div>
                    <div className="text-dark-700">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
             <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm"
            >
              <p className="text-lg font-medium mb-4">
                "The attention to detail and level of service was absolutely exceptional. They made our wedding unforgettable."
              </p>
              <p className="text-dark-700">— Mary & Peter</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
