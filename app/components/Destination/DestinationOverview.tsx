'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaHotel, FaBicycle, FaPlane, FaUtensils } from 'react-icons/fa';
import { tourOverview, tourAmenities, includedItems, excludedItems, itinerary, relatedTours } from '../data/dummyData'; // Dummy data import
import TourPlan from '../tour/TourPlan';
import SidebarFilter from '../Filter/SidebarFilter';
import TourPackage from '../tour/HeroTourSlider';
import GalleryCarousel from '../tour/GalleryCarousel';
import TopRecommendedSection from '@/app/destinations/TopRecommendedSection';
import BeforeYouTravel from '../tour/BeforeYouTravel';
import TourLocation from '../tour/TourLocation';

type TourOverviewProps = {
  slug: string;
};

export const TourOverview = ({ slug }: TourOverviewProps) => {
  const [filters, setFilters] = useState({
    duration: [],
    language: [],
    rating: [],
  });

  const galleryItems = [
    {
      src: "https://craftedvacays.com/wp-content/uploads/2025/03/Tourist-Places-in-Kashmir-feature-compressed.jpg",
      alt: "Tourist Places in Kashmir",
    },
    {
      src: "/images/n1.jpg",
      alt: "Leh Monastery in Ladakh, India",
    },
    {
      src: "https://craftedvacays.com/wp-content/uploads/2025/03/attr_1489.jpg",
      alt: "Scenic view in Kashmir",
    },
    {
      src: "https://craftedvacays.com/wp-content/uploads/2025/03/Arrang-Kel-Best-Places-To-Visit-in-Azad-Kashmir.jpg",
      alt: "Arrang Kel, Azad Kashmir",
    },
  ];

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  // Use dummy data directly here for now
  const currentTourOverview = tourOverview; // This could be filtered by `slug` later
  const currentTourAmenities = tourAmenities; // You can also filter amenities by slug or just use dummy data

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Gallery Banner Section */}
      <section className="py-0">
        <GalleryCarousel galleryItems={galleryItems} />
      </section>

      {/* Tour Overview Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 animate__animated animate__fadeIn">{currentTourOverview.title}</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-1s">
              <Image
                src={currentTourOverview.imageUrl}
                alt="Tour Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105 rounded-lg"
              />
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-2s">
              <p className="text-lg mb-4 leading-relaxed">{currentTourOverview.description}</p>
              <a
                href="#"
                className="inline-block text-primary font-semibold text-lg mt-4 transition-transform duration-300 hover:scale-105 hover:underline"
              >
                {currentTourOverview.buttonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Amenities + Sidebar + Packages */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold text-center mb-8 animate__animated animate__fadeIn">{'Tour Amenities'}</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate__animated animate__fadeIn animate__delay-5s">
            {currentTourAmenities.map((amenity, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:scale-105 transition-transform">
                {amenity.icon === 'hotel' && <FaHotel className="text-4xl mb-2 text-primary" />}
                {amenity.icon === 'bicycle' && <FaBicycle className="text-4xl mb-2 text-primary" />}
                {amenity.icon === 'plane' && <FaPlane className="text-4xl mb-2 text-primary" />}
                {amenity.icon === 'utensils' && <FaUtensils className="text-4xl mb-2 text-primary" />}
                <p className="font-semibold text-lg">{amenity.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / Excluded Section */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between gap-12">
            <div className="animate__animated animate__fadeIn animate__delay-6s">
              <h4 className="text-xl font-semibold mb-4">What's Included</h4>
              <ul className="list-disc ml-5">
                {includedItems.map((item, index) => (
                  <li key={index} className="text-lg mb-2">{item}</li>
                ))}
              </ul>
            </div>
            <div className="animate__animated animate__fadeIn animate__delay-7s">
              <h4 className="text-xl font-semibold mb-4">What's Excluded</h4>
              <ul className="list-disc ml-5">
                {excludedItems.map((item, index) => (
                  <li key={index} className="text-lg mb-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Plan */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8 animate__animated animate__fadeIn">{'Tour Plan'}</h2>
          <div className="animate__animated animate__fadeIn animate__delay-8s">
            <TourPlan />
          </div>
          <div className="mt-8">
            <BeforeYouTravel />
          </div>
        </div>
      </section>

      {/* Tour Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <TourLocation latitude={7.8804} longitude={98.3923} />
        </div>
      </section>

      {/* Top Recommended Section */}
      <section className="py-12">
        <TourPackage filters={filters} />
        <div className="container mx-auto px-4">
          {/* <TopRecommendedSection /> */}
        </div>
      </section>
    </div>
  );
};
