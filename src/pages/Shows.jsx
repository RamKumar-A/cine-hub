import { useEffect, useState, memo, useCallback } from 'react';

import { PAGE_LIMIT } from '../constants/constants';
import Genre from '../components/Genre';
import Category from '../components/Category';
import { getShows } from '../services/apiShows';
import { useOutletContext } from '../Context/OutletContext';
import ContentLayout from '../components/ContentLayout';
import { StyledFilters } from '../components/styleComponents/Filters';
import useCategoryGenre from '../hooks/useCategoryGenre';

function Shows() {
  const [showsData, setShowsData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchParams] = useSearchParams();
  const { refs } = useOutletContext();
  const { category, genre } = useCategoryGenre();

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
        const data = await getShows(
          category || 'trending',
          [genre]?.length > 0 ? [genre] : null,
          page
        );
        setShowsData((prevData) => [...prevData, ...(data || [])]);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    },
    [category, page, genre]
  );

  useEffect(
    function () {
      if (page <= PAGE_LIMIT) fetchData();
      // console.log(category);
    },
    [page, fetchData]
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

  const uniqueShowsData = showsData?.filter(
    (value, index, self) =>
      self?.findIndex((s) => value?.imdbID === s?.imdbID) === index
  );

  return (
    <div>
      <StyledFilters>
        <Genre />
        <Category />
      </StyledFilters>
      <ContentLayout contentData={uniqueShowsData} isLoading={isLoading} />
    </div>
  );
}

export default memo(Shows);

// const fetchData = async function () {
//   setIsLoading(true);
//   try {
//     const data = await getShows(
//       category || 'trending',
//       [genre]?.length > 0 ? [genre] : null,
//       page
//     );
//     setShowsData((prevData) => [...prevData, ...(data || [])]);
//   } catch (err) {
//     console.error(err.message);
//   } finally {
//     setIsLoading(false);
//   }
// };
