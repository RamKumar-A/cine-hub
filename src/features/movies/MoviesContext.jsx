import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { ITEMS_PER_PAGE } from '../../constants/constants';
import { getMovies } from '../../services/apiMovies';

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const genre = searchParams.get('genre');

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getMovies(
        category || 'trending',
        genre || '',
        page,
        ITEMS_PER_PAGE
      );
      setData(data);
      // setIsLoading(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [page, genre, category]);

  useEffect(() => {
    fetchData();
  }, [page, genre, fetchData]);

  return (
    <MoviesContext.Provider value={{ data, isLoading, setPage, page }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
}
