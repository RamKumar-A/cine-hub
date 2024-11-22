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
import CardLayout from '../../components/CardLayout';
import { useSearch } from './SearchContext';

function SearchQuery() {
  const {
    handleQuerySubmit,
    handleTypeChange,
    setQueryPage,
    setQuery,
    query,
    queryData,
    queryPage,
    type,
    handleSingleQueryData,
  } = useSearch();

  return (
    <>
      <Box>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          width={'100%'}
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
          gap={2}
          component="form"
          onSubmit={handleQuerySubmit}
        >
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="label-type">Type</InputLabel>
            <Select
              labelId="label-type"
              id="type"
              // margin="dense"
              value={type}
              onChange={handleTypeChange}
            >
              <MenuItem value={'all'}>All</MenuItem>
              <MenuItem value={'movie'}>Movie</MenuItem>
              <MenuItem value={'series'}>Series</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Search"
            required
            // margin="dense"
            value={query}
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
        contentData={queryData?.Search}
        page={queryPage}
        pageCount={5}
        setPage={setQueryPage}
        handleSingleQueryData={handleSingleQueryData}
      />
    </>
  );
}

export default SearchQuery;
