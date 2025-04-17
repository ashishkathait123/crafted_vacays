"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import ItineraryForm from "../../Helper/ItineraryFrom";
import { useTheme } from "../../ThemeProvider";
import { useDestination } from "../../../destinations/DestinationContext";

const MobileNav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { destinationName } = useDestination();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Details", href: "/destinations/maldives" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <div className="relative w-full h-screen bg-cover bg-center overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow-md py-4 px-6 flex justify-between items-center">
        <Link href="/">
          <img src="/images/craft.webp" alt="Logo" className="h-[50px]" />
        </Link>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-400" />
            ) : (
              <Moon className="text-gray-800" />
            )}
          </button>

          {/* Menu Toggle */}
          <button onClick={() => setNavOpen(!navOpen)} className="p-2">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Background Overlay when menu open */}
      {navOpen && (
        <div
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
        />
      )}

      {/* Slide-out Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] bg-white dark:bg-gray-900 z-40 p-6 transition-all duration-500 ease-in-out transform ${
          navOpen ? "translate-x-0 scale-100 opacity-100" : "-translate-x-full scale-90 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 mt-16">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setNavOpen(false)}
              className={`text-lg font-medium transition-all transform duration-500 ease-in-out delay-${index * 100} ${
                navOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setShowForm(true);
              setNavOpen(false);
            }}
            className={`bg-orange-500 text-white px-4 py-2 rounded-md font-medium mt-6 transition-all transform duration-500 ease-in-out delay-500 ${
              navOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            Plan Your Trip
          </button>
        </nav>
      </div>

      {/* Hero Intro */}
      <div className="absolute left-6 bottom-24 z-10 max-w-[90%] text-white px-4">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
          {destinationName ? `Explore ${destinationName}` : "Welcome to Crafted Vacays"}
        </h1>
        <p className="text-white text-base sm:text-lg mb-4">
          Indulge in luxury with our{" "}
          {destinationName ? `Explore ${destinationName}` : "Welcome to Crafted Vacays"} tour packages. Tailored for
          perfection, explore pristine beaches, vibrant coral reefs, and exclusive resorts. Book your dream escape!
        </p>
      </div>

      {/* Floating Button (Desktop Only) */}
      <button
        onClick={() => setShowForm(true)}
        className="hidden sm:block fixed bottom-6 right-6 bg-orange-500 text-white px-5 py-3 rounded-full shadow-lg z-[60]"
      >
        Plan My Trip
      </button>

      {/* Popup Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <ItineraryForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default MobileNav;
