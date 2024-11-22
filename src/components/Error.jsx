import { Box, Typography } from '@mui/material';
function Error({ message = 'Something went wrong!' }) {
  return (
    <Box className="error-container">
      <Typography component="h3">Error</Typography>
      <Typography component="p">{message}</Typography>
    </Box>
  );
}

export default Error;
