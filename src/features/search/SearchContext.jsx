import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getSearch } from '../../services/apiSearch';
import { useSearchParams } from 'react-router-dom';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [queryData, setQueryData] = useState({});

  const [searchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;
  const query = searchParams.get('query');
  const type = searchParams.get('type');

  const handleQuery = useCallback(async function () {
    try {
      setIsLoading(true);
      const res = await getSearch();
      setQueryData(res);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(
    function () {
      handleQuery();
    },
    [query, type, page, searchParams, handleQuery]
  );

  const value = {
    queryData,
    handleQuery,
    isLoading,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('useSearch used outside the context');
  return context;
}

export { SearchProvider, useSearch };
