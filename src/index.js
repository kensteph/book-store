import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Route
} from 'react-router-dom';
import App from './App';
import RootLayout from './Components/RootLayout/RootLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="books" element={<BooksPage />} />
      <Route path="categories" element={<CategoriesPage />} />
    </Route>,
  ),
);
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
