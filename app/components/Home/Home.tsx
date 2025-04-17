"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero/Hero";
import Hero2 from "./Hero/Hero2";
import Company from "./Company";
import Footer from "../footer/Footer";
import TourPackage from "../tour/HeroTourSlider";
import VideoSection from "./VideoSection";
// Scroll Animation Variants
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
        <TourPackage />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
<VideoSection />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
<Company/>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        {/* <Footer /> */}
      </motion.div>
    </div>
  );
};

export default Home;
