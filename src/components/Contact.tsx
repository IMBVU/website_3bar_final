import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'service_wh2tiah',
        'template_ao6szbf',
        formRef.current,
        'ikumLRj8gkLWMGWtL'
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-light mb-6">
            Get in Touch
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-dark-700">
            Ready to create something extraordinary? Let's discuss how we can make your event unforgettable.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-20"
        >
          <motion.div variants={fadeInUp}>
            <div className="space-y-8 mb-12">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <Phone className="h-6 w-6" />
                <span className="text-lg">(678) 667-9002</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <Mail className="h-6 w-6" />
                <span className="text-lg">3benterprise.llc@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <MapPin className="h-6 w-6" />
                <span className="text-lg">Georgia</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <label htmlFor="user_name" className="block text-sm mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-6 py-4 bg-beige-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-900"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="user_email" className="block text-sm mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-6 py-4 bg-beige-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-900"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label htmlFor="message" className="block text-sm mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-6 py-4 bg-beige-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-dark-900"
              ></textarea>
            </motion.div>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-dark-900 text-white rounded-full hover:bg-dark-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}