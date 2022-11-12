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
    storeProfile: (state, action) => {
      state.value = action.payload;
      console.log("inSlice", state.value)
    },
    updateFirstName: (state, action) => {
      state.value.firstName = action.payload;
      console.log("inSlice First Name", state.value.firstName)
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeProfile, updateFirstName } = profileSlice.actions;

export default profileSlice.reducer;
