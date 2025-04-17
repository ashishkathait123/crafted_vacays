'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay, FreeMode } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import CustomerTestimonials from './CustomerTestimonials';

const reviewData = [
  {
    name: 'Karthik Ramalingam',
    review: 'We had a fantastic trip to Thailand with Dimak Tours...',
    image: '/images/d3.jpg',
  },
  {
    name: 'Dinesh Dharmaraj',
    review: 'We enjoyed our Thailand trip by Dimaak Chennai team...',
    image: '/images/d8.jpg',
  },
  {
    name: 'Vikas Krishnamurthy',
    review: 'Today was the last day of my 10 day trip to Thailand...',
    image: '/images/d2.jpg',
  },
];

export default function ReviewCarousel() {
  return (
    <div className="relative py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        
        {/* Left Side Static Content */}
        <CustomerTestimonials />

        {/* Right Side Vertical Carousel with Fade Effects */}
        <div
          className="relative max-h-[500px] overflow-hidden group"
          onMouseEnter={() => {
            const swiper = (window as any).testimonialSwiper;
            swiper?.autoplay?.stop?.();
          }}
          onMouseLeave={() => {
            const swiper = (window as any).testimonialSwiper;
            swiper?.autoplay?.start?.();
          }}
        >
          {/* Fade Top */}
          <div className="absolute top-0 left-0 w-full h-24 z-10 pointer-events-none bg-gradient-to-b from-white dark:from-gray-950 to-transparent" />

          {/* Swiper Carousel */}
          <Swiper
            direction="vertical"
            loop={true}
            slidesPerView={3}
            spaceBetween={30}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
            freeMode={true}
            modules={[Autoplay, FreeMode]}
            className="h-[500px] z-0"
            onSwiper={(swiper) => {
              (window as any).testimonialSwiper = swiper;
            }}
          >
            {[...reviewData, ...reviewData].map((review, index) => (
              <SwiperSlide key={index}>
                <div className="px-4">
                  <ReviewCard {...review} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Fade Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-24 z-10 pointer-events-none bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
        </div>
      </div>
    </div>
  );
}
