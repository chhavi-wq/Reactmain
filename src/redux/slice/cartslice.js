
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((p) => p.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const item = state.find((p) => p.id === action.payload);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((p) => p.id !== action.payload);
      }
    },

    removeItem: (state, action) => {
      return state.filter((p) => p.id !== action.payload);
    },

    clearCart: () => {
      return [];
    },
  },
});

// ✅ CORRECT EXPORTS
export const {
  addToCart,
  removeFromCart,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;