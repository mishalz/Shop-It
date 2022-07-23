import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./CartSlice";
import AuthSliceReducer from "./AuthSlice";

export const store = configureStore({
  reducer: {
    cart: CartSliceReducer,
    auth: AuthSliceReducer,
  },
});
