import styled from 'styled-components';
import ContentLayout from '../components/ContentLayout';
import { useEffect, useState } from 'react';

function Wishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'));
  const [filterList, setFilterList] = useState([]);

  useEffect(function () {
    setFilterList(wishlist);
  }, []);

  function handleAddList(type) {
    if (type === 'all') setFilterList(wishlist);
    else {
      setFilterList(wishlist.filter((list) => list.Type === type));
    }
  }

  function handleRmvList() {
    localStorage.clear();
    setFilterList([]);
  }

  return (
    <StyledWishlist>
      <StyledBtns>
        <button onClick={() => handleAddList('all')}>All</button>
        <button
          onClick={() => {
            handleAddList('movie');
          }}
        >
          Movies
        </button>
        <button onClick={() => handleAddList('series')}>Series</button>
        <button onClick={handleRmvList}>Remove All</button>
      </StyledBtns>
      <ContentLayout wishlist contentData={filterList} />
    </StyledWishlist>
  );
}

const StyledWishlist = styled.div`
  padding: 1rem;
`;

const StyledBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    width: 6.5rem;
    padding: 0.5rem;
    font-size: 0.9rem;
    background-color: #2c2c2c;
    border: 1px solid #404040;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    button:last-child {
      margin-left: auto;
      justify-content: space-between;
    }
  }
`;

export default Wishlist;
