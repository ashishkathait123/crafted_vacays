'use client';
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Destination {
  name: string;
  images: string[];
  link: string;
  tourCount: number;
}

interface DestinationListProps {
  destinations?: Destination[];
}

const DestinationList: React.FC<DestinationListProps> = ({ destinations = [] }) => {
  if (!destinations.length) return null;

  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Explore Other Destinations
        </h2>

        {/* Mobile View: Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.2}
            loop={true}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Pagination]}
          >
            {destinations.map((destination, idx) => (
              <SwiperSlide key={idx}>
                <Link href={destination.link || `/destination/${destination.name.toLowerCase()}`}>
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className="relative h-64">
                      <img
                        src={destination.images?.[0] || '/placeholder.jpg'}
                        alt={destination.name}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                        <h3 className="text-xl font-semibold">{destination.name}</h3>
                        <p className="text-sm">{destination.tourCount} Tours</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination, idx) => (
            <Link key={idx} href={destination.link || `/destination/${destination.name.toLowerCase()}`}>
              <div className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative h-64">
                  <img
                    src={destination.images?.[0] || '/placeholder.jpg'}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-4 text-white z-10">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <p className="text-sm">{destination.tourCount} Tours</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationList;
