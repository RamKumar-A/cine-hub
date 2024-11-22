import { Container } from '@mui/material';
import SeasonHeader from '../features/seasons/SeasonHeader';
import SeasonMain from '../features/seasons/SeasonMain';
import { useDetails } from '../Context/DetailsContext';

function Seasons() {
  const { seasonDetails } = useDetails();
  const { Poster, Title, totalSeasons } = seasonDetails || {};
  return (
    <Container maxWidth={'lg'}>
      <SeasonHeader poster={Poster} title={Title} />
      <SeasonMain totalSeasons={totalSeasons} />
    </Container>
  );
}

export default Seasons;
