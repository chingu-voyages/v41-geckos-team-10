import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './Slices/jobSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
  },
})