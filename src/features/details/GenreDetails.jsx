import { Chip, Stack, Typography } from '@mui/material';

function GenreDetails({ genre }) {
  const genres = genre?.split(',');
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ py: 2 }}
      flexWrap="wrap"
      gap={1}
    >
      {genres?.map((genre, i) => (
        <Chip
          key={i}
          label={<Typography fontSize={{ xs: 13, sm: 15 }}>{genre}</Typography>}
          size={'small'}
          variant="outlined"
        />
      ))}
    </Stack>
  );
}

export default GenreDetails;
