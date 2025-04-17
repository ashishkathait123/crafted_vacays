'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type DestinationContextType = {
  destinationName: string;
  setDestinationName: (name: string) => void;
};

const DestinationContext = createContext<DestinationContextType | undefined>(undefined);

export const DestinationProvider = ({ children }: { children: ReactNode }) => {
  const [destinationName, setDestinationName] = useState('');

  return (
    <DestinationContext.Provider value={{ destinationName, setDestinationName }}>
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestination = () => {
  const context = useContext(DestinationContext);
  if (!context) throw new Error('useDestination must be used within a DestinationProvider');
  return context;
};
