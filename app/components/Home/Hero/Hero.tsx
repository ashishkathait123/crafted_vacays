"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import SearchForm from "../../tour/SearchForm";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

// Sample image slides for the hero section
const slides = ["/images/d1.jpg", "/images/d2.jpg", "/images/d4.jpg"];

const Hero = () => {
  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Filter state
  const [filters, setFilters] = useState({
    location: "",
    duration: "",
    tourType: "",
    guests: "",
  });

  const handleFilterChange = (newFilters: any) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    console.log(newFilters); // To debug and check if it's updating correctly
  };

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="relative top w-full h-screen">
      {/* Swiper component for the hero section */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1500}
        loop
        className="w-full h-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />

              {/* Animated Text Content */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="relative text-center text-white z-10"
              >
                <span className="block text-lg mb-2">Memories For Life</span>
                <h3 className="text-4xl md:text-6xl font-bold">
                  Let's Explore the World
                </h3>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search Form with Animation */}
      <motion.div
        className="absolute inset-x-0 mt-6 top-2/3 transform -translate-y-1/2 w-full max-w-4xl mx-auto z-40"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Pass filter state and handler to SearchForm */}
        {/* <SearchForm filters={filters} onFilterChange={handleFilterChange} /> */}
      </motion.div>
    </section>
  );
};

export default Hero;
