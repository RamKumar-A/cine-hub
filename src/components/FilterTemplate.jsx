import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import {
  FilterHeading,
  FilterList,
  FilterListContainer,
} from './styleComponents/Filters';
import { useOutsideClick } from '../hooks/useOutsideClick';

function FilterTemplate({
  isCategory,
  toggle,
  setToggle,
  filters,
  label,
  params,
  handler,
  height,
}) {
  const outsideClickRef = useOutsideClick(() => {
    setToggle(false);
  });

  return (
    <div ref={outsideClickRef}>
      <FilterHeading onClick={() => setToggle((t) => !t)}>
        {label}
        {toggle ? <HiChevronUp /> : <HiChevronDown />}
      </FilterHeading>

      {toggle && (
        <FilterListContainer height={height}>
          {filters?.map((filter) => {
            return (
              <FilterList
                key={isCategory ? filter?.name : filter}
                onClick={() => handler(isCategory ? filter?.slug : filter)}
                className={
                  params?.includes(isCategory ? filter?.slug : filter)
                    ? 'selected'
                    : ''
                }
              >
                {isCategory
                  ? filter?.name
                  : filter[0]?.toUpperCase() + filter?.slice(1)}
              </FilterList>
            );
          })}
        </FilterListContainer>
      )}
    </div>
  );
}

export default FilterTemplate;
