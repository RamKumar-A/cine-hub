import { Container } from '@mui/material';

import { useDetails } from '../Context/DetailsContext';

import SeasonHeader from '../features/seasons/SeasonHeader';
import SeasonMain from '../features/seasons/SeasonMain';

function Seasons() {
  const { details } = useDetails();
  const { Poster, Title, imdbID } = details || {};
  return (
    <Container maxWidth={'lg'}>
      <SeasonHeader poster={Poster} title={Title} imdbID={imdbID} />
      <SeasonMain />
    </Container>
  );
}

export default Seasons;
