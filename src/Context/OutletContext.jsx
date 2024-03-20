import { createContext, useContext } from 'react';

// Create a context
const OutletContext = createContext();

// Custom hook to access the context
export const useOutletContext = () => useContext(OutletContext);

// Export the context provider
export const OutletProvider = ({ refs, children }) => (
  <OutletContext.Provider value={{ refs }}>{children}</OutletContext.Provider>
);
