// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './Slice/Register/Register'
import LoginSlice from './Slice/Login/Login'
import authSlice from './Slice/auth'
import filtersSlice from './Slice/SearchProduct/SearchProduct'
import AddToWishlistSlice from './Slice/wishlist/wishlist'
import RemoveWishlistSlice from './Slice/wishlist/removeWishlist'
import GetWishlistSlice from './Slice/wishlist/getWishlist'
import AddToCartSlice from './Slice/Cart/AddtoCart'
import getCartSlice from './Slice/Cart/getcartuser'
import removeCardItemSlice from './Slice/Cart/remove'
import updateQuantitySlice from './Slice/Cart/updateQuantity'

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    Login:LoginSlice.reducer,
    auth:authSlice.reducer,
    Filter:filtersSlice,
    wishlist: AddToWishlistSlice.reducer,
    RemoveWishlist:RemoveWishlistSlice.reducer,
    GetWishlist:GetWishlistSlice.reducer,
    addCart:AddToCartSlice.reducer,
    GetCart:getCartSlice.reducer,
    remove:removeCardItemSlice.reducer,
    updateQuantity:updateQuantitySlice.reducer
  },
    // devTools: import.meta.env.MODE !== 'production'
    devTools: true
})
