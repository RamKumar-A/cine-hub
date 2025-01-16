import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useParams } from 'react-router-dom';

import { getDetails as fetchDetails } from '../services/apiDetails';

const DetailsContext = createContext();

function DetailsProvider({ children }) {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const getDetails = useCallback(
    async function (imdbID) {
      setIsLoading(true);
      try {
        const data = await fetchDetails(imdbID || params?.imdbID);
        setDetails(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [params?.imdbID]
  );

  useEffect(
    function () {
      getDetails();
    },
    [params, getDetails]
  );

  return (
    <DetailsContext.Provider
      value={{
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
