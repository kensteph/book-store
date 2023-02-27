/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xOI7HhKVUsDCTkv7qbXd/books';

// Asynchronous
export const getBookFromAPI = createAsyncThunk(
  'books/getBookFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something goes wrong.');
    }
  }
);

// Initial state
const initialState = {
  isLoading: false,
  books: [
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
  ],
};

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
  // Lifecycle actions
  extraReducers: {
    [getBookFromAPI.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state = action.payload;
    },
    [getBookFromAPI.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// Export the state
export const selectAllBooks = (state) => state.books.books;
// Export the actions
export const { addedBook, removedBook } = booksSlice.actions;
// Export default the reducer
export default booksSlice.reducer;
