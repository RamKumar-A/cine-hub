import { Stack } from '@mui/material';
import Genre from '../../components/Genre';
import Category from '../../components/Category';
import CardLayout from '../../components/CardLayout';
import { useShows } from './ShowsContext';

function Show() {
  const { data, isLoading, page, setPage } = useShows();

  return (
    <div>
      <Stack direction="row" gap={1} py={2}>
        <Genre />
        <Category />
      </Stack>
      <CardLayout
        contentData={data}
        isLoading={isLoading}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default Show;
