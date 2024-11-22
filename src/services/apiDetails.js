import { OMDB_API_KEY, OMDB_BASE_URL } from './API_KEY';

export async function getDetails(imdbID) {
  const omdbRes = await fetch(`${OMDB_BASE_URL}?${OMDB_API_KEY}&i=${imdbID}`);
  const omdbData = await omdbRes.json();
  if (omdbData.Error) {
    return null;
  }
  return omdbData;
}
