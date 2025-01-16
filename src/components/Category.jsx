import { useSearchParams } from 'react-router-dom';
import FilterTemplate from './FilterTemplate';

const categories = [
  { name: 'Trending', slug: 'trending' },
  { name: 'Most Played', slug: 'played' },
  { name: 'Popular', slug: 'popular' },
  { name: 'Anticipated', slug: 'anticipated' },
];

function Category() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCategory(category) {
    const params = new URLSearchParams(searchParams);
    params.set('category', category); // Update the 'category' parameter
    setSearchParams(params);
  }

  return (
    <FilterTemplate
      isCategory
      filters={categories}
      handler={handleCategory}
      label={'Category'}
    />
  );
}

export default Category;
