import { configureStore } from '@reduxjs/toolkit';
import dashoardReducer from './dashboard/duck/reduxSlice';

export default configureStore({
  reducer: {
    dashoard: dashoardReducer
  },
})