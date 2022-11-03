import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './Slices/jobSlice';
import userReducer from './Slices/userSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
  },
})