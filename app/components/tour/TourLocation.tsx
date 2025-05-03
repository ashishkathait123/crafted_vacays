'use client';
import React from 'react';

interface TourLocationProps {
  latitude: number;
  longitude: number;
}

const TourLocation: React.FC<TourLocationProps> = ({ latitude, longitude }) => {
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`;

  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-white animate__animated animate__fadeIn">
          Tour Location
        </h3>
        <div className="relative w-full h-96 sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <iframe
            src={mapSrc}
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default TourLocation;
