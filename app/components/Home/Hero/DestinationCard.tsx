"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface Destination {
  id: string;
  name: string;
  tours: number;
  images: string[];
}

const DestinationCards: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { fetchDestinationsFromWP } = await import("@/app/lib/fetchDestination");
      const data: Destination[] = await fetchDestinationsFromWP();
      console.log("Fetched Destinations:", data);

      setDestinations(data);
      setCurrentImages(data.map((d) => d.images?.[0] || "/images/fallback.jpg"));
    };

    getData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) =>
        prevImages.map((currentImage, index) => {
          const destination = destinations[index];
          if (!destination || !destination.images || destination.images.length === 0) {
            return "/images/fallback.jpg";
          }
          const nextIndex = (destination.images.indexOf(currentImage) + 1) % destination.images.length;
          return destination.images[nextIndex];
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [destinations]);

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 xl:px-32 2xl:px-40">
      <Swiper
        modules={[Autoplay, Navigation, Scrollbar]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        scrollbar={{ draggable: true }}
        grabCursor={true}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={destination.id || index}>
            <div
              className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] xl:h-[350px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentImages[index] || "/images/fallback.jpg"})`,
                transition: "background-image 1s ease-in-out",
              }}
            >
              <div className="absolute inset-0 bg-black/50 transition-transform duration-500 md:scale-100 scale-110" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
              <h3 className="text-lg md:text-xl font-semibold">
  <a href={`/destination-details/${destination.slug}`} className="hover:underline">
    {destination.title}
  </a>
</h3>
                <span className="text-sm md:text-base">{destination.tours} Tours</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DestinationCards;
