import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeItems: (state, action) => {
      state.cartList = state.cartList.filter(
        (_, index) => index !== action.payload.index
      );
    },
  },
});

export const { addItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
