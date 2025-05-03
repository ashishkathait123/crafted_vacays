'use client';

import React, { useEffect, useState } from 'react';
import { useDestination } from '../../destinations/DestinationContext';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

interface Destination {
  name: string;
  image: string;
  url: string;
}

interface DestinationDetailsProps {
  parentName: string; // Removed default value from interface
}


// Animation presets
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Utility: slugify names for URLs
const slugify = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const DestinationDetails: React.FC<DestinationDetailsProps> = ({ parentName }) => {
  const { setDestinationName } = useDestination();
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setDestinationName(parentName);
    fetchDestinationData();
  }, [parentName]);

  const fetchDestinationData = async () => {
    try {
      let slug = '';
      const name = parentName.toLowerCase();

      if (name === 'india') slug = 'destination-list-2';
      else if (name === 'neighbouring-countries') slug = 'neighboring';
      else if (name === 'abroad') slug = 'destination-list';
      else {
        setLoading(false);
        return;
      }

      const res = await fetch(`https://craftedvacays.com/wp-json/wp/v2/pages?slug=${slug}`);
      const data = await res.json();
      const html = data?.[0]?.content?.rendered || '';

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const items = Array.from(doc.querySelectorAll('.location-item'));

      const extractedDestinations: Destination[] = items.map((el) => ({
        name: el.querySelector('.title-tours')?.textContent?.trim() || '',
        image: el.querySelector('img')?.getAttribute('src') || '',
        url: el.querySelector('a')?.getAttribute('href') || '',
      }));

      setDestinations(extractedDestinations);
    } catch (error) {
      console.error('Error fetching destination data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-16">Loading destination...</div>;

  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-gray-800 dark:text-white">
      {/* Title */}
      <motion.div variants={fadeInUp} className="py-8 px-4 md:px-16">
        <h1 className="text-4xl font-bold mb-4">Explore Destinations in {parentName}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Find curated experiences and locations within {parentName}.
        </p>
      </motion.div>

      {/* Destination Cards */}
      <motion.section variants={fadeInUp} className="py-10 px-4 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Destinations in {parentName}</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
         {destinations.map((dest, idx) => {
  // Extract slug from destination URL (e.g., https://craftedvacays.com/ba_locations/andaman/)
  const slugFromUrl = (url: string) => {
    const parts = url.split('/').filter(Boolean); // remove empty strings
    return parts[parts.length - 1]; // get the last non-empty part
  };

  const slug = slugFromUrl(dest.url);

  return (
    <motion.div
    key={idx}
    variants={fadeInUp}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.98 }}
    className="relative group h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-3xl overflow-hidden shadow-lg"
  >
    <Link
  href={{
    pathname:`/firstview/${slug}`,
    query: { destination: slug } // pass the slug as a query parameter
  }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
      <div className="absolute inset-0">
        <img
          src={dest.image }
          alt={dest.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition duration-500" />
      </div>
      <div className="relative z-10 h-full flex items-end p-6">
        <h3 className="text-2xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300">
          {dest.name}
        </h3>
      </div>
    </Link>
  </motion.div>
  
  
  );
})}

        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default DestinationDetails;
