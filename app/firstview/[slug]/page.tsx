'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DescriptionBox from '../info/DescriptionBox';
import EnquiryBlock from '../info/EnquiryBlock';

const FirstView = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = params.slug as string;
  const destination = searchParams.get('destination');

  const [placeData, setPlaceData] = useState<any>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    if (slug) {
      fetch(`/api/places/${slug}`)
        .then((response) => response.json())
        .then((data) => setPlaceData(data))
        .catch((error) => console.error('Error fetching place data:', error));
    }
  }, [slug]);

  if (!placeData) {
    return <div className="text-center py-20 text-xl font-semibold">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Main Image Section */}
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.img
          src={placeData.imageUrl}
          alt={placeData.name}
          className="rounded-2xl shadow-xl mb-8 w-full object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold mb-4 text-center text-primary">{placeData.name}</h1>
        <p className="text-lg text-gray-700 mb-10 text-center">{placeData.description}</p>
      </motion.div>

      {/* Additional Images in Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {placeData.additionalImages?.map((img: string, index: number) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <img src={img} alt={`Additional ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </motion.div>

      {/* Description Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <DescriptionBox
  title={placeData.title}
  quote={placeData.quote}
  quoteAuthor={placeData.quoteAuthor}
  description={placeData.description}
  extraContent={placeData.extraContent}
/>

      </motion.div>

      {/* Enquiry Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <EnquiryBlock
title={`Make your ${placeData.name} dreams come true!`}
description="Unlock the magic of Thailand! Enquire today and plan your dream vacation."
          buttonText="Send Enquiry"
          buttonLink="https://wa.me/918192812557?text=Hi%20Crafted%20Vacays%2C%20I%20am%20interested%20in%20a%20Thailand%20tour%20package."
          imageSrc="/images/thailand-cta-1.png"
          imageAlt="Thailand promotional"
        />
      </motion.div>

      {/* Location Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Location</h3>
        <motion.div
          className="overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=${placeData.mapEmbedCode}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: '0px', width: '100%', height: '400px' }}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstView;
