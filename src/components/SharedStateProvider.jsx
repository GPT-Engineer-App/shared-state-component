import React, { createContext, useContext, useState } from 'react';

// Create a context for the shared state
const SharedStateContext = createContext();

// Create a provider component
export const SharedStateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState("Initial State");

  return (
    <SharedStateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </SharedStateContext.Provider>
  );
};

// Custom hook to use the shared state
export const useSharedState = () => {
  return useContext(SharedStateContext);
};