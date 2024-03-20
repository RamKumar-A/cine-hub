import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

function useCategoryGenre() {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    return {
      category: searchParams.get('category') || 'trending',
      genre: searchParams.get('genre') ? [searchParams.get('genre')] : null,
    };
  }, [searchParams]);
}

export default useCategoryGenre;
