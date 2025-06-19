import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const Profile = async ({ id}, { rejectWithValue }) => {
    const apiKey = import.meta.env.VITE_DOMAIN;
    try {
        const { data } = await axios.post(`${apiKey}api/auth/profile`,)
        console.log(data);
        
        return data.data
    } catch (error) {
        console.log('error for Profile', error);
        return rejectWithValue(error.response?.data || error.message)
    }

}

export const ProfileThunk = createAsyncThunk('api/Profile', Profile);

const ProfileSlice = createSlice({

    name: 'api/Profile',
    initialState: {
        Profile: [],
        isLoading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(ProfileThunk.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(ProfileThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.Profile = action.payload
            })
            .addCase(ProfileThunk.rejected, (state, action) => {
                state.isLoading = false
                state.isError = action.payload
            })
    }
})
export default ProfileSlice