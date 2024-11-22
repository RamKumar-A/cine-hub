import { useLocation, useOutlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './NavBar';
import { Box, Container } from '@mui/material';
import { WishlistProvider } from '../Context/WishlistContext';
import { EpisodesProvider } from '../Context/EpsisodesContext';
import { cloneElement, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DetailsProvider } from '../Context/DetailsContext';

function Applayout() {
  const ref = useRef(null);
  // const { scrollY } = useScroll({ container: ref });
  const location = useLocation();

  const element = useOutlet();
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        height: '100vh',
        maxHeight: '100vh',
      }}
    >
      <Header />
      <DetailsProvider>
        <EpisodesProvider>
          <WishlistProvider>
            <Container
              maxWidth="xl"
              component="main"
              ref={ref}
              sx={{ overflow: 'auto', height: '90vh', py: 2 }}
            >
              <AnimatePresence mode="wait">
                {element && cloneElement(element, { key: location.pathname })}
              </AnimatePresence>
            </Container>
          </WishlistProvider>
        </EpisodesProvider>
      </DetailsProvider>
      <Navbar ref={ref} />
    </Box>
  );
}

export default Applayout;
