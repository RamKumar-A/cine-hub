import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WishlistButton({ data, fullWidth, variant, size }) {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
  useEffect(() => {
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
      onClick={() =>
        handleWishlistBtn(wishlist.some((list) => list.imdbID === data.imdbID))
      }
      fullWidth={fullWidth}
      variant={variant || 'outlined'}
      size={size}
    >
      Add To Wishlist
      {/* {wishlist.some((list) => list.imdbID === data.imdbID)
        ? 'Open Wishlist'
        : 'Add To Wishlist'} */}
    </Button>
  );
}

export default WishlistButton;
