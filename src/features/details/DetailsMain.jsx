import {
  Alert,
  AlertTitle,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  Grid2,
  List,
  Stack,
  Typography,
} from '@mui/material';
import GenreDetails from './GenreDetails';
import Cast from './Cast';
import HeaderListItems from './HeaderListItems';
import { MdOutlineMovie } from 'react-icons/md';
import { HiOutlineTv, HiStar } from 'react-icons/hi2';

function DetailsMain({ details }) {
  const {
    Actors,
    Awards,
    BoxOffice,
    Director,
    Genre,
    Plot,
    Released,
    Runtime,
    Writer,
    Language,
    totalSeasons,
    Rated,
    Type,
    imdbRating,
    imdbVotes,
  } = details || {};
  return (
    <Grid2 size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 0 }}>
      <List
        sx={{
          display: { xs: 'flex', lg: 'none' },
          // flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <HeaderListItems
          primary={Type}
          icon={Type === 'movie' ? <MdOutlineMovie /> : <HiOutlineTv />}
          title="Type"
          secondary={Rated}
        />
        <HeaderListItems
          primary={imdbRating + ' /10'}
          secondary={imdbVotes}
          icon={<HiStar />}
          title="Imdb Rating"
        />
      </List>
      <Box sx={{ p: 1 }}>
        <Button
          variant="contained"
          sx={{ width: { xs: '100%', sm: 'fit-content' } }}
        >
          Add to wishlist
        </Button>
      </Box>
      <GenreDetails genre={Genre} />
      {Plot && Plot !== 'N/A' && (
        <Typography
          fontSize="1.05rem"
          variant="body1"
          color="text.secondary"
          py={2}
        >
          {Plot}
        </Typography>
      )}
      <>
        <Divider sx={{ bgcolor: '#444' }} />
        <Stack>
          {Director && Director !== 'N/A' && (
            <>
              <DetailsLabelValue label="Directors" value={Director} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {Writer && Writer !== 'N/A' && (
            <>
              <DetailsLabelValue label="Writers" value={Writer} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {Runtime && Runtime !== 'N/A' && (
            <>
              <DetailsLabelValue label="Runtime" value={Runtime} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {Language && Language !== 'N/A' && (
            <>
              <DetailsLabelValue label="Langugae" value={Language} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {BoxOffice && BoxOffice !== 'N/A' && (
            <>
              <DetailsLabelValue label="Box Office" value={BoxOffice} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {totalSeasons && (
            <>
              <DetailsLabelValue label="Total Seasons" value={totalSeasons} />
              <Divider sx={{ bgcolor: '#444' }} />
            </>
          )}
          {Released && Released !== 'N/A' && (
            <DetailsLabelValue label="Released" value={Released} />
          )}
        </Stack>
      </>

      {Awards !== 'N/A' && (
        <Alert variant="outlined" icon={false} color="primary">
          <AlertTitle fontSize={17} color="text.primary">
            Awards
          </AlertTitle>
          <Typography component="span" color="primary.main" fontSize={19}>
            {Awards}
          </Typography>
        </Alert>
      )}
      <Cast cast={Actors} />
    </Grid2>
  );
}

function DetailsLabelValue({ label, value }) {
  const values =
    label === 'Box Office'
      ? value?.replaceAll(',', '')?.split(',')
      : value?.split(',');
  return (
    <Stack direction="row" alignItems="center">
      <Typography
        paddingRight={2}
        py={1}
        fontSize={17}
        variant="subtitle1"
        component="span"
      >
        {label}
      </Typography>
      <Stack direction="row" component="span" alignItems="center">
        <Breadcrumbs separator="°">
          {values?.map((v) => (
            <Typography variant="overline" component="span" key={v}>
              {v}
            </Typography>
          ))}
        </Breadcrumbs>
      </Stack>
    </Stack>
  );
}

export default DetailsMain;
