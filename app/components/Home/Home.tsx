"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import Company from "./Company";
import TourPackage from "../tour/HeroTourSlider";
import VideoSection from "./VideoSection";
import TopRecommendedSection from "@/app/destinations/TopRecommendedSection";// Scroll Animation Variants
import SearchAndPackages from "../tour/SearchAndPackages/SearchAndPackages";
import DescriptionBox from "@/app/firstview/info/DescriptionBox";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Hero />

      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Hero2 />

      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <SearchAndPackages/>
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
<VideoSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
<Company/>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      <TopRecommendedSection destination="India" />

      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
      {/* <DescriptionBox/> */}
      </motion.div>
    </div>
  );
};

export default Home;
