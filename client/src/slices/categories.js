import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all: [],
  current: '',
};

const reducers = {
  updateCategories(state, { payload }) {
    state.all = payload;
  },
  updateCurrentCategory(state, { payload }) {
    state.current = payload;
  },
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers,
});

export const {
  updateCategories,
  updateCurrentCategory,
} = categorySlice.actions;
export default categorySlice.reducer;
