import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

// Export default the reducer from categoriesSlice
export default categoriesSlice.reducer;
