import { createContext, useContext, useEffect, useState } from 'react';

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );
  const [filteredList, setFilteredList] = useState([...wishlist]); // Make `filteredList` stateful

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    setFilteredList([...wishlist]); // Keep filteredList in sync
  }, [wishlist]);

  const handleFilteredList = (type) => {
    if (type === 'movies') {
      setFilteredList(wishlist.filter((list) => list.Type === 'movie'));
    } else if (type === 'series') {
      setFilteredList(wishlist.filter((list) => list.Type === 'series'));
    } else {
      setFilteredList([...wishlist]); // Show all items if no filter type is specified
    }
  };

  function removeFromWishlist(id) {
    setWishlist(wishlist.filter((list) => list.imdbID !== id));
  }

  function handleWishlist(data) {
    if (!wishlist.some((item) => item.imdbID === data.imdbID)) {
      setWishlist([...wishlist, data]);
    }
  }

  function clearStorage() {
    localStorage.removeItem('wishlist');
    setWishlist([]);
    setFilteredList([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        filteredList,
        handleWishlist,
        handleFilteredList,
        clearStorage,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined)
    throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
}

export { useWishlist, WishlistProvider };
