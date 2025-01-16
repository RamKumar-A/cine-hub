import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from '../../services/apiMovies';

const MoviesContext = createContext();

export function MoviesProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const genre = searchParams.get('genre');
  const page = searchParams.get('page');
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await getMovies();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [page, genre, category, fetchData]);

  return (
    <MoviesContext.Provider value={{ data, isLoading }}>
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
