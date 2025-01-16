import { cloneElement, useRef } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, useScroll } from 'framer-motion';
import { Box, Container } from '@mui/material';

import { WishlistProvider } from '../Context/WishlistContext';
import { SeasonProvider } from '../Context/SeasonsContext';
import { DetailsProvider } from '../Context/DetailsContext';

import Header from './Header';
import NavBar from './NavBar';

function Applayout() {
  const ref = useRef(null);
  const { scrollY } = useScroll({ container: ref });
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
        <SeasonProvider>
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
        </SeasonProvider>
      </DetailsProvider>
      <NavBar scrollY={scrollY} />
    </Box>
  );
}

export default Applayout;
