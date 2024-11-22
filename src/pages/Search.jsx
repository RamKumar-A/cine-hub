import { Container } from '@mui/material';

import SearchQuery from '../features/search/SearchQuery';
import { SearchProvider } from '../features/search/SearchContext';
import AnimatedLayout from '../components/AnimatedLayout';

function Search() {
  return (
    <AnimatedLayout>
      <SearchProvider>
        <Container maxWidth={'lg'} sx={{ overflow: 'auto' }}>
          <SearchQuery />
        </Container>
      </SearchProvider>
    </AnimatedLayout>
  );
}

export default Search;
