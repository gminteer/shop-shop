import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isOpen: false,
};

const reducers = {
  addOne(state, { payload }) {
    state.isOpen = true;
    state.items.push(payload);
  },

  addMany(state, { payload }) {
    state.items.push(...payload);
  },

  removeOne(state, { payload }) {
    state.items = state.items.filter((product) => product._id !== payload);
    state.isOpen = state.items.length > 0;
  },

  updateQuantity(state, { payload: { _id, purchaseQuantity } }) {
    state.isOpen = true;
    state.items = state.items.map((product) => {
      if (product._id === _id) product.purchaseQuantity = purchaseQuantity;
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
