import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './authSlice';
import planetSlice from './planetSlice';

export const store = configureStore({
  reducer: {
    authentication: authenticationSlice,
    planets: planetSlice,
  },
});