'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { recommendedItems } from '../components/data/dummyData1'; // adjust the path as needed
type RecommendedItem = {
  image: string;
  title: string;
};

type TopRecommendedSectionProps = {
  destination: string;
  recommended?: RecommendedItem[]; // ✅ optional now
};
const TopRecommendedSection: React.FC<TopRecommendedSectionProps> = ({
  destination,
  recommended = recommendedItems,}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [isSwiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <section className="w-full relative bg-gray-100 dark:bg-[#2E3047] py-12 md:py-20 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-start gap-8 px-4 md:px-8 relative z-10">
        {/* Left Info Block */}
        <div className="w-full md:w-1/3 flex flex-col gap-4 z-10">
          <div>
            <h3 className="font-yesteryear text-orange-500 text-2xl md:text-3xl">Top Recommended</h3>
            <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold">
              Must Do Things in {destination}
            </h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
            Uncover diverse cultures, savor local flavors, and wander through stunning landscapes.
          </p>

          {/* Navigation Arrows */}
          <div className="mt-6 flex gap-4">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 dark:text-white text-black flex items-center justify-center shadow-md hover:shadow-lg transition hover:scale-105"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 dark:text-white text-black flex items-center justify-center shadow-md hover:shadow-lg transition hover:scale-105"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </div>

        {/* Swiper + Cards */}
        <div className="w-full md:w-2/3 pl-1 md:pl-6 relative">
          {/* Foggy fade overlays */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-gray-100 dark:from-[#2E3047] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-gray-100 dark:from-[#2E3047] to-transparent z-20 pointer-events-none" />

          {isSwiperReady && (
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4.5 },
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              loop
              speed={700}
            >
              {recommended.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-xl overflow-hidden shadow-md transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 ease-in-out">
                    <figure className="relative h-[260px] w-full group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority
                      />
                      <figcaption className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h6 className="text-sm md:text-base font-semibold">{item.title}</h6>
                      </figcaption>
                    </figure>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopRecommendedSection;
