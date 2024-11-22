import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import { getShows } from '../../services/apiShows';

const ShowsContext = createContext();

function ShowsProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const genre = searchParams.get('genre');

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getShows(
        category || 'trending',
        genre || '',
        page,
        ITEMS_PER_PAGE
      );
      setData(data);
      setIsLoading(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, genre, category]);

  useEffect(() => {
    fetchData();
  }, [page, genre, fetchData, category, searchParams]);

  return (
    <ShowsContext.Provider value={{ data, isLoading, page, setPage }}>
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
