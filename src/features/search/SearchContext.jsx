import { createContext, useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearch, getSingleQueryData } from '../../services/apiSearch';
import { useDetails } from '../../Context/DetailsContext';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [type, setType] = useState('all');
  const [query, setQuery] = useState('');
  const [queryData, setQueryData] = useState({});
  const [queryPage, setQueryPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { handleDetails } = useDetails();

  const handleQuery = useCallback(
    async function () {
      try {
        const res = await getSearch(query, queryPage, type);
        setQueryData(res);
      } catch (err) {
        console.error(err.message);
      }
    },
    [type, queryPage, query]
  );

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  function handleQuerySubmit(e) {
    e.preventDefault();
    handleQuery();
  }

  const handleSingleQueryData = useCallback(
    async function (id) {
      try {
        const data = await getSingleQueryData(id);

        navigate(`/search/${data?.Title}/${data?.imdbID}`);
        handleDetails(data);
      } catch (err) {
        console.error(err);
      }
    },
    [navigate, handleDetails]
  );

  const value = {
    handleQuerySubmit,
    handleTypeChange,
    setQueryPage,
    setQuery,
    handleSingleQueryData,
    query,
    queryData,
    queryPage,
    type,
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
