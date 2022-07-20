import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    increment: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );

      if (existingCartItemIndex !== -1) {
        state.items[existingCartItemIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload.item, quantity: 1 });
      }
      state.totalPrice += action.payload.item.price;
      state.totalQuantity += 1;
    },
    decrement: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalPrice -= state.items[existingCartItemIndex].price;
      state.totalQuantity -= 1;
      if (state.items[existingCartItemIndex].quantity === 1) {
        state.items.splice(existingCartItemIndex, 1);
      } else {
        state.items[existingCartItemIndex].quantity -= 1;
      }
    },
  },
});

export const { increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
