import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addproducttocart: (state, action) => {
      state.cart.push(action.payload.prod);
    },

    deleteptroductsfromcart  : (state,action) => {
      let pos;
      let arr = [...state.cart];
      for (let i = 0; i < state.cart.length; i++) {
        const product = state.cart[i];
        if (product._id === action.payload.idp) 
          pos = i;
      }

      arr.splice(pos, 1);
      state.cart = arr;
    }
    ,

    resetcart : (state,action)  => {
      state.cart = []
    }
  },

  extraReducers: (builder) => {},
});

export const { addproducttocart ,resetcart, deleteptroductsfromcart } = cartSlice.actions;

export const selectcart = (state) => state.cart.cart;

export default cartSlice.reducer;
