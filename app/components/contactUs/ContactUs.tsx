'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ContactSection from './ContactSection'; // adjust import if needed

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom },
  }),
};

const ContactUs: React.FC = () => {
  return (
    <div className="it-contact-area pt-32 pb-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={sectionVariant}
          className="w-full max-w-5xl mx-auto"
        >
          <ContactSection />
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.4}
        variants={sectionVariant}
        className="container mx-auto px-4 mt-16"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-100">
          Our Location
        </h3>
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={[28.6139, 77.209]}
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.6139, 77.209]}>
              <Popup>
                Crafted Vacays Office <br /> New Delhi, India
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
