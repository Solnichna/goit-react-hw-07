import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: ''
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
    setSearchTerm(state, action) {
      state.name = action.payload;
    }
  }
});

export const { changeFilter, setSearchTerm } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.name;

export default filtersSlice.reducer;
