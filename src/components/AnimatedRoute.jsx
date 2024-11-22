import { AnimatePresence } from 'framer-motion';
import { cloneElement } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';

function AnimatedRoute() {
  const location = useLocation();
  const element = useOutlet();
  return (
    <AnimatePresence mode="wait">
      {element && cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default AnimatedRoute;
