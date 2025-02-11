import React from 'react';
import { GlassWater, Users, PartyPopper, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const services = [
  {
    icon: GlassWater,
    title: "Craft Cocktails",
    description: "Bespoke drink menus tailored to your preferences and event theme, crafted with premium spirits and fresh ingredients."
  },
  {
    icon: Users,
    title: "Expert Bartenders",
    description: "Our certified professionals bring years of experience and creativity to every event, ensuring flawless service."
  },
  {
    icon: PartyPopper,
    title: "Full Event Support",
    description: "Comprehensive beverage service including setup, execution, and cleanup, allowing you to focus on your guests."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Available for events of any duration, with customizable packages to match your specific needs."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-6">
            Our Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-dark-700">
            Comprehensive bartending solutions designed to make your event extraordinary
          </motion.p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group p-8 rounded-2xl transition-all hover:bg-beige-50"
            >
              <service.icon className="h-10 w-10 text-dark-900 mb-6" />
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className="text-dark-700 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}