import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addedBook } from '../../redux/features/books/booksSlice';

const Form = () => {
  const [inputs, setInputs] = useState({ title: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = (ev) => {
    setInputs((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    const id = uuidv4();
    const newBook = { id, ...inputs };
    dispatch(addedBook(newBook));
    setInputs({ title: '', author: '' });
  };
  return (
    <form onSubmit={handleClick}>
      <input
        placeholder="Book title"
        aria-label="Title"
        name="title"
        value={inputs.title}
        onChange={handleChange}
      />
      <input
        placeholder="Author"
        aria-label="Author"
        name="author"
        value={inputs.author}
        onChange={handleChange}
      />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default Form;
