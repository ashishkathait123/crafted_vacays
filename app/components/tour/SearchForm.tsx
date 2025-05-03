"use client";

import {
  FaLocationDot,
  FaUser,
  FaMagnifyingGlass,
  FaClock,
  FaTag,
} from "react-icons/fa6";
import React from "react";

const SearchForm = ({
  filters,
  onFilterChange,
}: {
  filters: any;
  onFilterChange: (newFilters: any) => void;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 rounded shadow"
    >
      {/* Location */}
      <div className="flex items-center bg-gray-100 p-4 rounded-md">
        <FaLocationDot className="text-xl mr-3" />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location || ""}
          onChange={handleInputChange}
          className="bg-transparent w-full outline-none"
        />
      </div>

      {/* Duration */}
      <div className="flex items-center bg-gray-100 p-4 rounded-md">
        <FaClock className="text-xl mr-3" />
        <input
          type="text"
          name="duration"
          placeholder="e.g. 5N/6D"
          value={filters.duration || ""}
          onChange={handleInputChange}
          className="bg-transparent w-full outline-none"
        />
      </div>

      {/* Tour Type */}
      <div className="flex items-center bg-gray-100 p-4 rounded-md">
        <FaTag className="text-xl mr-3" />
        <select
          name="tourType"
          value={filters.tourType || ""}
          onChange={handleInputChange}
          className="bg-transparent w-full outline-none"
        >
          <option value="">Select Type</option>
          <option value="Adventure">Adventure</option>
          <option value="Family">Family</option>
          <option value="Honeymoon">Honeymoon</option>
          <option value="Cultural">Cultural</option>
          <option value="Leisure">Leisure</option>
        </select>
      </div>

      {/* Guests */}
      <div className="flex items-center bg-gray-100 p-4 rounded-md relative">
        <FaUser className="text-xl mr-3" />
        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={filters.guests || ""}
          onChange={handleInputChange}
          className="bg-transparent w-full outline-none"
          min={1}
        />
        <button
          type="submit"
          className="absolute right-4 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600"
        >
          <FaMagnifyingGlass />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
