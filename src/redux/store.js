import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from './Slices/jobSlice';
import userReducer from './Slices/userSlice';
import profileReducer from './Slices/profileSlice'

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    profile:profileReducer,
  },
})