import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const removeCardItem = async ({ itemId }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    const token = localStorage.getItem("token");

    try {
        const response = await axios.delete(`${apiKey}api/cart/deleteItem/${itemId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        return response.data;
    } catch (error) {
        console.error("removeCardItem error:", error?.response?.data || error.message);
        throw error;
    }
};
const removeAllCard = async ({ itemId }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    const token = localStorage.getItem("token");

    try {
        const response = await axios.delete(`${apiKey}api/cart/${itemId}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        return response.data;
    } catch (error) {
        console.error("removeCardItem error:", error?.response?.data || error.message);
        throw error;
    }
};

export const removeCardItemThunk = createAsyncThunk('api/removeCardItem', removeCardItem);
export const removeAllCardThunk = createAsyncThunk('api/removeAllCard', removeAllCard);

const removeCardItemSlice = createSlice({
  name: 'api/removeCardItem',
  initialState: {
    remove: [],
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeCardItemThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(removeCardItemThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.remove = action.payload;
      })
      .addCase(removeCardItemThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      })

      .addCase(removeAllCardThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(removeAllCardThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.remove = action.payload;
      })
      .addCase(removeAllCardThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error;
      });
  }
});

export default removeCardItemSlice