import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <Box sx={{ cursor: 'pointer', px: 1 }} onClick={() => navigate('/')}>
      <Typography
        variant="h4"
        fontSize={{ xs: '1rem', md: '1.5rem' }}
        color="primary.contrastText"
      >
        Cine Hub
      </Typography>
    </Box>
  );
}

// const LogoContainer = styled.div`
//   height: 2rem;
//   cursor: pointer;
//   color: #d9d9d9;
//   letter-spacing: 0.2rem;
//   font-family: 'Oswald';
// `;

export default Logo;
