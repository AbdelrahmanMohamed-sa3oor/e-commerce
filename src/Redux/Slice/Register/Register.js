import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const Register = async ({ name, email, password, phone, addresses }, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    try {
        const { data } = await axios.post(`${apiKey}api/auth/register`, {
            name: name,
            email: email,
            password: password,
            phone: phone,
            addresses: addresses  
        })
        
        return data.data
    } catch (error) {
        console.log('error for register', error);
        return rejectWithValue(error.response?.data || error.message)
    }

}

export const RegisterThunk = createAsyncThunk('api/register', Register);

const registerSlice = createSlice({

    name: 'api/register',
    initialState: {
        Register: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(RegisterThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.Register = action.payload
            })
            .addCase(RegisterThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default registerSlice