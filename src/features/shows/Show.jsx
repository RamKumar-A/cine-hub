import { Stack } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useShows } from './ShowsContext';

import Genre from '../../components/Genre';
import Category from '../../components/Category';
import CardLayout from '../../components/CardLayout';

function Show() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useShows();

  function setPage(num) {
    const params = new URLSearchParams(searchParams);
    params.set('page', num || 1);
    setSearchParams(params);
  }

  return (
    <div>
      <Stack direction="row" gap={1} py={2}>
        <Genre />
        <Category />
      </Stack>
      <CardLayout contentData={data} isLoading={isLoading} setPage={setPage} />
    </div>
  );
}

export default Show;
