import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import styled from 'styled-components';
import { useRef } from 'react';
import { OutletProvider } from '../Context/OutletContext';

function Applayout() {
  const ref = useRef();
  return (
    <StyledApplayout>
      <Header />
      <OutletProvider refs={ref}>
        <StyledContent ref={ref}>
          <Outlet />
        </StyledContent>
      </OutletProvider>
      <NavBar />
    </StyledApplayout>
  );
}

const StyledContent = styled.div`
  width: 100%;
  height: calc(100vh - 8.5rem - 1px);
  overflow-y: auto;
`;

const StyledApplayout = styled.div`
  background-color: #353535;
`;

export default Applayout;
