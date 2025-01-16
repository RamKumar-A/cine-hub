import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';

import { useSearch } from './SearchContext';

import CardLayout from '../../components/CardLayout';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ITEMS_PER_PAGE, TOTAL_NUM_OF_PAGES } from '../../constants/constants';

function SearchQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');

  const { queryData, handleQuery, isLoading } = useSearch();

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set('query', query || '');
    params.set('type', type || 'all');
    setSearchParams(params);
    handleQuery();
  }

  function setPage(num) {
    const params = new URLSearchParams(searchParams);
    params.set('page', num || 1);
    setSearchParams(params);
  }

  const totalPages =
    queryData?.totalResults / ITEMS_PER_PAGE > TOTAL_NUM_OF_PAGES
      ? TOTAL_NUM_OF_PAGES
      : queryData?.totalResults / ITEMS_PER_PAGE;

  return (
    <>
      <Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          width={'100%'}
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          gap={2}
          component="form"
          onSubmit={handleSubmit}
        >
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="label-type">Type</InputLabel>
            <Select
              labelId="label-type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={'all'}>All</MenuItem>
              <MenuItem value={'movie'}>Movie</MenuItem>
              <MenuItem value={'series'}>Series</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="filled"
            fullWidth
            label="Search"
            required
            value={query}
            sx={{ bgcolor: 'transparent' }}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Box sx={{ alignSelf: 'flex-end' }}>
            <Button variant="contained" type="submit" color="primary">
              Submit
            </Button>
          </Box>
        </Stack>
      </Box>
      <CardLayout
        isSearch={true}
        isLoading={isLoading}
        contentData={queryData?.Search}
        pageCount={Math.ceil(totalPages)}
        setPage={setPage}
      />
    </>
  );
}

export default SearchQuery;
