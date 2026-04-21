import React, { createContext, useContext, ReactNode } from 'react';
import weddingData from '../data/weddingData.json';

type WeddingData = typeof weddingData;

interface WeddingDataContextType {
  data: WeddingData;
}

const WeddingDataContext = createContext<WeddingDataContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
}

export const WeddingDataProvider = (props: ProviderProps) => {
  return React.createElement(WeddingDataContext.Provider, {
    value: { data: weddingData },
  }, props.children);
};

export const useWeddingData = (): WeddingData => {
  const context = useContext(WeddingDataContext);
  if (context === undefined) {
    throw new Error('useWeddingData must be used within a WeddingDataProvider');
  }
  return context.data;
};

