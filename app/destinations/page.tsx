'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import TravelExperienceSection from '../components/TravelExperience/TravelExperience';

const AllDestinations = () => {
  const [destinations, setDestinations] = useState<any[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getData = async () => {
      const { fetchDestinationsFromWP } = await import('@/app/lib/fetchDestination');
      const data = await fetchDestinationsFromWP();
      console.log('Fetched Destinations:', data);

      setDestinations(data);
      setCurrentImages(data.map((d) => d.images?.[0] || '/images/n1.jpg'));
    };
    
    getData();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) =>
        prevImages.map((img, i) => {
          const images = destinations[i]?.images || ['/images/d3.jpg'];
          const currentIndex = images.indexOf(img);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [destinations]);

  const filteredDestinations = destinations.filter((dest) =>
    dest.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Breadcrumb Section */}
      <div
        className="bg-cover bg-center py-20 text-white dark:text-white relative"
        style={{ backgroundImage: 'url(/images/d8.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-0" />
        <div className="relative z-10 container mx-auto text-center">
          <h3 className="text-4xl font-bold">Destination</h3>
          <div className="mt-4">
            <span>
              <Link href="/" className="underline hover:text-orange-500">
                Home
              </Link>
            </span>
            <span className="mx-2">//</span>
            <span>Destination</span>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="container mx-auto mt-10 px-4">
        <div className="max-w-md mx-auto">
          <input
            type="search"
            placeholder="Search for location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDestinations.map((dest, i) => (
  <div
    key={dest.id || `${dest.slug || dest.title}-${i}`}
    className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center transition-transform duration-300 hover:scale-105"
    style={{
      backgroundImage: `url(${currentImages[i] || '/images/placeholder.jpg'})`,
      transition: 'background-image 1s ease-in-out',
    }}
  >
                <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-opacity" />
                <span className="absolute top-3 left-3 z-10 bg-orange-500 text-white px-3 py-1 text-sm rounded">
                  {dest.tours || 0} Tours
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white">
                  <h3 className="text-xl font-bold">
                    <Link href={`/destinations/${dest.slug || dest.title.toLowerCase()}`}>
                      {dest.title}
                    </Link>
                  </h3>
                  <p className="text-sm">{dest.departures || 0} Departures</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <TravelExperienceSection />
    </div>
  );
};

export default AllDestinations;
