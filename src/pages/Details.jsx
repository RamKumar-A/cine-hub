import { useLocation, useNavigate } from 'react-router-dom';
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

import { useDetails } from '../Context/DetailsContext';

import DetailsHeader from '../features/details/DetailsHeader';
import DetailsImage from '../features/details/DetailsImage';
import DetailsMain from '../features/details/DetailsMain';

function Details() {
  const { details, isLoading } = useDetails();
  const { Poster, Type, Title, imdbID, totalSeasons } = details || {};
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ width: '100%', py: 2 }}>
      {isLoading ? (
        <Backdrop open={isLoading}>
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
          {Type === 'series' && totalSeasons !== 'N/A' && (
            <Stack alignItems="center" p={3}>
              <Button
                variant="contained"
                sx={{ width: 'fit-content' }}
                endIcon={<HiChevronRight />}
                onClick={() => {
                  navigate({
                    search: 'season=1',
                    pathname: `/search/${Title}/${imdbID}/seasons`,
                  });
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
  const location = useLocation();
  const navigate = useNavigate();
  if (details?.Type !== 'episode') return;
  const { seriesName } = location.state || {};
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
        onClick={() => {
          navigate({
            pathname: `/search/${seriesName}/${details?.seriesID}/seasons`,
            search: 'season=1',
          });
        }}
      >
        All Episodes
      </Button>
    </Box>
  );
}

export default Details;
