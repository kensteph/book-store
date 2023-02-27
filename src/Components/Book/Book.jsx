import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author, category } = book;
  return (
    <div className="book">
      <span className="bookTitle">{category}</span>
      <br />
      <span className="bookTitle">{title}</span>
      <br />
      <span className="bookAuthor">{author}</span>
      <br />
      <button type="button">Remove</button>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
