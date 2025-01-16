import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { useSeasons } from '../../Context/SeasonsContext';
import { range } from '../../helpers/range';

import Episodes from './Episodes';

function SeasonMain() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: seasonDetails, isLoading, isEpisodeLoading } = useSeasons();
  const seasons = range(1, +seasonDetails?.totalSeasons + 1, 1);
  const handleSetSearchParams = useCallback(
    (selectedSeason) => {
      searchParams.set('season', selectedSeason);
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams]
  );

  return (
    <Box>
      <Typography gutterBottom fontSize={18} fontWeight={500}>
        Seasons
      </Typography>
      <Stack direction="row" sx={{ width: '50%', overflow: 'auto' }} gap={2}>
        {seasons.map((s) => (
          <IconButton
            key={s}
            onClick={() => {
              handleSetSearchParams(s);
            }}
          >
            <Avatar
              sx={{
                bgcolor:
                  +searchParams.get('season') === s ? 'primary.main' : '',
              }}
            >
              {s}
            </Avatar>
          </IconButton>
        ))}
      </Stack>
      <Stack py={3} gap={2} justifyContent="center">
        {(isLoading || isEpisodeLoading) && (
          <Box sx={{ width: { xs: '100%', md: '50%' }, alignSelf: 'center' }}>
            <CircularProgress />
          </Box>
        )}
        {seasonDetails?.Episodes?.map((d) => (
          <Episodes
            key={d.imdbID}
            seriesName={seasonDetails?.Title}
            season={seasonDetails?.Season}
            episodeDetail={d}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default SeasonMain;

// useEffect(
//   function () {
//     setSelectedSeason(+searchParams.getAll('season')[0]);
//   },
//   [searchParams]
// );
// const handleSetSearchParams = useCallback(
//   function (season) {
//     const updateParams = new URLSearchParams(searchParams);
//     updateParams.set('season', season || 1);
//     navigate({
//       pathname: location.pathname,
//       search: updateParams.toString(),
//     });
//   },
//   [navigate, searchParams, location]
// );
