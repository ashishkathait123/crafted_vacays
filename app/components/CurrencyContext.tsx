"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define the structure of context
interface CurrencyContextType {
  currency: keyof typeof exchangeRates; // Use 'keyof' to restrict the currency to valid keys
  setCurrency: (currency: keyof typeof exchangeRates) => void;
  convertPrice: (amount: number | string) => number;
  currencySymbol: string;
}

// 2. Create context with proper type
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// 3. Define props for the provider
interface CurrencyProviderProps {
  children: ReactNode;
}

// 4. Exchange rates
const exchangeRates = {
  INR: { rate: 1, symbol: "₹" },
  USD: { rate: 0.012, symbol: "$" },
  EUR: { rate: 0.011, symbol: "€" },
  GBP: { rate: 0.009, symbol: "£" }, // Added GBP here
};


// 5. CurrencyProvider component
export const CurrencyProvider = ({ children }: CurrencyProviderProps) => {
  const [currency, setCurrency] = useState<keyof typeof exchangeRates>("INR"); // Default currency

  const convertPrice = (amount: number | string): number => {
    if (!amount) return 0;

    const numericAmount = parseFloat(amount.toString().replace(/[^0-9.]/g, ""));

    if (isNaN(numericAmount)) {
      console.error("Invalid amount passed to convertPrice:", amount);
      return 0;
    }

    return numericAmount * (exchangeRates[currency]?.rate || 1); // Now TypeScript knows 'currency' is a key
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
        currencySymbol: exchangeRates[currency]?.symbol || "₹",
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

// 6. useCurrency custom hook
export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
