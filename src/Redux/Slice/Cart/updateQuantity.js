import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateQuantityThunk = createAsyncThunk(
  "cart/updateQuantity",
  async ({ prdID, quantity }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const apiKey = import.meta.env.VITE_DOMAIN;

      const response = await axios.patch(
        `${apiKey}api/cart/update-quantity`,
        { prdID, quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.cart; 
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ✅ Slice
const updateQuantitySlice = createSlice({
  name: "cart/updateQuantity",
  initialState: {
    updatedCart: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateQuantityThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateQuantityThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updatedCart = action.payload;
      })
      .addCase(updateQuantityThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default updateQuantitySlice;
