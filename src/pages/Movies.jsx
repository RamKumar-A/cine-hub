import { memo, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { PAGE_LIMIT } from '../constants/constants';
import { getMovies } from '../services/apiMovies';
import { useOutletContext } from '../Context/OutletContext';
import Genre from '../components/Genre';
import Category from '../components/Category';
import ContentLayout from '../components/ContentLayout';
import { StyledFilters } from '../components/styleComponents/Filters';

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  let genre = searchParams.get('genre');
  const [page, setPage] = useState(1);
  const { refs } = useOutletContext();

  const handleScroll = useCallback(
    function () {
      const { scrollHeight, scrollTop, clientHeight } = refs.current;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setPage((prevPage) => prevPage + 1); // Increment page number to fetch next page of data
      }
    },
    [refs]
  );

  const fetchData = useCallback(
    async function () {
      setIsLoading(true);
      try {
        const data = await getMovies(
          category || 'trending',
          genre ? [genre] : [],
          page
        );
        setMoviesData((prevData) => [...prevData, ...(data || [])]);
      } catch (err) {
        console.error('Error fetching data');
      } finally {
        setIsLoading(false);
      }
    },
    [category, genre, page]
  );

  useEffect(
    function () {
      if (page <= PAGE_LIMIT) fetchData();
    },
    [category, genre, page, fetchData]
  );

  useEffect(
    function () {
      const container = refs.current;
      container.addEventListener('scroll', handleScroll);
      return () => {
        // Remove scroll event listener when the component unmounts
        container.removeEventListener('scroll', handleScroll);
      };
    },
    [refs, handleScroll]
  );

  const uniqueMoviesData = moviesData?.filter(
    (value, index, self) =>
      self?.findIndex((s) => value?.imdbID === s?.imdbID) === index
  );

  return (
    <div>
      <StyledFilters>
        <Genre />
        <Category />
      </StyledFilters>
      <ContentLayout contentData={uniqueMoviesData} isLoading={isLoading} />
    </div>
  );
}

// export default useMemo(Movies);
export default memo(Movies);
