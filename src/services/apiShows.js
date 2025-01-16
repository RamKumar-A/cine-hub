import { ITEMS_PER_PAGE } from '../constants/constants';
import {
  OMDB_API_KEY,
  OMDB_BASE_URL,
  TRAKT_BASE_URL,
  apiOptions,
} from './API_KEY';

export async function getShows() {
  const searchParams = new URLSearchParams(window.location.search);
  const genre = searchParams.get('genre');
  const category = searchParams.get('category') || 'trending';
  const page = searchParams.get('page') || 1;
  try {
    const api = `${TRAKT_BASE_URL}shows/${
      category === 'played' ? category + '/all' : category
    }?limit=${ITEMS_PER_PAGE}&page=${page}${genre && `&genres=${genre}`}`;

    const traktRes = await fetch(api, apiOptions);
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
        if (omdbData.Error) {
          return null;
        }
        return omdbData;
      })
    );

    return filtered;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function getSeasons(imdbID, seasonNumber) {
  const omdbRes = await fetch(
    `${OMDB_BASE_URL}?${OMDB_API_KEY}&i=${imdbID}&Season=${seasonNumber}`
  );
  const omdbData = await omdbRes.json();
  // console.log('OMDB API Response:', omdbData);
  if (omdbData.Error) {
    return null;
  }
  return omdbData;
}
