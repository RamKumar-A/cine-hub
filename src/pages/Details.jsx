import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid2,
  Stack,
  Typography,
} from '@mui/material';
import { HiChevronRight } from 'react-icons/hi2';

import { useNavigate } from 'react-router-dom';
import DetailsHeader from '../features/details/DetailsHeader';
import DetailsImage from '../features/details/DetailsImage';
import DetailsMain from '../features/details/DetailsMain';
import { useDetails } from '../Context/DetailsContext';

function Details() {
  const {
    details,
    handleSeasonDetails,
    isLoading: isDetailsLoading,
  } = useDetails();

  const { Poster, Type, Title, imdbID } = details || {};
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ width: '100%', py: 2 }}>
      {isDetailsLoading ? (
        <Backdrop open={isDetailsLoading}>
          <CircularProgress />
        </Backdrop>
      ) : (
        <>
          <BackToSeries details={details} />
          <DetailsHeader details={details} />
          <Grid2
            container
            py={2}
            justifyContent={{ xs: 'center', lg: 'space-between' }}
          >
            <DetailsMain details={details} />
            <DetailsImage poster={Poster} />
          </Grid2>
          {Type === 'series' && (
            <Stack alignItems="center" p={3}>
              <Button
                variant="contained"
                sx={{ width: 'fit-content' }}
                endIcon={<HiChevronRight />}
                onClick={() => {
                  navigate(`/search/${Title}/${imdbID}/episodes`);
                  handleSeasonDetails(details);
                }}
              >
                See All Seasons
              </Button>
            </Stack>
          )}
        </>
      )}
    </Container>
  );
}

function BackToSeries({ details }) {
  const { getDetails } = useDetails();
  if (details?.Type !== 'episode') return;
  return (
    <Box>
      <Box component="span" sx={{ p: 1 }}>
        <Typography color="primary.contrastText" component="span">
          S{details?.Season}
        </Typography>
        <Typography color="primary.contrastText" component="span">
          E{details?.Episode}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{ color: 'primary.main' }}
        onClick={() => getDetails(details?.seriesID)}
      >
        All Episodes
      </Button>
    </Box>
  );
}

export default Details;
