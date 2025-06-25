import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const RemoveWishlist = async (productId) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    var token = localStorage.getItem("token")

    try {
        const { data } = await axios.delete(`${apiKey}api/auth/wishlist/${productId}`,
         {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
        return data.data
    } catch (error) {
        console.log('error for RemoveWishlist', error);
          throw error; 
    }

}

export const RemoveWishlistThunk = createAsyncThunk('api/RemoveWishlist', RemoveWishlist);

const RemoveWishlistSlice = createSlice({

    name: 'api/RemoveWishlist',
    initialState: {
        RemoveWishlist: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(RemoveWishlistThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(RemoveWishlistThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.RemoveWishlist = action.payload
            })
            .addCase(RemoveWishlistThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default RemoveWishlistSlice