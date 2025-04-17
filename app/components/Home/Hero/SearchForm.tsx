"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaLocationDot, FaCalendar, FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, checkIn, checkOut, guests });
  };

  return (
    <form
      className="it-tour-package-wrap it-slider-tour-style it-tour-package-box z-auto bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <div className="it-tour-package-location__wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Location Input */}
        <div className="it-tour-package-item flex items-center bg-gray-100 p-4 rounded-md">
          <FaLocationDot className="text-gray-500 text-xl mr-3" />
          <div>
            <h3 className="it-tour-package-title text-gray-700 font-semibold">Location</h3>
            <input
              type="text"
              placeholder="Where are you going?"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Check-In Date */}
        <div className="it-tour-package-item flex items-center bg-gray-100 p-4 rounded-md">
          <FaCalendar className="text-gray-500 text-xl mr-3" />
          <div>
            <h3 className="it-tour-package-title text-gray-700 font-semibold">Check In</h3>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              placeholderText="Check In"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Check-Out Date */}
        <div className="it-tour-package-item flex items-center bg-gray-100 p-4 rounded-md">
          <FaCalendar className="text-gray-500 text-xl mr-3" />
          <div>
            <h3 className="it-tour-package-title text-gray-700 font-semibold">Check Out</h3>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              placeholderText="Check Out"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>
        </div>

        {/* Guests Input */}
        <div className="it-tour-package-item flex items-center bg-gray-100 p-4 rounded-md relative">
          <FaUser className="text-gray-500 text-xl mr-3" />
          <div>
            <h3 className="it-tour-package-title text-gray-700 font-semibold">Guest</h3>
            <input
              type="text"
              placeholder="Total Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>
          {/* Search Button */}
          <button
            type="submit"
            className="absolute right-4 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600"
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
