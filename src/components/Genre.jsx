import { useSearchParams } from 'react-router-dom';
import FilterTemplate from './FilterTemplate';

const genres = [
  'action',
  'adventure',
  'animation',
  'comedy',
  'crime',
  'documentry',
  'drama',
  'family',
  'fantasy',
  'history',
  'holiday',
  'horror',
  'mystery',
  'romance',
  'science-fiction',
  'suspense',
  'thriller',
  'war',
  'western',
];

function Genre() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genresArr = searchParams.get('genre')?.split(',') || [];

  function handleGenre(genreName) {
    const updatedGenres = genresArr.includes(genreName)
      ? genresArr.filter((genre) => genre !== genreName) // Remove if already selected
      : [...genresArr, genreName]; // Add if not selected

    const params = new URLSearchParams(searchParams);
    if (updatedGenres.length > 0) {
      params.set('genre', updatedGenres.join(',')); // Update with new genres
    } else {
      params.delete('genre'); // Remove the `genre` param if no genres are selected
    }
    setSearchParams(params); // Update the URL
  }

  return (
    <FilterTemplate filters={genres} label="Genre" handler={handleGenre} />
  );
}

export default Genre;
