import { configureStore, createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    loading: true,
    // We start with an empty object; keys like 'about', 'skills' 
    // will be added dynamically as data arrives.
  },
  reducers: {
    // This is now 100% generic
    updatePortfolioData: (state, action) => {
      const { key, data } = action.payload;
      state[key] = data; 
      state.loading = false;
    },
  },
});

export const { updatePortfolioData } = portfolioSlice.actions;

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice.reducer,
  },
});