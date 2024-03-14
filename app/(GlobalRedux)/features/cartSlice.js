import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.basket.push(action.payload); // Add item to the basket array
    },
    decrement: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.basket.splice(index, 1); // Remove item from the basket array
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
