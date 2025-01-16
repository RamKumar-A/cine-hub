import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getShows } from '../../services/apiShows';

const ShowsContext = createContext();

function ShowsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const genre = searchParams.get('genre');
  const page = searchParams.get('page');

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getShows();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [page, genre, fetchData, category, searchParams]);

  return (
    <ShowsContext.Provider value={{ data, isLoading }}>
      {children}
    </ShowsContext.Provider>
  );
}

function useShows() {
  const context = useContext(ShowsContext);
  if (context === undefined)
    throw new Error('useShows used outside the context');
  return context;
}

export { useShows, ShowsProvider };
