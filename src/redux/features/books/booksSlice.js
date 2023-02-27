/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addedBook: (state, action) => {
      state.push(action.payload);
    },
    removedBook: (state, action) => {
      const bookId = action.payload;
      state = state.filter((book) => book.id !== bookId);
    },
  },
});

// Export the actions
export const { addedBook, removedBook } = booksSlice.actions;
// Export default the reducer
export default booksSlice.reducer;
