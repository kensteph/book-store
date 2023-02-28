import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../../redux/features/books/booksSlice';
import Progress from '../Progress/Progress';

const Book = ({ book }) => {
  const {
    id, title, author, category,
  } = book;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBookFromAPI(id));
  };
  return (
    <div className="book">
      <span className="bookTitle">{category}</span>
      <br />
      <span className="bookTitle">{title}</span>
      <br />
      <span className="bookAuthor">{author}</span>
      <br />
      Comments |
      {' '}
      <button type="button" onClick={handleRemoveBook}>
        Remove
      </button>
      {' '}
      | Edit
      <Progress />
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
