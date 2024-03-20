import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterTemplate from './FilterTemplate';

const categories = [
  { name: 'Trending', slug: 'trending' },
  { name: 'Most Played', slug: 'played' },
  { name: 'Popular', slug: 'popular' },
  { name: 'Anticipated', slug: 'anticipated' },
];

function Category() {
  const [toggle, setToggle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCategory(categoryName) {
    // const params = new URLSearchParams(searchParams);
    // params.set('category', categoryName);
    searchParams.set('category', categoryName);
    // setSearchParams(params.toString());
    setSearchParams(searchParams.toString()); //useSearchParams must to be string
    setToggle(false);
  }

  const params = searchParams.get('category');
  return (
    // <div ref={outsideClickRef}>
    //   <Heading
    //     onClick={() => {
    //       setToggle(!toggle);
    //     }}
    //   >
    //     Category
    //     {toggle ? <HiChevronUp /> : <HiChevronDown />}
    //   </Heading>

    //   {toggle && (
    //     <StyledCategory>
    //       {categories.map((category) => (
    //         <li
    //           onClick={() => handleCategory(category.slug)}
    //           key={category.name}
    //           className={params.includes(category.slug) ? 'selected' : ''}
    //         >
    //           {category.name}
    //         </li>
    //       ))}
    //     </StyledCategory>
    //   )}
    // </div>

    <FilterTemplate
      isCategory
      filters={categories}
      toggle={toggle}
      setToggle={setToggle}
      params={params}
      handler={handleCategory}
      label={'Category'}
    />
  );
}

export default Category;
