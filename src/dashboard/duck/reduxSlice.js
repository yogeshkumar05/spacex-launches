import { createSlice } from '@reduxjs/toolkit';
import {
  filterLaunches
} from './logic';

export const counterSlice = createSlice({
  name: 'dashboard',
  initialState: {
    launches: [],
    filteredLaunches: [],
    isLoading: true,
  },
  reducers: {
    fetchLaunchData: (state, action) => {
      state.launches = [...action.payload];
      state.filteredLaunches = [...action.payload];
      state.isLoading = false;
    },
    filterLaunchData: (state, action) => {
      const filteredData = filterLaunches({...action.payload});
      state.filteredLaunches = [...filteredData];
    }
  },
})

export const {
  fetchLaunchData,
  filterLaunchData
} = counterSlice.actions

export default counterSlice.reducer