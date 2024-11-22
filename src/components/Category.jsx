import { useEffect, useState } from 'react';
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
  const [categoryName, setCategoryName] = useState(categories[0].slug);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('category', categoryName);
    setSearchParams(updatedParams);
  }, [categoryName, setSearchParams, searchParams]);

  function handleCategory(category) {
    setCategoryName(category);
  }

  const params = searchParams.get('category');

  return (
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
