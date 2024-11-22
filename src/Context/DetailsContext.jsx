import { createContext, useContext, useState, useCallback } from 'react';
import { getDetails as fetchDetails } from '../services/apiDetails';

const DetailsContext = createContext();

function DetailsProvider({ children }) {
  const [details, setDetails] = useState({});
  const [seasonDetails, setSeasonDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // function handleDetails(detail) {
  //   setDetails(detail);
  // }
  const getDetails = useCallback(async function (imdbID) {
    try {
      setIsLoading(true);
      const data = await fetchDetails(imdbID);
      setDetails(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  function handleSeasonDetails(detail) {
    setSeasonDetails(detail);
  }

  return (
    <DetailsContext.Provider
      value={{
        seasonDetails,
        handleSeasonDetails,
        details,
        getDetails,
        isLoading,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

function useDetails() {
  const context = useContext(DetailsContext);
  if (context === undefined)
    throw new Error('useDetails used outside the context');
  return context;
}

export { DetailsProvider, useDetails };
