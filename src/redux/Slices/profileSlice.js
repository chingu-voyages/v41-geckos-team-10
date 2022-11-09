import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: "Pat",
    lastName: "d'User",
    email:"pat@gmail.com",
    weeklyAppGoal:20,
  },
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    storeWeeklyAppGoal: (state, action) => {
      state.value.weeklyAppGoal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { } = profileSlice.actions;

export default profileSlice.reducer;
