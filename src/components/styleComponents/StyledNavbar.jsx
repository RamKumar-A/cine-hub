import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList = styled.ul`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 1.1rem;
  border-top: 1px solid #4f4f4f;
  @media (max-width: 450px) {
    justify-content: space-evenly;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #414141;
    color: #ececec;
  }
`;

export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 450px) {
    justify-content: space-around;
    font-size: 1.5rem;
  }

  .icon {
    font-size: 1.5rem;
  }
`;

export const NavItem = styled.li`
  list-style-type: none;
  padding: 0.5rem;
`;

export const ItemText = styled.span`
  display: inline-block;
  @media (max-width: 450px) {
    display: none;
  }
`;
