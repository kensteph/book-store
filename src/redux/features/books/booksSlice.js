/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xOI7HhKVUsDCTkv7qbXd/books';

// =============== Asynchronous =============

export const getBookFromAPI = createAsyncThunk(
  'books/getBookFromAPI',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something goes wrong.');
    }
  },
);

export const postBookToAPI = createAsyncThunk(
  'books/postBookToAPI',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(baseURL, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

// =======================================

// Initial state
const initialState = {
  isLoading: false,
  ifBookAdded: false,
  books: [],
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
    // ======= getBookFromAPI ==========
    [getBookFromAPI.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookFromAPI.fulfilled]: (state, action) => {
      state.isLoading = false;
      const data = action.payload;
      const books = Object.entries(data).map(([id, item]) => {
        const singleBook = { id, ...item[0] };
        return singleBook;
      });
      state.books = books;
    },
    [getBookFromAPI.rejected]: (state) => {
      state.isLoading = false;
    },
    // postBookToAPI
    [postBookToAPI.pending]: (state) => {
      state.ifBookAdded = false;
    },
    [postBookToAPI.fulfilled]: (state) => {
      state.ifBookAdded = true;
    },
    [postBookToAPI.rejected]: (state) => {
      state.ifBookAdded = false;
    },
  },
});

// Export the state
export const selectAllBooks = (state) => state.books.books;
// Export the actions
export const { addedBook, removedBook } = booksSlice.actions;
// Export default the reducer
export default booksSlice.reducer;
