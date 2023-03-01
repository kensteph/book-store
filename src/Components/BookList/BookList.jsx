import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllBooks,
  getBookFromAPI,
} from '../../redux/features/books/booksSlice';
import Book from '../Book/Book';
import Form from '../Form/Form';

const BookList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.books.ifSucceed);

  useEffect(() => {
    dispatch(getBookFromAPI());
  }, [dispatch, ifSucceed]);

  if (books.length === 0) {
    return (
      <>
        <h3>Library is empty....</h3>
        <Form />
      </>
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '50px',
      }}
    >
      {books?.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <hr className="line" />
      <Form />
    </div>
  );
};

export default BookList;
