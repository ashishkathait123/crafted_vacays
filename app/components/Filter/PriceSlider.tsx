'use client';

import React, { useState } from 'react';

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([200, 60000]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newPrice = [...priceRange];
    newPrice[index] = parseInt(e.target.value);
    setPriceRange(newPrice);
  };

  return (
    <div className="mb-6">
      <h5 className="text-lg font-medium mb-3">Price</h5>
      <div className="flex flex-col space-y-2">
        <input
          type="range"
          min={0}
          max={100000}
          value={priceRange[0]}
          onChange={(e) => handleChange(e, 0)}
          className="w-full"
        />
        <input
          type="range"
          min={0}
          max={100000}
          value={priceRange[1]}
          onChange={(e) => handleChange(e, 1)}
          className="w-full"
        />
      </div>
      <div className="text-sm font-semibold mt-2">
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </div>
    </div>
  );
};

export default PriceSlider;
