import { createSlice } from "@reduxjs/toolkit";

const getInitialCartData = () => {
  const cartitems = JSON.parse(localStorage.getItem("cartItems"));
  const cartTotalPrice = +localStorage.getItem("totalPrice");
  const cartTotalQuantity = +localStorage.getItem("totalQuantity");
  if (cartitems && cartTotalPrice && cartTotalQuantity) {
    return { cartitems, cartTotalPrice, cartTotalQuantity };
  }
  return {
    cartitems: [],
    cartTotalPrice: 0,
    cartTotalQuantity: 0,
  };
};

const { cartitems, cartTotalPrice, cartTotalQuantity } = getInitialCartData();

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: cartitems,
    totalQuantity: cartTotalQuantity,
    totalPrice: cartTotalPrice,
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

      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("totalQuantity", state.totalQuantity);
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
      localStorage.setItem("cartItems", JSON.stringify(state.items));
      localStorage.setItem("totalPrice", state.totalPrice);
      localStorage.setItem("totalQuantity", state.totalQuantity);
    },
    clearCart: (state) => {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("totalQuantity");

      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
