import { Chip, Stack, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

function GenreChips() {
  const [searchParams] = useSearchParams();
  const getGenre = searchParams.getAll('genre');
  const genres = getGenre?.[0]?.split(',');
  if (!genres) return null;
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ py: 2 }}
      flexWrap="wrap"
      gap={1}
    >
      <Typography sx={{ color: 'primary.contrastText' }}>Genres:</Typography>
      {genres?.map((genre, i) => (
        <Chip
          key={i}
          size="small"
          label={
            <Typography color="text.main" fontSize={10}>
              {genre}
            </Typography>
          }
          sx={{ bgcolor: 'primary.dark' }}
        />
      ))}
    </Stack>
  );
}

export default GenreChips;
