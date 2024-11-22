import { useEffect, useState } from 'react';
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
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenres = searchParams.getAll('genre');
  const [genresArr, setGenresArr] = useState(initialGenres);

  useEffect(() => {
    const updatedParams = new URLSearchParams(searchParams);

    if (genresArr.length > 0) {
      updatedParams.set('genre', genresArr.join(',')); // Join genres with commas
    } else {
      updatedParams.delete('genre'); // Remove `genre` param if no genres selected
    }
    setSearchParams(updatedParams);
  }, [genresArr, searchParams, setSearchParams]);

  const params = searchParams.get('genre');

  function handleGenre(genreName) {
    setGenresArr((prevGenres) =>
      prevGenres.includes(genreName)
        ? prevGenres.filter((genre) => genre !== genreName)
        : [...prevGenres, genreName]
    );
  }

  return (
    <FilterTemplate
      height={true}
      toggle={toggle}
      setToggle={setToggle}
      filters={genres}
      label="Genre"
      params={params}
      handler={handleGenre}
    />
  );
}

export default Genre;
