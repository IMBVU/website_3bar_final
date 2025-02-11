import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export function Packages() {
  return (
    <section id="packages" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-6">
            Our Packages
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-dark-700">
            Choose the perfect package for your event, each crafted to deliver an exceptional experience
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all ${
                pkg.recommended ? 'ring-2 ring-dark-900' : ''
              }`}
            >
              {pkg.recommended && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 bg-dark-900 text-white px-4 py-1 rounded-full text-sm"
                >
                  Recommended
                </motion.div>
              )}
              <motion.img 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                src={pkg.image} 
                alt={pkg.title} 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-2">{pkg.title}</h3>
                <p className="text-3xl font-light mb-4">{pkg.price}</p>
                <p className="text-dark-700 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-dark-900" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  className="relative overflow-hidden rounded-full"
                >
                  <Link
                    to={`/packages/${pkg.id}`}
                    className="relative block w-full text-center px-6 py-3 bg-dark-900 text-white rounded-full transition-colors z-10 overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-navy-800"
                      initial={{ x: '-100%' }}
                      variants={{
                        hover: { x: 0 },
                        initial: { x: '-100%' }
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="relative z-10 flex items-center justify-center gap-2"
                      variants={{
                        hover: { x: 0 },
                        initial: { x: 0 }
                      }}
                    >
                      <span>Expand</span>
                      <motion.div
                        variants={{
                          hover: { x: 5, opacity: 1 },
                          initial: { x: -20, opacity: 0 }
                        }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}