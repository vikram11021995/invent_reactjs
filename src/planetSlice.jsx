import { createSlice } from '@reduxjs/toolkit';

const planetSlice = createSlice({
  name: 'planets',
  initialState: {
    searchQuery: '',
    results: [],
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchQuery, setResults } = planetSlice.actions;

export const selectPlanets = (state) => state.planets;

export default planetSlice.reducer;