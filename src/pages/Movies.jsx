import { Container } from '@mui/material';
import { MoviesProvider } from '../features/movies/MoviesContext';
import Movie from '../features/movies/Movie';
import AnimatedLayout from '../components/AnimatedLayout';

function Movies() {
  return (
    <AnimatedLayout>
      <MoviesProvider>
        <Container>
          <Movie />
        </Container>
      </MoviesProvider>
    </AnimatedLayout>
  );
}

export default Movies;
