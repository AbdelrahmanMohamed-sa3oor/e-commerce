import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const AddToWishlist = async (productId) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    var token = localStorage.getItem("token")

    try {
        const { data } = await axios.post(`${apiKey}api/auth/wishlist/${productId}`,
        {},
        {headers: { Authorization: `Bearer ${token}` }}
    )
        return data.data
    } catch (error) {
        console.log('error for AddToWishlist', error);
    }

}

export const AddToWishlistThunk = createAsyncThunk('api/AddToWishlist', AddToWishlist);

const AddToWishlistSlice = createSlice({

    name: 'api/AddToWishlist',
    initialState: {
        AddToWishlist: null,
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddToWishlistThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(AddToWishlistThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.AddToWishlist = action.payload
            })
            .addCase(AddToWishlistThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default AddToWishlistSlice