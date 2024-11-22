import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSeasons, getSingleShowData } from '../services/apiShows';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDetails } from './DetailsContext';

const EpisodesContext = createContext();

function EpisodesProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isEpisodeLoading, setIsEpisodeLoading] = useState(false);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const imdbID = params.imdbID;
  const navigate = useNavigate();
  const { handleDetails } = useDetails();

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

  const handleEpisode = useCallback(
    async function (id) {
      try {
        setIsEpisodeLoading(true);
        const data = await getSingleShowData(id);
        navigate(`/search/${data?.Title}/${data?.imdbID}`);
        handleDetails(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsEpisodeLoading(false);
      }
    },
    [navigate, handleDetails]
  );

  useEffect(
    function () {
      fetchSeason();
    },
    [fetchSeason]
  );

  return (
    <EpisodesContext.Provider
      value={{ data, isLoading, isEpisodeLoading, handleEpisode }}
    >
      {children}
    </EpisodesContext.Provider>
  );
}

function useEpisodes() {
  const context = useContext(EpisodesContext);
  if (context === undefined) throw new Error('Used outside the context');
  return context;
}

export { useEpisodes, EpisodesProvider };
