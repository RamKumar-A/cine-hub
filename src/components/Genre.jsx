import { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useOutsideClick } from '../hooks/useOutsideClick';
// import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
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
  const [genresArr, setGenresArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // const outsideClickRef = useOutsideClick(() => {
  //   setToggle(false);
  // });

  function handleGenre(genreName) {
    // Toggle selected genre
    if (genresArr.includes(genreName)) {
      setGenresArr(genresArr.filter((genre) => genre !== genreName));
    } else {
      setGenresArr((prevGenres) => [...prevGenres, genreName]);
    }
  }

  useEffect(
    function () {
      searchParams.set('genre', genresArr); // Set URL parameters with the updated string
      setSearchParams(searchParams.toString()); // Update URL parameters
      setToggle(false);
    },
    [genresArr, searchParams, setSearchParams]
  );

  const params = searchParams.get('genre');

  return (
    <FilterTemplate
      height={true}
      toggle={toggle}
      setToggle={setToggle}
      filters={genres}
      label={'Genre'}
      params={params}
      // searchParamsEffect={searchParamsEffect}
      handler={handleGenre}
    />
  );
}

// <div ref={outsideClickRef}>
//   <Heading onClick={() => setToggle((t) => !t)}>
//     Genre
//     {toggle ? <HiChevronUp /> : <HiChevronDown />}
//   </Heading>

//   {toggle && (
//     <StyledGenre>
//       {genres?.map((genre) => {
//         return (
//           <li
//             key={genre}
//             onClick={() => handleGenre(genre)}
//             className={params.includes(genre) ? 'selected' : ''}
//           >
//             {genre[0].toUpperCase() + genre.slice(1)}
//           </li>
//         );
//       })}
//     </StyledGenre>
//   )}
// </div>
// const Heading = styled.h2`
//   color: #f4f4f4;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.2rem;
//   font-weight: 500;
//   font-size: 1.4rem;
// `;

// const StyledGenre = styled.ul`
//   background-color: #242424;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 0.5rem;
//   position: absolute;
//   width: 15rem;
//   top: 125%;
//   height: 50vh;
//   overflow-y: auto;
//   z-index: 50;

//   li {
//     list-style-type: none;
//     padding: 0.5rem 1rem;
//     border-radius: 10px;
//     border: 1px solid #404040;
//     color: #fff;
//     font-size: 1.2rem;
//   }
//   .selected {
//     background-color: red;
//   }
// `;

export default Genre;
