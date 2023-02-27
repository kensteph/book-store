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
  },
});

// Export the actions

// Export default the reducer
export default booksSlice.reducer;
