import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBookToAPI } from '../../redux/features/books/booksSlice';
import AddButton from '../AddButton/AddButton';

const Form = () => {
  const [inputs, setInputs] = useState({ title: '', author: '', category: '' });
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
    const newBook = { item_id: id, ...inputs };
    dispatch(postBookToAPI(newBook));
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
        required
      />
      <input
        placeholder="Author"
        aria-label="Author"
        name="author"
        value={inputs.author}
        onChange={handleChange}
        required
      />
      <select name="category" onChange={handleChange} required>
        <option value="">Category</option>
        <option>Fiction</option>
        <option>Comedy</option>
        <option>Non-Fiction</option>
        <option>Romance</option>
        <option>Mystery</option>
        <option>Science Fiction</option>
        <option>Fantasy</option>
        <option>Horror</option>
        <option>Thriller</option>
        <option>Poetry</option>
        <option>Children</option>
        <option>Programming</option>
        <option>Other</option>
      </select>
      <AddButton />
    </form>
  );
};

export default Form;
