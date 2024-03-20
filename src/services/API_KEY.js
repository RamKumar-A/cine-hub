export const TRAKT_API_KEY =
  'b66e3ec72900ababdeedbb89cd101fdc44d1aaa82c3ffb85e1e9b4dfdd6a4756';
export const TRAKT_BASE_URL = 'https://api.trakt.tv/';

export const OMDB_API_KEY = 'apikey=bcb95006';
// export const OMDB_API_KEY = 'apikey=7584f415';
export const OMDB_BASE_URL = 'https://omdbapi.com/';

export const OMDB_IMG_URL = `http://img.omdbapi.com/?apikey=${OMDB_API_KEY}&`;

export const headers = {
  'Content-Type': 'application/json',
  'trakt-api-key': TRAKT_API_KEY,
  // 'b66e3ec72900ababdeedbb89cd101fdc44d1aaa82c3ffb85e1e9b4dfdd6a4756',
  'trakt-api-version': '2',
};
