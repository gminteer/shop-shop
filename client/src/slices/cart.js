import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false,
};

const reducers = {
  addOne({ items }, { payload }) {
    items.push(payload);
  },
  addMany({ items }, { payload }) {
    items.push(...payload);
  },
  removeOne(state, { payload }) {
    state.items = state.items.filter((product) => product._id !== payload);
    state.isOpen = state.items.length > 0;
  },
  updateQuantity(state, { payload }) {
    state.isOpen = true;
    state.items = state.items.map((product) => {
      if (product._id === payload._id)
        product.purchaseQuantity = payload.purchaseQuantity;
      return product;
    });
  },
  clear(state) {
    state.isOpen = false;
    state.items = [];
  },
  toggleOpen(state) {
    state.isOpen = !state.isOpen;
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers,
});

export const {
  addOne,
  addMany,
  removeOne,
  updateQuantity,
  clear,
  toggleOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
