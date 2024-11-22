import { OMDB_API_KEY, OMDB_BASE_URL } from './API_KEY';

export async function getSearch(query, pageNum = 1, type) {
  try {
    const res = await fetch(
      `${OMDB_BASE_URL}?${OMDB_API_KEY}&s=${query}&page=${pageNum}${
        type && type !== 'all' && `&type=${type}`
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
