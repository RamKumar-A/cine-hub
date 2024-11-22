import {
  apiOptions,
  OMDB_API_KEY,
  OMDB_BASE_URL,
  TRAKT_BASE_URL,
} from './API_KEY';

export async function getMovies(
  category = 'trending',
  genre = '',
  page = 1,
  limit = 5
) {
  try {
    const api = `${TRAKT_BASE_URL}movies/${
      category && (category === 'played' ? category + '/all' : category)
    }?limit=${limit}&page=${page}${genre && `&genres=${genre}`}`;

    const traktRes = await fetch(api, apiOptions);
    const traktData = await traktRes.json();
    // console.log('Trakt API Response:', traktData);
    const filter = traktData?.map(async (movie) => {
      const omdbRes = await fetch(
        `${OMDB_BASE_URL}?${OMDB_API_KEY}&i=${
          category === 'popular' ? movie.ids.imdb : movie.movie.ids.imdb
        }`
      );
      const omdbData = await omdbRes.json();
      // console.log('OMDB API Response:', omdbData);
      if (omdbData.Error) return null;

      return omdbData;
    });
    const filterData = await Promise.all(filter);

    return filterData;
  } catch (error) {
    console.error('Error:', error.message);
  }
}
