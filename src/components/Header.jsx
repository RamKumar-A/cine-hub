import styled from 'styled-components';
import Logo from './Logo';
import { HiHeart } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader style={{ padding: ' 1rem' }}>
      <Logo />
      <span onClick={() => navigate('/wishlist')}>
        <HiHeart style={{ color: 'red', fontSize: '1.5rem' }} />
        Wishlist
      </span>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Raleway';
  border-bottom: 1px solid #4f4f4f;
  & span {
    cursor: pointer;
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
    background-color: #4f4f4f;
    display: flex;
    color: #fff;
    align-items: center;
    gap: 0.2rem;
    font-weight: 500;
  }
`;

export default Header;
