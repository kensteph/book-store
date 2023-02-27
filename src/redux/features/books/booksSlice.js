/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [
  {
    id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addedBook: (state, action) => {
      state.push(action.payload);
    },
    removedBook: (state, action) => {
      const bookId = action.payload;
      return state.filter((book) => book.id !== bookId);
    },
  },
});

// Export the actions
export const { addedBook, removedBook } = booksSlice.actions;
// Export default the reducer
export default booksSlice.reducer;
