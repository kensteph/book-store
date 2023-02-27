import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Pages
import RootLayout from './Components/RootLayout/RootLayout';
import BooksPage from './pages/Books/BooksPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import { getBookFromAPI } from './redux/features/books/booksSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<BooksPage />} />
      <Route index path="books" element={<BooksPage />} />
      <Route path="categories" element={<CategoriesPage />} />
    </Route>,
  ),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookFromAPI());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
