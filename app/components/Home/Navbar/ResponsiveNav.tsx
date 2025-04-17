"use client";

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
export const ResponsiveNav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Track menu state

  // Detect screen size on mount & window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* ✅ Pass menu toggle function to MobileNav */}
      {isMobile ? (
  <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
) : (
  <>
    <Nav />
  </>
)}

    </div>
  );
};

export default ResponsiveNav;
