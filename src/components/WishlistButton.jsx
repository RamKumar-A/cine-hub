import { useEffect, useState } from 'react';
import { Button } from './styleComponents/Button';
import { HiHeart } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function WishlistButton({ data }) {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
  useEffect(() => {
    // Update localStorage whenever wishlist state changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  function handleWishlistBtn(condition) {
    // Update wishlist state by appending new data
    if (condition) navigate('/wishlist');
    else setWishlist([...wishlist, data]);
  }

  return (
    <Button
      width="8rem"
      secondary
      onClick={() =>
        handleWishlistBtn(wishlist.some((list) => list.imdbID === data.imdbID))
      }
    >
      <HiHeart
        style={{
          color: wishlist.some((list) => list.imdbID === data.imdbID)
            ? 'red'
            : '#fff',
        }}
      />
      {wishlist.some((list) => list.imdbID === data.imdbID)
        ? 'Open Wishlist'
        : 'Add To Wishlist'}
    </Button>
  );
}

export default WishlistButton;
