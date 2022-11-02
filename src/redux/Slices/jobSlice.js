import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    displayJobs: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { displayJobs } = jobsSlice.actions

export default jobsSlice.reducer