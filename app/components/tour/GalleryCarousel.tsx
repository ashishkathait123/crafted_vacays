'use client';
// components/GalleryCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// Type for the gallery images
interface GalleryItem {
  src: string;
  alt: string;
}

interface GalleryCarouselProps {
  galleryItems: GalleryItem[];
}

const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ galleryItems }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        speed={1000}
        className="mySwiper"
      >
        {galleryItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Optional: You can add dark overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
