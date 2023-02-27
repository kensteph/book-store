import React, { useState } from 'react';

const Form = () => {
  const [inputs, setInputs] = useState({ book: '', author: '' });
  const handleChange = (ev) => {
    setInputs((prevState) => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }));
  };
  const handleClick = () =>{
    const newBook = {}
  }
  return (
    <form>
      <input
        placeholder="Book title"
        aria-label="Title"
        name="book"
        value={inputs.book}
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
