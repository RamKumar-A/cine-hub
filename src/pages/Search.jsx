import { memo, useEffect, useState } from 'react';
import { search } from '../services/Search';
import ContentLayout from '../components/ContentLayout';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [queryData, setQueryData] = useState([]);
  const [type, setType] = useState('movie');
  const [searhParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  let searchQuery = searhParams.get('searchQuery') || '';

  useEffect(
    function () {
      const querySearch = async function (query, searchType) {
        try {
          setIsLoading(true);
          const res = await search(query, searchType);
          const data = res?.Search || [];
          setQueryData(data || '');
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      };

      querySearch(searchQuery, type);
    },

    [searchQuery, type]
  );

  function handleQuery(e) {
    searhParams.set('searchQuery', e.target.value || '');
    setSearchParams(searhParams.toString());
  }

  return (
    <div>
      <SearchDiv>
        <input type="search" placeholder="Search..." onChange={handleQuery} />
      </SearchDiv>
      <ButtonContainer>
        <Button onClick={() => setType('movie')}>Movies</Button>
        <Button onClick={() => setType('series')}>Shows</Button>
      </ButtonContainer>
      <ContentLayout contentData={queryData} isLoading={isLoading} />
    </div>
  );
}

const SearchDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    border-radius: 10px;
    padding: 0.5rem;
    outline: none;
    border: 1px solid #fff;
    font-size: 1rem;
    background-color: #4f4f4f;
    color: #fff;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
  @media (max-width: 450px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  border: 1px solid #fff;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  background-color: #4f4f4f;
  color: #fff;
`;

export default memo(Search);
