import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import WishlistButton from '../components/WishlistButton';

function Details() {
  const location = useLocation();
  const myState = location.state && location.state.myState;
  function getColorByRating(rating) {
    switch (true) {
      case rating > 7.5:
        return 'green';
      case rating >= 5 && rating <= 7.5:
        return 'yellow';
      default:
        return 'red';
    }
  }

  return (
    <Container>
      <ImageContainer>
        <img src={myState?.Poster} alt="ram" />
      </ImageContainer>
      <InfoContainer>
        <Header>
          <h2>{myState?.Title}</h2>
          <WishlistButton data={myState} />
        </Header>
        <Plot>
          <p>
            <em>" {myState?.Plot} "</em>
          </p>
        </Plot>
        <RatingSection>
          <Rating color={getColorByRating(myState?.imdbRating)}>
            {myState?.imdbRating}
          </Rating>
          <span> Ratings </span>
        </RatingSection>
        <GenreSection>
          {myState?.Genre.split(',').map((g, i) => (
            <GenreTag key={i}>{g.trim()}</GenreTag>
          ))}
        </GenreSection>
        <DetailsList>
          {Object.entries({
            'Initial Release': myState?.Released,
            Length: myState?.Runtime,
            Director: myState?.Director,
            Writer: myState?.Writer,
            Language: myState?.Language,
            'Box Office': myState?.BoxOffice || 'N/A',
            Year: myState?.Year,
            [myState?.totalSeasons ? 'Total Seasons' : '']:
              myState?.totalSeasons,
          }).map(([label, value], i) => (
            <DetailItem key={i}>
              <DetailLabel>{label} </DetailLabel>
              <DetailValue>{value}</DetailValue>
            </DetailItem>
          ))}
        </DetailsList>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  padding: 2rem;
  color: #fff;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 30vw;
  height: 60vh;
  background-color: #454545;
  order: 1;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: calc(1rem + 10px);
    padding: 1rem;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 50vh;
    order: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 0.5rem;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    justify-content: center;
  }
`;

const Plot = styled.div`
  padding: 1rem 0;
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 2rem;
  text-align: center;
  gap: 1rem;
  font-size: 0.8rem;
`;

const Rating = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => props.color || '#fff'};
  border: 5px solid ${(props) => props.color || '#fff'};
`;

const GenreSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 0 1rem 0;
`;

const GenreTag = styled.span`
  color: #000;
  font-weight: 600;
  background-color: #ffa200;
  padding: 0.5rem;
  border-radius: 10px;
`;

const DetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  padding: 1rem;
  background-color: #454545;
  box-shadow: 0.1px 0.1px 10px 1px #2b2b2b;
  border-radius: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const DetailLabel = styled.span`
  font-weight: 700;
  /* width: 5rem; */
`;

const DetailValue = styled.p`
  padding: 0.5rem 0;
  font-weight: 700;
  text-align: end;
`;

export default Details;

// import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import WishlistButton from '../components/Wishlist';

// function Details() {
//   const location = useLocation();
//   const myState = location.state && location.state.myState;

//   return (
//     <StyledDetails>
//       <ImgDiv>
//         <img src={myState?.Poster} alt="ram" />
//       </ImgDiv>
//       <div>
//         <DetailsHead>
//           <h2>{myState?.Title}</h2>
//           <WishlistButton data={myState} />
//         </DetailsHead>
//         <div>
//           <p>
//             <em>" {myState?.Plot} "</em>
//           </p>
//         </div>

//         <StyledRate>
//           <div>
//             <Rate>{myState?.Rated}</Rate>
//             <span> Rated</span>
//           </div>
//           <div>
//             <Rate
//               rating={
//                 myState?.imdbRating <= 5
//                   ? 'red'
//                   : myState?.imdbRating > 5 && myState?.imdbRating <= 7.5
//                   ? 'orangered'
//                   : 'green'
//               }
//             >
//               {myState?.imdbRating}
//             </Rate>
//             <span> Ratings</span>
//           </div>
//         </StyledRate>

//         <Genre>
//           {myState?.Genre.split(',').map((g, i) => (
//             <span key={i}>{g.trim()}</span>
//           ))}
//         </Genre>

//         <Detail>
//           {Object.entries({
//             'Initial Release': myState?.Released,
//             Length: myState?.Runtime,
//             Director: myState?.Director,
//             Writer: myState?.Writer,
//             Language: myState?.Language,
//             'Box Office': myState?.BoxOffice || 'N/A',
//             Year: myState?.Year,
//             [myState?.totalSeasons ? 'Total Seasons' : '']:
//               myState?.totalSeasons,
//           }).map(([label, value], index) => (
//             <div key={index}>
//               <span>{label}</span>
//               <p>{value}</p>
//             </div>
//           ))}
//         </Detail>
//       </div>
//     </StyledDetails>
//   );
// }

// const StyledDetails = styled.div`
//   display: grid;
//   padding: 2rem;
//   color: #fff;
//   grid-template-columns: repeat(2, 1fr);
//   justify-items: center;
//   @media (max-width: 750px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ImgDiv = styled.div`
//   width: 30vw;
//   height: 60vh;
//   background-color: #454545;
//   order: 1;
//   border-radius: 10px;
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: fill;
//     border-radius: calc(1rem + 10px);
//     padding: 1rem;
//   }

//   @media (max-width: 750px) {
//     width: 100%;
//     height: 50vh;
//     order: 0;
//   }
// `;

// const DetailsHead = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 1rem 0;
//   gap: 0.5rem;
//   flex-wrap: wrap;
//   @media (max-width: 400px) {
//     justify-content: center;
//   }
// `;

// const StyledRate = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 1rem 0 2rem;
//   text-align: center;
//   gap: 1rem;
//   font-size: 0.8rem;
// `;

// const Rate = styled.div`
//   width: 4rem;
//   height: 4rem;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
//   font-size: 1rem;
//   color: ${(props) => props.rating || '#fff'};
//   border: 5px solid ${(props) => props.rating || '#fff'};
// `;

// const Detail = styled.div`
//   display: flex;
//   align-items: start;
//   gap: 1rem;
//   flex-direction: column;
//   font-size: 1rem;
//   padding: 1rem;
//   background-color: #454545;
//   box-shadow: 0.1px 0.1px 10px 1px #2b2b2b;
//   border-radius: 10px;
//   div p {
//     padding: 0.5rem 0;
//     font-weight: 700;
//   }
//   span {
//     font-weight: 300;
//   }
//   @media (max-width: 700px) {
//   }
// `;

// const Genre = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 0 0 1rem 0;
//   span {
//     color: #000;
//     font-weight: 600;
//     background-color: #ffa200;
//     padding: 0.5rem;
//     border-radius: 10px;
//   }
// `;

// export default Details;
