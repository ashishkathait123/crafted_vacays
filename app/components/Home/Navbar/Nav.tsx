"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingBag, FaChevronDown } from "react-icons/fa";
import ItineraryForm from "../../Helper/ItineraryFrom";
import { useTheme } from "../../ThemeProvider";
import { useDestination } from "../../../destinations/DestinationContext";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const { destinationName } = useDestination();

  const { theme, toggleTheme } = useTheme(); // Use the theme context




  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" relative w-full h-screen overflow-hidden">
     
      
      <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
     isSticky ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
     }`}
>

        <div className="mt-4 container mx-auto flex items-center justify-between py-4 px-6">
          <Link href="/">
            <img
              src="/images/craft.webp"
              alt="Travello"
              className="h-10 cursor-pointer h-[60px] "
            />
          </Link>

          <nav className="hidden xl:flex space-x-6 z-50">
  {[
    { label: "Home", links: ["Home"] },
    // { label: "Tours", links: ["Tour Details", "Booking"] },
    {
      label: "Destination",
      links: [
        "Destination",
        // "Details",
        "India",
        "Abroad",
        "Neighbouring Countries",
      ],
    },
    { label: "Pages", links: ["About"] },
  ].map((menu, index) => (
    <div
      key={index}
      className="relative group"
      onMouseEnter={() => setDropdown(menu.label)}
      onMouseLeave={() => setDropdown(null)}
    >
      <button className="text-black font-medium px-3 py-1 flex items-center transition duration-300 z-50 rounded-md group-hover:bg-orange-500">
        {menu.label}
        <FaChevronDown
          className={`ml-2 transition-transform duration-300 ${
            dropdown === menu.label ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Submenu */}
      <ul
        className={`absolute left-0 top-full w-[260px] text-left p-6 border-t-4 border-orange-500 bg-black shadow-lg origin-top transform transition-all duration-500 ease-out z-50 ${
          dropdown === menu.label ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {menu.links.map((link, i) => {
          const getPath = () => {
            if (link === "Home") return "/";
            // if (link === "Tour Details") return "/tours/details";
            if (link === "Booking") return "/tours/booking";
            if (link === "Destination") return "/destinations";
            if (link === "Details") return "/destinations/thailand"; // example detail page
            if (link === "India") return "/destinations/india";
            if (link === "Abroad") return "/destinations/abroad";
            if (link === "Neighbouring Countries") return "/destinations/neighbouring-countries";
            if (link === "About") return "/about-us";
            return "#";
          };

          return (
            <li key={i} className="relative">
              <Link
                href={getPath()}
                className="relative flex items-center w-full pl-4 py-2 text-white transition-all duration-300 hover:pl-6 peer"
              >
                {link}
              </Link>
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-orange-500 opacity-0 transition-all duration-300 peer-hover:opacity-100"></span>
            </li>
          );
        })}
      </ul>
    </div>
  ))}

  <Link
    href="/contact-us"
    className="text-black font-medium px-4 py-2 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md"
  >
    Contact
  </Link>
</nav>



          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-white text-xl">
              <FaShoppingBag />
            </Link>
            <Link href="/contact-us" className="bg-orange-500 text-white px-4 py-2 rounded-md font-medium">
              Contact Us
            </Link>
          </div>
          <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-800" />}
    </button>
    
        </div>
        
      </header>

      {/* Itinerary Form Positioned Over Video */}
      <section className="relative h-screen overflow-auto bg-cover bg-center">
  <div
    className="absolute bottom-10 top-1/2 right-6 z-10 w-[400px] max-w-[90%]"
  >
    <ItineraryForm />
  </div>
</section>


{/* Hero Intro Text */}
<div className="intro absolute left-10 bottom-10 z-10 max-w-[600px] text-white">
<h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
        {destinationName ? `Explore ${destinationName}` : 'Welcome to Crafted Vacays'}
      </h1>
  <p className="text-white text-lg mb-6">
    Indulge in luxury with our  {destinationName ? `Explore ${destinationName}` : 'Welcome to Crafted Vacays'} tour packages. Tailored for perfection, explore pristine beaches, vibrant coral reefs, and exclusive resorts. Book your dream escape!
  </p>
  <div className="button-group flex flex-wrap items-center gap-3">
   
  </div>
</div>

    </div>
  );
};

export default Navbar;
