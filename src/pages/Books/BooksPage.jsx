import React, { useState } from 'react';
import Book from '../../Components/Book/Book';
import Form from '../../Components/Form/Form';

const BooksPage = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 3,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
    },
    {
      id: 6,
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel Garcia Marquez',
    },
    {
      id: 7,
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
    },
    {
      id: 9,
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
    },
    {
      id: 10,
      title: 'The Diary of a Young Girl',
      author: 'Anne Frank',
    },
  ]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '50px',
      }}
    >
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <Form />
    </div>
  );
};

export default BooksPage;
