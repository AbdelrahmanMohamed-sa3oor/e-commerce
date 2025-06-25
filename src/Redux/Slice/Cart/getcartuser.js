import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartThunk = createAsyncThunk('api/getCart', async () => {

  try {
    const token = localStorage.getItem("token");
    const apiKey = import.meta.env.VITE_DOMAIN;

    const response = await axios.get(`${apiKey}api/cart/showMyCart`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data[0] || 'error to get your cart'
  } catch (error) {
    console.log("error get cart", error);
  }
});

const getCartSlice = createSlice({
  name: 'getCartSlice',
  initialState: {
    cart: {
      _id:'',
      cartItems:''
    },
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCartThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCartThunk.fulfilled, (state, action) => {
        state.cart = action.payload;
        state.isLoading = false;
      })
      .addCase(getCartThunk.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      });
  }
});

export default getCartSlice