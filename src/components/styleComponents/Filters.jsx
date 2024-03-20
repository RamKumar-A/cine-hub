import styled from 'styled-components';
export const StyledFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  position: relative;
  justify-content: space-around;

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`;
export const FilterHeading = styled.h2`
  color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const FilterListContainer = styled.ul`
  background-color: #242424;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  position: absolute;
  width: 15rem;
  top: 125%;
  ${({ height }) => height && 'height: 50vh;'}

  overflow-y: auto;
  z-index: 50;

  .selected {
    background-color: red;
  }

  @media (max-width: 400px) {
    top: 125%;
    ${({ category }) => category && 'left:25%;'}
  }
`;

export const FilterList = styled.li`
  list-style-type: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: #2c2c2c;
  border: 1px solid #404040;
  color: #fff;
  font-size: 1.2rem;
`;
