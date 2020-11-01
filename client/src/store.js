import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart';
import categoryReducer from './slices/categories';
import productReducer from './slices/product';

export default configureStore({
  reducer: {
    cart: cartReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});
