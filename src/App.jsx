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
import Error from './components/Error';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Navigate replace to="movies" />} />
              <Route
                path="movies"
                element={<Movies />}
                errorElement={<Error />}
              />
              <Route
                path="shows"
                element={<Shows />}
                errorElement={<Error />}
              />
              <Route
                path="search"
                element={<Search />}
                errorElement={<Error />}
              />
              <Route
                path="wishlist"
                element={<Wishlist />}
                errorElement={<Error />}
              />
              <Route
                path="search/:name/:imdbID"
                element={<Details />}
                errorElement={<Error />}
              />
              <Route
                path="search/:name/:imdbID/:episodes"
                element={<Seasons />}
                errorElement={<Error />}
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
