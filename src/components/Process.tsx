import React from 'react';
import { ClipboardCheck, MessageSquare, Calendar, GlassWater } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We begin with a detailed discussion of your event vision, preferences, and requirements to ensure we understand your needs perfectly."
  },
  {
    icon: ClipboardCheck,
    title: "Custom Planning",
    description: "Our team creates a tailored beverage program, including signature cocktails, wine selections, and service logistics."
  },
  {
    icon: Calendar,
    title: "Event Preparation",
    description: "We handle all the details - from sourcing premium ingredients to coordinating with other vendors and planning setup logistics."
  },
  {
    icon: GlassWater,
    title: "Flawless Execution",
    description: "Our professional team delivers exceptional service on the day, ensuring every drink is perfectly crafted and every guest is attended to."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 px-6 bg-beige-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-6">
            Our Process
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-navy-700">
            From initial consultation to final toast, we ensure a seamless experience
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-1/2 left-0 w-full h-0.5 bg-beige-200 -translate-y-1/2 hidden md:block origin-left"
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Number in top right corner */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-navy-800 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <div className="bg-beige-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="h-8 w-8 text-navy-800" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}