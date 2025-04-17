"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import DestinationCarousel from "./DestinationCard";

const bgImages = [
  "/images/bg.jpg",
  "/images/n2.jpg",
  "/images/n3.jpg",
  "/images/n4.jpg",
];

const Hero2 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bgImages.length);
    }, 1000); // Change image every second
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="relative py-20 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      style={{
        backgroundImage: `url(${bgImages[currentImage]})`,
      }}
    >
      {/* Dark overlay for dark mode */}
      <div className="absolute inset-0 bg-white/0 dark:bg-black/60 transition-colors duration-500 z-0" />

      {/* Floating Animated Elements */}
      <div className="hidden xl:block relative z-10">
        <motion.div
          className="absolute left-10 top-[15%] will-change-transform"
          animate={{ y: ["0%", "-10%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/images/Ballon-1.webp" alt="Balloon" width={110} height={150} />
        </motion.div>

        <motion.div
          className="absolute right-10 top-[20%] will-change-transform"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/images/star.webp" alt="Star" width={70} height={70} />
        </motion.div>
      </div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white">
          Explore Our Top Destinations
        </h2>
        <p className="text-lg text-white/90 mt-2">
          Find the perfect tour for your next adventure.
        </p>
      </motion.div>

      {/* Destination Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mt-32"
      >
        <DestinationCarousel />
      </motion.div>
    </div>
  );
};

export default Hero2;
