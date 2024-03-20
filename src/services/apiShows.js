import {
  OMDB_API_KEY,
  OMDB_BASE_URL,
  TRAKT_BASE_URL,
  headers,
} from './API_KEY';

export async function getShows(category = 'trending', genre = [], pageNum = 1) {
  let allShows = [];
  let genres = [];

  if (genre?.length > 0) {
    genres = genre?.join(',');
  }
  console.log(category);
  try {
    const api = `${TRAKT_BASE_URL}shows/${
      category === 'played' ? category + '/weekly' : category
    }?limit=20&page=${pageNum}${genre?.length > 0 ? `&genres=${genres}` : ''}`;

    const traktRes = await fetch(api, { method: 'GET', headers: headers });
    const traktData = await traktRes.json();
    // console.log('Trakt API Response:', traktData);

    const filtered = await Promise.all(
      traktData?.map(async (shows) => {
        const omdbRes = await fetch(
          `${OMDB_BASE_URL}?${OMDB_API_KEY}&type=series&i=${
            category === 'popular' ? shows.ids.imdb : shows.show.ids.imdb
          }`
        );
        const omdbData = await omdbRes.json();
        // console.log('OMDB API Response:', omdbData);
        if (!omdbData.Error) {
          return omdbData;
        }
        return null;
      })
    );

    allShows = allShows.concat(filtered);
    return allShows;
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
  }
}
