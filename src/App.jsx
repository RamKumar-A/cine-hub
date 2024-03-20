import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Applayout from './components/Applayout';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Search from './pages/Search';
import Details from './pages/Details';
import Wishlist from './pages/Wishlist';

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
