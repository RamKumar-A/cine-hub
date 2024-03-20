import styled from 'styled-components';

function Loader() {
  return (
    <LoaderContainer>
      <div className="contentLoader"></div>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
