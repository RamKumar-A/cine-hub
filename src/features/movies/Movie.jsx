import { useSearchParams } from 'react-router-dom';
import { Stack } from '@mui/material';

import { useMovies } from './MoviesContext';

import Genre from '../../components/Genre';
import Category from '../../components/Category';
import GenreChips from '../../components/GenreChips';
import CardLayout from '../../components/CardLayout';

function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useMovies();

  function setPage(num) {
    const params = new URLSearchParams(searchParams);
    params.set('page', num || 1);
    setSearchParams(params);
  }

  return (
    <>
      <Stack direction="row" gap={1}>
        <Genre />
        <Category />
      </Stack>
      <GenreChips />
      <CardLayout contentData={data} isLoading={isLoading} setPage={setPage} />
    </>
  );
}

export default Movie;
