import { OMDB_API_KEY, OMDB_BASE_URL } from './API_KEY';

export async function search(query, type = 'movie', pageNum = 1) {
  try {
    const res = await fetch(
      `${OMDB_BASE_URL}?${OMDB_API_KEY}&type=${type}&s=${query}&page=${pageNum}`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
}
