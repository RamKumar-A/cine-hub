import { Container } from '@mui/material';
import { ShowsProvider } from '../features/shows/ShowsContext';
import AnimatedLayout from '../components/AnimatedLayout';
import Show from '../features/shows/Show';

function Shows() {
  return (
    <AnimatedLayout>
      <ShowsProvider>
        <Container maxWidth="lg" sx={{ overflow: 'auto' }}>
          <Show />
        </Container>
      </ShowsProvider>
    </AnimatedLayout>
  );
}

export default Shows;
