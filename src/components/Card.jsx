import {
  Avatar,
  Button,
  Card as CardContainer,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { HiStar } from 'react-icons/hi2';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWishlist } from '../Context/WishlistContext';
import { generateRatingColor } from '../helpers/generateRatingColor';
import { useDetails } from '../Context/DetailsContext';

function Card({ data, isSearch, handleSingleQueryData }) {
  const { handleWishlist, removeFromWishlist } = useWishlist();
  const location = useLocation();
  const navigate = useNavigate();
  const isWishlist = location.pathname.split('/')[1] === 'wishlist';
  const { getDetails } = useDetails();

  if (!data) return null;
  return (
    <CardContainer sx={{ maxWidth: 275, width: 275, p: 1 }}>
      <CardActionArea
        onClick={() => {
          if (isSearch) {
            handleSingleQueryData?.(data?.imdbID);
          } else {
            getDetails(data?.imdbID);
          }
          navigate(`/search/${data?.Title}/${data?.imdbID}`);
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: 275,
            objectFit: 'fill',
            borderRadius: 'inherit',
          }}
          src={data?.Poster}
          title={data?.Title}
        />
        <CardContent sx={{ px: 0.5 }}>
          {!isSearch && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {data?.imdbRating && (
                <Chip
                  avatar={
                    <Avatar
                      sx={{ bgcolor: generateRatingColor(+data?.imdbRating) }}
                    >
                      <HiStar color={'#fff'} />
                    </Avatar>
                  }
                  size="small"
                  label={
                    <Typography fontSize={12}>{data?.imdbRating}</Typography>
                  }
                  sx={{ color: generateRatingColor(+data?.imdbRating) }}
                />
              )}
              <Chip
                size="small"
                variant="outlined"
                label={<Typography fontSize={12}>{data?.Rated} </Typography>}
              />
            </Stack>
          )}
          <Tooltip title={data?.Title || data}>
            <Typography
              gutterBottom
              variant="h6"
              fontSize={22}
              component="div"
              className="line-clamp"
            >
              {data?.Title || data}
            </Typography>
          </Tooltip>
          {!isSearch && (
            <Tooltip title={data?.Plot}>
              <Typography
                variant="body2"
                component="span"
                fontSize={14}
                sx={{ color: 'text.secondary' }}
                className="line-clamp"
              >
                {data?.Plot}
              </Typography>
            </Tooltip>
          )}
        </CardContent>
      </CardActionArea>
      {!isSearch && (
        <CardActions
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={() => {
              if (isWishlist) {
                removeFromWishlist(data.imdbID);
              } else {
                handleWishlist(data);
              }
            }}
            // fullWidth
            size="small"
            variant="contained"
          >
            {isWishlist ? 'Remove' : 'Add to wishlist'}
          </Button>
        </CardActions>
      )}
    </CardContainer>
  );
}

export default Card;
