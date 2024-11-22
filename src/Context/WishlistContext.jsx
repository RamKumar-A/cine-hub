import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem('wishlist')) || []
  );

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleFilteredList = useCallback(
    function (type) {
      if (type === 'movies') {
        setFilteredList(wishlist.filter((list) => list.Type === 'movie'));
      } else if (type === 'series') {
        setFilteredList(wishlist.filter((list) => list.Type === 'series'));
      } else {
        setFilteredList(wishlist);
      }
    },
    [wishlist]
  );

  function removeFromWishlist(id) {
    setWishlist(wishlist.filter((list) => list.imdbID !== id));
  }

  function handleWishlist(data) {
    setWishlist([...wishlist, data]);
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
  if (context === undefined) throw new Error('Used outside the context');
  return context;
}

export { useWishlist, WishlistProvider };
