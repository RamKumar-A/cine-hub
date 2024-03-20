import styled from 'styled-components';
export const Button = styled.button`
  padding: 0.5rem 0;
  cursor: pointer;
  background-color: #696969;
  color: #fff;
  border: none;
  font-size: 0.9rem;
  background-color: orange;
  /* width: 10rem; */
  display: ${(props) => (props.secondary ? 'flex' : 'block')};
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  width: ${(props) => (props.width === '8rem' ? '8rem' : '50%')};
`;
