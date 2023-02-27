import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import Form from '../Form/Form';

const BookList = () => {
  const books = useSelector((store) => store.books);

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
      <Form />
    </div>
  );
};

export default BookList;
