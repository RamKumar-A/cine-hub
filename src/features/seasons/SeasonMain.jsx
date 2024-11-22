import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { range } from '../../helpers/range';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useEpisodes } from '../../Context/EpsisodesContext';
import AllEpisodes from './AllEpisodes';
import { useDetails } from '../../Context/DetailsContext';

function SeasonMain() {
  const { seasonDetails } = useDetails();
  const seasons = range(1, +seasonDetails?.totalSeasons + 1, 1);
  const [searchParams] = useSearchParams();
  const [selectedSeason, setSelectedSeason] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const { data, isLoading, isEpisodeLoading } = useEpisodes();

  const handleSetSearchParams = useCallback(
    function (season) {
      const updateParams = new URLSearchParams(searchParams);
      updateParams.set('season', season || 1);
      navigate({
        pathname: location.pathname,
        search: updateParams.toString(),
      });
    },
    [navigate, searchParams, location]
  );

  useEffect(
    function () {
      setSelectedSeason(+searchParams.getAll('season')[0]);
    },
    [searchParams]
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
                bgcolor: selectedSeason === s ? 'primary.main' : '',
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
        {data?.Episodes?.map((d) => (
          <AllEpisodes key={d.imdbID} season={data.Season} episodeDetail={d} />
        ))}
      </Stack>
    </Box>
  );
}

export default SeasonMain;
