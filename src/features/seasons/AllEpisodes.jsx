import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import { format, parseISO } from 'date-fns';
import { HiStar } from 'react-icons/hi2';
// import { useEpisodes } from '../../Context/EpsisodesContext';
import { generateRatingColor } from '../../helpers/generateRatingColor';
import { useDetails } from '../../Context/DetailsContext';
import { useNavigate } from 'react-router-dom';

function AllEpisodes({ season, episodeDetail }) {
  // const { handleEpisode } = useEpisodes();
  const { getDetails } = useDetails();
  const navigate = useNavigate();
  const { Title, Released, Episode, imdbRating, imdbID } = episodeDetail || {};
  return (
    <Card
      sx={{ maxWidth: { xs: '100%', md: '50%' }, width: '100%' }}
      variant="outlined"
    >
      <CardContent>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          py={1}
        >
          <Box>
            <Typography
              component="span"
              fontSize={'0.85rem'}
              color="text.secondary"
            >
              {`S${season}E${Episode}`}{' '}
            </Typography>
            <Typography component="span" fontSize={'1.3rem'} fontWeight={500}>
              {Title}
            </Typography>
          </Box>

          {Released !== 'N/A' && (
            <Typography
              variant="body1"
              component="span"
              fontSize={14}
              fontWeight={400}
              color="text.secondary"
              sx={{ display: { xs: 'none', md: 'inline' } }}
            >
              {format(parseISO(Released || new Date()), 'E LLL dd y')}
            </Typography>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" gap={1.5} py={1}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: generateRatingColor(imdbRating),
            }}
          >
            <HiStar size={14} />
          </Avatar>
          <Typography
            fontWeight={300}
            color={generateRatingColor(imdbRating)}
            component="span"
          >
            {imdbRating} / 10
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            getDetails(imdbID);
            navigate(`/search/${Title}/${imdbID}`);
          }}
          size={'small'}
        >
          view episode
        </Button>
      </CardActions>
    </Card>
  );
}

export default AllEpisodes;
