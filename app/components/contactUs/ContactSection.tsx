'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactSection = () => {
  return (
    <motion.section
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Form */}
          <motion.div
            className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0"
            variants={fadeUpVariant}
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md h-full transition-colors duration-300">
              <h3 className="text-3xl font-bold mb-6 text-primary dark:text-white">
                Get in Touch
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-primary transition"
                ></textarea>
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-green-700 text-white px-6 py-3 rounded transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            className="w-full lg:w-1/2 px-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: '🕒',
                label: 'Hours:',
                content:
                  'Monday - Friday: 8 AM - 5:30 PM\nSaturday - Sunday: Closed',
              },
              {
                icon: '📞',
                label: 'Phone:',
                content: '+1 (234) 567-890',
                link: 'tel:+1234567890',
              },
              {
                icon: '✉️',
                label: 'Email:',
                content: 'contact@example.com',
                link: 'mailto:contact@example.com',
              },
              {
                icon: '📍',
                label: 'Address:',
                content: '123 Example Street, Suite 456\nCity, Country, ZIP',
              },
            ].map((box, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 mb-6"
                variants={fadeUpVariant}
              >
                <div className="text-2xl">{box.icon}</div>
                <div>
                  <span className="block font-semibold text-gray-900 dark:text-white">
                    {box.label}
                  </span>
                  {box.link ? (
                    <a
                      href={box.link}
                      className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-orange-400 transition whitespace-pre-line"
                    >
                      {box.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                      {box.content}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
