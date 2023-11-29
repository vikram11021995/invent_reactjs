import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    username: '',
    password: '',
    isAuthenticated: false,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.username = '';
      state.password = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export const selectAuth = (state) => state.authentication;

export default authSlice.reducer;