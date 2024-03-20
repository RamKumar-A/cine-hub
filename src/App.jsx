import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Applayout from './components/Applayout';
import { Suspense, lazy } from 'react';
import Loader from './components/Loader';
const Movies = lazy(() => import('./pages/Movies')); // Lazy-load Movies component
const Shows = lazy(() => import('./pages/Shows')); // Lazy-load Shows component
const Search = lazy(() => import('./pages/Search')); // Lazy-load Search component
const Details = lazy(() => import('./pages/Details')); // Lazy-load Details component
const Wishlist = lazy(() => import('./pages/Wishlist'));

const router = createBrowserRouter([
  {
    path: '/',

    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movies',
        element: <Movies />,
      },
      {
        path: '/shows',
        element: <Shows />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/search/:id',
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
