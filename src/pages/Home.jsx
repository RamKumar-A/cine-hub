// import styled from 'styled-components';
// import { useEffect, useState } from 'react';
// import { getMovies } from '../services/apiMovies';
// import CardHoverDetails from '../components/CardHoverDetails';
// import { HiStar } from 'react-icons/hi2';
// import { HoverDetails } from '../components/Card';
// const images = [
//   'tt15009428',
//   'tt15314262',
//   'tt15239678',
//   'tt9859436',
//   'tt13210838',
// ];

// function Home() {
//   const [data, setData] = useState([]);

//   useEffect(function () {
//     const fetchedData = async () => {
//       const res = await getMovies('trending', [], 1, 3);
//       // console.log(res);
//       setData(res);
//     };
//     fetchedData();
//   }, []);

//   // function prev() {
//   //   if (curImg === 0) setCurImg(images.length - 1);
//   //   else {
//   //     setCurImg((pre) => pre - 1);
//   //   }
//   // }

//   // function next() {
//   //   if (curImg >= images.length - 1) setCurImg(0);
//   //   else setCurImg((nxt) => nxt + 1);
//   // }
//   console.log(data);
//   return (
//     <>
//       <h2>Movies</h2>
//       <div
//         style={{
//           // height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '1rem',
//           // flexDirection: 'column',
//         }}
//       >
//         <HomeContainer>
//           {data?.map((d) => (
//             <CarouselItem key={d?.imdbID}>
//               <List url={d?.Poster}>
//                 <div className="details">
//                   <div className="rate">
//                     <span className="star">
//                       {d?.imdbRating && (
//                         <>
//                           <HiStar />
//                           {d?.imdbRating}
//                         </>
//                       )}
//                     </span>
//                     <span>{d?.Rated}</span>
//                   </div>
//                   <h3>{d?.Title || d}</h3>
//                 </div>
//                 <CardHoverDetails>
//                   {d?.Plot?.split('')?.slice(0, 100)?.join('')} ...
//                 </CardHoverDetails>
//               </List>
//             </CarouselItem>
//           ))}
//         </HomeContainer>
//       </div>
//       <div
//         style={{
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '1rem',
//           // flexDirection: 'column',
//         }}
//       >
//         <HomeContainer>Home</HomeContainer>
//       </div>
//     </>
//   );
// }

// const HomeContainer = styled.div`
//   height: 100%;
//   width: 70vw;
//   display: flex;
//   align-items: center;
//   overflow-x: scroll;
//   position: relative;

//   @media (max-width: 400px) {
//     width: 90vw;
//   }
// `;

// const List = styled.div`
//   display: flex;
//   width: 20rem;
//   height: 30rem;
//   justify-content: center;
//   align-items: center;
//   background: url(${({ url }) => url}) no-repeat center;
//   background-size: cover;
//   .details {
//     padding: 0 1rem 1rem 1rem;
//     text-align: center;
//     /* height: 7rem; */
//     overflow: hidden;
//     .rate {
//       font-size: 0.8rem;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       font-weight: 900;
//     }
//     h3 {
//       font-size: 1.2rem;
//       padding: 1rem;
//       font-weight: 400;
//     }
//   }

//   &:hover ${HoverDetails} {
//     padding: 0.5rem;
//     opacity: 1;
//     height: 7rem;
//     backdrop-filter: blur(15px);
//   }

//   @media (max-width: 400px) {
//     width: 90vw;
//     height: 20rem;
//   }
// `;

// const CarouselItem = styled.div`
//   display: grid;
//   flex: none;
//   padding: 0 0.5rem;
//   justify-items: center;
// `;

// const Button = styled.button`
//   padding: 0.5rem;
//   position: absolute;
//   ${({ left }) => (left ? 'left:0;' : 'right:0;')}
// `;

// export default Home;
