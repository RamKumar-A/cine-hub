import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { motion, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiOutlineMagnifyingGlass, HiOutlineTv } from 'react-icons/hi2';
import { MdOutlineMovie } from 'react-icons/md';

import { useLocation, useNavigate } from 'react-router-dom';

function Navbar({ scrollY }) {
  const [isHidden, setIsHidden] = useState(true);
  const lastRef = useRef(0);
  const location = useLocation();
  const currentLocation = location.pathname;
  // const { scrollY } = useScroll({ container: ref });
  // console.log(currentLocation);
  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference < 50);

      lastRef.current = y;
    }
  });

  const navigate = useNavigate();

  function handleNavigation(route) {
    navigate(route);
  }

  return (
    <MotionNavbar
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
      animate={isHidden ? 'visible' : 'hidden'}
      variants={{
        visible: {
          y: '0%',
        },
        hidden: {
          y: '100%',
        },
      }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <BottomNavigation showLabels value={currentLocation}>
        <BottomNavigationAction
          label="Movies"
          value="/movies"
          icon={<MdOutlineMovie size={20} />}
          onClick={() => handleNavigation('/movies')}
        />
        <BottomNavigationAction
          label="Shows"
          value="/shows"
          icon={<HiOutlineTv size={20} />}
          onClick={() => handleNavigation('/shows')}
        />
        <BottomNavigationAction
          label="Search"
          value="/search"
          icon={<HiOutlineMagnifyingGlass size={20} />}
          onClick={() => handleNavigation('/search')}
        />
      </BottomNavigation>
    </MotionNavbar>
  );
}

const MotionNavbar = motion(Paper);

export default Navbar;

/* <BottomNavigationAction
          label="Home"
          icon={<HiHomeModern size={20} />}
          onClick={() => handleNavigation('/')}
        /> */
