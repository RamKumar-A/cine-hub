import { HiStar } from 'react-icons/hi2';
import styled from 'styled-components';
import CardHoverDetails from './CardHoverDetails';

function Card({ data }) {
  // console.log(data);
  if (!data) return '';
  return (
    <StyledCard star={data?.imdbRating}>
      <div className="imgDiv">
        <img src={data?.Poster} alt={data?.Title} />
      </div>
      <div className="details">
        <div className="rate">
          <span className="star">
            {data?.imdbRating && (
              <>
                <HiStar />
                {data?.imdbRating}
              </>
            )}
          </span>
          <span>{data?.Rated}</span>
        </div>
        <h3>{data?.Title || data}</h3>
      </div>
      <CardHoverDetails>
        {data?.Plot?.split('')?.slice(0, 100)?.join('')} ...
      </CardHoverDetails>
    </StyledCard>
  );
}

export const HoverDetails = styled.div`
  position: absolute;
  bottom: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition: height 0.5s ease-in-out, opacity 0.6s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const StyledCard = styled.div`
  width: 15rem;
  color: #fff;
  background-color: #202020;
  border-radius: 10px;
  position: relative;
  .star {
    color: ${(props) =>
      props.star >= 7.5
        ? 'green'
        : props.star > 5 && props.star < 7.5
        ? 'orangered'
        : 'red'};
  }
  & .imgDiv {
    padding: 1rem;
    height: 15rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover ${HoverDetails} {
    padding: 0.5rem;
    opacity: 1;
    height: 7rem;
    backdrop-filter: blur(15px);
  }

  .details {
    padding: 0 1rem 1rem 1rem;
    text-align: center;
    height: 7rem;
    overflow: hidden;
    .rate {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 900;
    }
    h3 {
      font-size: 1.2rem;
      padding: 1rem;
      font-weight: 400;
    }
  }
`;

export default Card;
