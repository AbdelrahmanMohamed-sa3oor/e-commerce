// filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    search: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    inStock: '',
    minRating: '',
    sort: '',
    
  },
  reducers: {
    setFilter: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFilters: () => ({
      search: '',
      category: '',
      minPrice: '',
      maxPrice: '',
      inStock: '',
      minRating: '',
      sort: '',
    
    }),
  }
});

export const { setFilter, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
