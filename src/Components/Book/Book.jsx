import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book">
    <span className="bookTitle">{title}</span>
    <br />
    <span className="bookAuther">{author}</span>
    <br />
    <button type="button">Remome</button>
  </div>
);
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };

export default Book;
