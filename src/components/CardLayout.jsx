import Card from './Card';
import EmptyPage from '../pages/EmptyPage';
import {
  Backdrop,
  CircularProgress,
  Grid2,
  Pagination,
  Stack,
} from '@mui/material';
import { TOTAL_NUM_OF_PAGES } from '../constants/constants';

function CardLayout({
  contentData,
  isLoading,
  page,
  setPage,
  isWishlist,
  isSearch,
  pageCount,
  handleSingleQueryData,
}) {
  if (isLoading) {
    return (
      <Backdrop open={isLoading}>
        <CircularProgress />
      </Backdrop>
    );
  }
  return (
    <Grid2 container justifyContent="center" component="section" sx={{ py: 2 }}>
      <Grid2
        container
        alignItems="center"
        justifyContent="center"
        gap={2}
        size={12}
      >
        {contentData?.length > 0 ? (
          contentData?.map((d, i) => (
            <Card
              handleSingleQueryData={
                handleSingleQueryData && handleSingleQueryData
              }
              isSearch={isSearch}
              key={i}
              data={d || []}
            />
          ))
        ) : (
          <EmptyPage />
        )}
      </Grid2>

      {!isLoading && !isWishlist && contentData?.length > 0 && (
        <Stack alignItems="center" sx={{ p: 2 }}>
          <Pagination
            count={pageCount || TOTAL_NUM_OF_PAGES}
            page={page}
            color="primary"
            size="large"
            onChange={(_, value) => setPage(value)}
          />
        </Stack>
      )}
    </Grid2>
  );
}

export default CardLayout;

/* <Stack
  direction="row"
  alignItems="center"
  justifyContent={
    isWishlist ? 'flex-start' : { xs: 'center', lg: 'space-between' }
  }
  flexWrap="wrap"
  gap={{ xs: 2.5, lg: isWishlist ? 2.5 : 0 }}
  rowGap={{ xs: 2.5, lg: 2.5 }}
>
  {contentData?.length > 0 ? (
    contentData?.map((d, i) => (
      <Card
        handleSingleQueryData={handleSingleQueryData && handleSingleQueryData}
        isSearch={isSearch}
        key={i}
        data={d || []}
      />
    ))
  ) : (
    <EmptyPage />
  )}
</Stack>; */
