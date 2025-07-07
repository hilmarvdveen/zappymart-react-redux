// store/wishlistSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/models/product'; // adjust path as needed
import { RootState } from "@/store/store";

interface WishlistState {
  items: Product[];
  isDrawerOpen: boolean;
}

const initialState: WishlistState = {
  items: [],
  isDrawerOpen: false,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some(item => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
    },
    toggleDrawer: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});
export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  openDrawer,
  closeDrawer,
  toggleDrawer,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

// Selectors
export const selectWishlistItems = (state: RootState): Product[] => state.wishlist.items;
export const selectWishlistCount = (state: RootState): number => state.wishlist.items.length;
export const selectWishlistDrawerOpen = (state: RootState): boolean => state.wishlist.isDrawerOpen;
