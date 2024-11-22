import { Button, IconButton, Stack } from '@mui/material';
import Logo from './Logo';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        py: '1rem',
        height: '10vh',
        bgcolor: 'background.paper',
        px: '1.5rem',
      }}
    >
      <Logo />
      <Button
        startIcon={<HiOutlineBookmark />}
        onClick={() => navigate('/wishlist')}
        sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
        variant="contained"
        size="small"
      >
        Wishlist
      </Button>
      <IconButton
        sx={{
          display: { xs: 'inline-flex', sm: 'none' },
        }}
        color="primary"
        onClick={() => navigate('/wishlist')}
      >
        <HiOutlineBookmark />
      </IconButton>
    </Stack>
  );
}

export default Header;
