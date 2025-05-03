'use client';

import React, { useState } from 'react';
import SearchForm from '../SearchForm';
import TourPackage from '../HeroTourSlider';
const SearchAndPackages = () => {
  const [filters, setFilters] = useState({
    location: '',
    duration: '',
    tourType: '',
    guests: '',
    rating: [],
    language: [],
  });

  // Merge new filter changes into existing state
  const handleFilterChange = (newFilter: any) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilter,
    }));
  };

  return (
    <div>
      <SearchForm filters={filters} onFilterChange={handleFilterChange} />
      <TourPackage filters={filters} />
    </div>
  );
};

export default SearchAndPackages;
