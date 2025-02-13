import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import { HiArrowLeft } from 'react-icons/hi2';

function SeasonHeader({ poster, title, imdbID }) {
  const navigate = useNavigate();
  return (
    <Box component="section">
      <Button
        sx={{ color: 'primary.main' }}
        startIcon={<HiArrowLeft />}
        variant="outlined"
        onClick={() => {
          navigate(`/search/${title}/${imdbID}`);
        }}
      >
        Back to series
      </Button>
      {/* Series Details */}
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="flex-start"
        gap={2.5}
        py={2}
      >
        <Box sx={{ height: '12rem', display: { xs: 'none', sm: 'block' } }}>
          <img width="100%" height="100%" src={poster} alt={title} />
        </Box>
        <Box>
          <Typography color="text.primary" fontSize={'1.5rem'}>
            {title}
          </Typography>
          <Typography
            gutterBottom
            color="primary.main"
            fontSize={{ xs: '2.5rem', sm: '3rem' }}
          >
            Episode List
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SeasonHeader;
