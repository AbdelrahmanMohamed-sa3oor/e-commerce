import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const AddToCart = async ({ prdID, quantity }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    const token = localStorage.getItem("token");

    try {
        const response = await axios.post(`${apiKey}api/cart/cartOP`,
            {
                prdID,
                quantity: quantity || 1
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        return response.data;
    } catch (error) {
        console.error("AddToCart error:", error?.response?.data || error.message);
        throw error;
    }
};

export const AddToCartThunk = createAsyncThunk('api/AddToCart', AddToCart);

const AddToCartSlice = createSlice({

    name: 'api/AddToCart',
    initialState: {
        AddToCart: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(AddToCartThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(AddToCartThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.AddToCart = action.payload
            })
            .addCase(AddToCartThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default AddToCartSlice