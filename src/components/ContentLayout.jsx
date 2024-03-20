import styled from 'styled-components';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import Loader from './Loader';
import EmptyPage from '../pages/EmptyPage';

function ContentLayout({ contentData, wishlist, isLoading }) {
  return (
    <StyledContentLayout wishlist={wishlist}>
      {contentData?.length > 0 ? (
        contentData?.map((d, i) => (
          <NavLink
            key={i}
            to={`/search/${d?.Title}`}
            state={{ myState: d || [] }}
          >
            <Card data={d || []} />
          </NavLink>
        ))
      ) : (
        <EmptyPage />
      )}
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
