// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './Slice/Register/Register'
import LoginSlice from './Slice/Login/Login'
import authSlice from './Slice/auth'


export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    Login:LoginSlice.reducer,
    auth:authSlice.reducer
  },
})
