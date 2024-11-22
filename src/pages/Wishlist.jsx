import { Button, Container, Stack } from '@mui/material';
import ContentLayout from '../components/ContentLayout';
import { useWishlist } from '../Context/WishlistContext';
import { useState } from 'react';
const buttons = ['all', 'movies', 'series'];

function Wishlist() {
  const { handleFilteredList, filteredList, clearStorage } = useWishlist();
  const [activeBtn, setActiveBtn] = useState('all');
  return (
    <Container maxWidth="xl">
      <Stack direction="row" flexWrap="wrap" gap={2.5}>
        {buttons.map((btn) => (
          <Button
            key={btn}
            variant={activeBtn === btn ? 'contained' : 'outlined'}
            onClick={() => {
              handleFilteredList(btn);
              setActiveBtn(btn);
            }}
          >
            {btn}
          </Button>
        ))}

        <Button variant="outlined" onClick={clearStorage}>
          Clear All
        </Button>
      </Stack>
      <ContentLayout isWishlist contentData={filteredList} />
    </Container>
  );
}

export default Wishlist;
