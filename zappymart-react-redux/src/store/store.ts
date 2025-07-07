import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlist/slices/wishlistSlice';
import cartReducer from '../features/cart/slices/cartSlice'

const loadWishlistState = () => {
  if (typeof window === 'undefined') return undefined;
  try {
    const serialized = sessionStorage.getItem('wishlistItems');
    if (serialized === null) return undefined;
    return {
      wishlist: {
        items: JSON.parse(serialized),
        isDrawerOpen: false,
      },
    };
  } catch {
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
  },
  preloadedState: loadWishlistState(),
});

store.subscribe(() => {
  if (typeof window === 'undefined') return;
  try {
    const state = store.getState();
    sessionStorage.setItem('wishlistItems', JSON.stringify(state.wishlist.items));
  } catch (error) {
    console.error('Error saving wishlist state:', error);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;