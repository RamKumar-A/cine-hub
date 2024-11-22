import { Card, CardMedia, Grid2 } from '@mui/material';

function DetailsImage({ poster }) {
  return (
    <Grid2 sx={{ position: 'relative' }} py={2}>
      <Card sx={{ position: 'sticky', top: 0 }}>
        <CardMedia component="img" image={poster} alt="green iguana" />
        {/* <CardActions sx={{ position: 'absolute', top: 0, bgcolor: '#ff0ff0' }}>
          <IconButton>
            <HiOutlineBookmark />
          </IconButton>
        </CardActions> */}
      </Card>
    </Grid2>
  );
}

export default DetailsImage;
