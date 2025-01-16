import { useParams, useSearchParams } from 'react-router-dom';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getSeasons } from '../services/apiShows';

const SeasonsContext = createContext();

function SeasonProvider({ children }) {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const imdbID = params?.imdbID;

  const fetchSeason = useCallback(
    async function () {
      const season = searchParams.get('season');
      setIsLoading(true);
      try {
        const data = await getSeasons(imdbID, season);
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [imdbID, searchParams]
  );

  useEffect(
    function () {
      fetchSeason();
    },
    [fetchSeason]
  );

  return (
    <SeasonsContext.Provider value={{ data, isLoading, fetchSeason }}>
      {children}
    </SeasonsContext.Provider>
  );
}

function useSeasons() {
  const context = useContext(SeasonsContext);
  if (context === undefined) throw new Error('Used outside the context');
  return context;
}

export { useSeasons, SeasonProvider };
