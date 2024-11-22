// RouterProvider,
// createBrowserRouter,
import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom';
import Applayout from './components/Applayout';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import Seasons from './pages/Seasons';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Search from './pages/Search';
import Details from './pages/Details';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Navigate replace to="movies" />} />
              <Route path="movies" element={<Movies />} />
              <Route path="shows" element={<Shows />} />
              <Route path="search" element={<Search />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="search/:name/:imdbID" element={<Details />} />
              <Route
                path="search/:name/:imdbID/:episodes"
                element={<Seasons />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

/* <RouterProvider router={router} /> */

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Applayout />,
//     children: [
//       {
//         index: true,
//         element: <Navigate replace to="/movies" />,
//       },
//       {
//         path: '/movies',
//         element: <Movies />,
//       },
//       {
//         path: '/shows',
//         element: <Shows />,
//       },
//       {
//         path: '/wishlist',
//         element: <Wishlist />,
//       },
//       {
//         path: '/search',
//         element: <Search />,
//       },
//       {
//         path: '/search/:name/:imdbID',
//         element: <Details />,
//       },
//       {
//         path: '/search/:name/:imdbID/:episodes',
//         element: <Seasons />,
//       },
//     ],
//   },
// ]);
