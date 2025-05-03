'use client';

import React, { useEffect, useState } from 'react';
import PriceSlider from './PriceSlider';
import FilterSection from './FilterSection';
import { motion } from 'framer-motion';

const SidebarFilter = ({ filters, onFilterChange }: any) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleCheckboxChange = (section: string, value: string) => {
    setLocalFilters((prev: any) => {
      const current = prev[section] || [];
      const updated = current.includes(value)
        ? current.filter((item: string) => item !== value)
        : [...current, value];

      return {
        ...prev,
        [section]: updated,
      };
    });
  };

  const handleRatingChange = (value: number) => {
    setLocalFilters((prev: any) => {
      const current = prev.rating || [];
      const updated = current.includes(value)
        ? current.filter((r: number) => r !== value)
        : [...current, value];

      return {
        ...prev,
        rating: updated,
      };
    });
  };

  useEffect(() => {
    onFilterChange(localFilters);
  }, [localFilters]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full bg-white dark:bg-gray-900 rounded-md shadow-lg p-4 space-y-6 sm:w-80 md:w-96 lg:w-1/4 xl:w-1/4"
    >
      {/* Price Slider */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <PriceSlider />
      </motion.div>

      {/* Duration Filter */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <FilterSection
          title="Duration"
          options={['0-3 hours', '3-5 hours', '5-7 hours', 'Full day (7+ hours)', 'Multi-day']}
          selectedOptions={localFilters.duration || []} // Default to empty array
          onChange={(value: string) => handleCheckboxChange('duration', value)}
        />
      </motion.div>

      {/* Language Filter */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <FilterSection
          title="Language"
          options={['English', 'Dutch', 'German', 'French', 'Italian']}
          selectedOptions={localFilters.language || []} // Default to empty array
          onChange={(value: string) => handleCheckboxChange('language', value)}
        />
      </motion.div>

      {/* Rating Filter with animated stars */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <FilterSection
          title="Rating"
          customContent={
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delayChildren: 0.2,
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="space-y-2"
            >
              {[5, 4, 3, 2, 1].map((rating) => (
                <motion.label
                  key={rating}
                  className="flex items-center space-x-2 cursor-pointer transition duration-200 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <input
                    type="checkbox"
                    checked={localFilters.rating?.includes(rating)} // Default to empty array
                    onChange={() => handleRatingChange(rating)}
                    className="accent-yellow-400 w-4 h-4"
                  />
                  <div className="flex space-x-1">
                    {[...Array(rating)].map((_, i) => (
                      <motion.i
                        key={i}
                        className="icon-star text-yellow-400 text-sm"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </motion.label>
              ))}
            </motion.div>
          }
        />
      </motion.div>

      {/* Specials Filter */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <FilterSection
          title="Specials"
          options={['Deals & Discounts', 'Free Cancellation', 'Likely to Sell Out', 'Skip-The-Line']}
          selectedOptions={localFilters.specials || []} // Default to empty array
          onChange={(value: string) => handleCheckboxChange('specials', value)}
        />
      </motion.div>

      {/* Cities Filter */}
      <motion.div whileHover={{ scale: 1.02 }}>
        <FilterSection
          title="Cities"
          options={['Paris', 'Rome', 'Amsterdam', 'Kathmandu', 'Bali']}
          selectedOptions={localFilters.cities || []} // Default to empty array
          onChange={(value: string) => handleCheckboxChange('cities', value)}
        />
      </motion.div>
    </motion.div>
  );
};

export default SidebarFilter;
