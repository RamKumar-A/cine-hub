import { HiOutlineMagnifyingGlass, HiOutlineTv } from 'react-icons/hi2';
import { MdOutlineMovie } from 'react-icons/md';
import {
  ItemText,
  NavItem,
  NavItemContent,
  NavLinkStyled,
  NavList,
} from './styleComponents/StyledNavbar';

function NavBar() {
  return (
    <NavList>
      {/* <NavLinkStyled exact activeClassName="active" to="/">
        <NavItem>
          <NavItemContent>
            <HiOutlineHome className="icon" />
            <ItemText>Home</ItemText>
          </NavItemContent>
        </NavItem>
      </NavLinkStyled> */}
      <NavLinkStyled activeClassName="active" to="/movies">
        <NavItem>
          <NavItemContent>
            <MdOutlineMovie className="icon" />
            <ItemText>Movies</ItemText>
          </NavItemContent>
        </NavItem>
      </NavLinkStyled>
      <NavLinkStyled activeClassName="active" to="/shows">
        <NavItem>
          <NavItemContent>
            <HiOutlineTv className="icon" />
            <ItemText>Shows</ItemText>
          </NavItemContent>
        </NavItem>
      </NavLinkStyled>
      <NavLinkStyled activeClassName="active" to="search">
        <NavItem>
          <NavItemContent>
            <HiOutlineMagnifyingGlass className="icon" />
            <ItemText>Search</ItemText>
          </NavItemContent>
        </NavItem>
      </NavLinkStyled>
    </NavList>
  );
}

export default NavBar;
