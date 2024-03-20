import {
  OMDB_API_KEY,
  OMDB_BASE_URL,
  TRAKT_BASE_URL,
  headers,
} from './API_KEY';

export async function getMovies(
  category = 'trending',
  genre = [],
  pageNum = 1,
  limit = 20
) {
  let allMovies = [];
  let genres = [];
  if (genre?.length > 0) {
    genres = genre?.join(',');
  }

  try {
    const api = `${TRAKT_BASE_URL}movies/${
      category === 'played' ? category + '/weekly' : category
    }?limit=${limit}&page=${pageNum}${
      genre?.length > 0 ? `&genres=${genres}` : ''
    }`;

    const traktRes = await fetch(api, { method: 'GET', headers: headers });
    const traktData = await traktRes.json();
    // console.log('Trakt API Response:', traktData);

    const filtered = await Promise.all(
      traktData?.map(async (movie) => {
        const omdbRes = await fetch(
          `${OMDB_BASE_URL}?${OMDB_API_KEY}&i=${
            category === 'popular' ? movie.ids.imdb : movie.movie.ids.imdb
          }`
        );
        const omdbData = await omdbRes.json();
        console.log('OMDB API Response:', omdbData);
        if (!omdbData.Error) return omdbData;

        return null;
      })
    );

    allMovies = allMovies.concat(filtered);
    return allMovies;
  } catch (error) {
    console.error('Error:', error);
  } finally {
  }
}
