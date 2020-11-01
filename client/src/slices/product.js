import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const reducers = {
  updateProducts(state, { payload }) {
    return payload;
  },
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers,
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;
