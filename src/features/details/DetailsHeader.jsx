import { Box, Breadcrumbs, List, Stack, Typography } from '@mui/material';
import { HiOutlineTv, HiStar } from 'react-icons/hi2';
import { MdOutlineMovie } from 'react-icons/md';
import HeaderListItems from './HeaderListItems';
import { generateRatingColor } from '../../helpers/generateRatingColor';

function DetailsHeader({ details }) {
  const { Title, Year, Runtime, Rated, imdbRating, imdbVotes, Type } =
    details || {};
  return (
    <Stack
      sx={{
        width: '100%',
      }}
      direction="row"
      alignItems="center"
      justifyContent={{ xs: 'center', md: 'space-between' }}
      flexWrap="wrap"
    >
      <Box>
        <Typography
          variant="h3"
          fontSize={{ xs: '2rem', md: '2.5rem' }}
          // color="text.primary"
        >
          {Title}
        </Typography>
        <Stack direction="row" component="span" alignItems="center">
          <Breadcrumbs separator="°" sx={{ color: 'secondary.light' }}>
            {Year && Year !== 'N/A' && (
              <Typography
                variant="subtitle2"
                color="secondary.light"
                gutterBottom
              >
                {Year}
              </Typography>
            )}
            {Rated && Rated !== 'N/A' && (
              <Typography
                variant="subtitle2"
                color="secondary.light"
                gutterBottom
              >
                {Rated}
              </Typography>
            )}
            {Runtime && Runtime !== 'N/A' && (
              <Typography
                variant="subtitle2"
                color="secondary.light"
                gutterBottom
              >
                {Runtime}
              </Typography>
            )}
          </Breadcrumbs>
        </Stack>
      </Box>
      <List sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}>
        <HeaderListItems
          primary={Type}
          icon={Type === 'movie' ? <MdOutlineMovie /> : <HiOutlineTv />}
          title="Type"
          secondary={Rated && Rated !== 'N/A' ? Rated : ''}
        />
        {imdbRating && imdbRating !== 'N/A' && (
          <HeaderListItems
            primary={imdbRating + ' /10'}
            secondary={imdbVotes}
            icon={<HiStar />}
            title="Imdb Rating"
            color={generateRatingColor(imdbRating)}
            secondaryColor={'#00b900'}
            iconColor={generateRatingColor(imdbRating)}
          />
        )}
      </List>
    </Stack>
  );
}

export default DetailsHeader;
