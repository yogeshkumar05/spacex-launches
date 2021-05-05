import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'dashboard',
  initialState: {
    launches: []
  },
  reducers: {
    fetchLaunchData: (state, action) => {
      console.log(action.payload);
      state.launches = [...action.payload]
    }
  },
})

export const {fetchLaunchData } = counterSlice.actions

export default counterSlice.reducer