import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Logo() {
  const navigate = useNavigate();
  return (
    <LogoContainer onClick={() => navigate('/')}>
      <h2>Cine Hub</h2>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  height: 2rem;
  cursor: pointer;
  color: #d9d9d9;
  letter-spacing: 0.2rem;
  font-family: 'Oswald';
`;

export default Logo;
