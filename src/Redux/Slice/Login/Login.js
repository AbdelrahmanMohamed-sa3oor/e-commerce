import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const Login = async ({  email, password }, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    try {
        const { data } = await axios.post(`${apiKey}api/auth/login`, {
            email: email,
            password: password,  
        })
        
        return data.data
    } catch (error) {
        console.log('error for Login', error);
        return rejectWithValue(error.response?.data || error.message)
    }

}

export const LoginThunk = createAsyncThunk('api/Login', Login);

const LoginSlice = createSlice({

    name: 'api/Login',
    initialState: {
        Login: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(LoginThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(LoginThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.Login = action.payload
            })
            .addCase(LoginThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default LoginSlice