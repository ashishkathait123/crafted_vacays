"use client";

import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext(null);

const exchangeRates = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
  EUR: { rate: 0.011, symbol: "€" }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR"); // Default currency

  // Updated convertPrice function with safeguards
  const convertPrice = (amount) => {
    if (!amount) return 0; // Handle empty values safely

    // Remove any non-numeric characters (like ₹, $, €, etc.)
    const numericAmount = parseFloat(amount.toString().replace(/[^0-9.]/g, ""));

    if (isNaN(numericAmount)) {
      console.error("Invalid amount passed to convertPrice:", amount);
      return 0; // Return 0 instead of NaN
    }

    return numericAmount * (exchangeRates[currency]?.rate || 1);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        currencySymbol: exchangeRates[currency]?.symbol || "₹"
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
