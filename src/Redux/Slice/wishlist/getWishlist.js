
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const GetWishlist = async () => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    var token = localStorage.getItem("token")

    try {
        const { data } = await axios.get(`${apiKey}api/auth/wishlist`,
        {headers: { Authorization: `Bearer ${token}` }}
    )
        return data.data
    } catch (error) {
        console.log('error for GetWishlist', error);
    }

}

export const GetWishlistThunk = createAsyncThunk('api/GetWishlist', GetWishlist);

const GetWishlistSlice = createSlice({

    name: 'api/GetWishlist',
    initialState: {
        GetWishlist: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetWishlistThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(GetWishlistThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.GetWishlist = action.payload
            })
            .addCase(GetWishlistThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default GetWishlistSlice