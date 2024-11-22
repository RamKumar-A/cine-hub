import { Stack } from '@mui/material';
import { useMovies } from './MoviesContext';
import Genre from '../../components/Genre';
import Category from '../../components/Category';
import GenreChips from '../../components/GenreChips';
import CardLayout from '../../components/CardLayout';

function Movie() {
  const { data, isLoading, page, setPage } = useMovies();

  return (
    <>
      <Stack direction="row" gap={1}>
        <Genre />
        <Category />
      </Stack>
      <GenreChips />
      <CardLayout
        contentData={data}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default Movie;
