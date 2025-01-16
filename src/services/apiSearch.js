import { OMDB_API_KEY, OMDB_BASE_URL } from './API_KEY';

export async function getSearch() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || 'all';
  const query = params.get('query') || '';
  const page = params.get('page') || 1;
  try {
    const res = await fetch(
      `${OMDB_BASE_URL}?${OMDB_API_KEY}&s=${query}&page=${page}${
        type !== 'all' && `&type=${type}`
      }`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}

export async function getSingleQueryData(imdbID) {
  const omdbRes = await fetch(`${OMDB_BASE_URL}?${OMDB_API_KEY}&i=${imdbID}`);
  const omdbData = await omdbRes.json();
  if (omdbData.Error) {
    return null;
  }
  return omdbData;
}
