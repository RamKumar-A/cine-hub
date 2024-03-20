import styled from 'styled-components';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';

function ContentLayout({ contentData, wishlist, isLoading }) {
  return (
    <StyledContentLayout wishlist={wishlist}>
      {contentData?.map((d, i) => (
        <NavLink
          key={i}
          to={`/search/${d?.Title}`}
          state={{ myState: d || [] }}
        >
          <Card data={d || []} />
        </NavLink>
      ))}
      {isLoading && <Loader />}
    </StyledContentLayout>
  );
}

const StyledContentLayout = styled.div`
  display: flex;
  justify-content: ${(props) => (props.wishlist ? 'flex-start' : 'center')};
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem;
`;

export default ContentLayout;
