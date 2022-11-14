import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    firstName: "New",
    lastName: "User",
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
      console.log("firstanme", state.value.weeklyAppGoal)

    },
    updateFirstName: (state, action) => {
      state.value.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.value.lastName = action.payload;
    },
    updateWeeklyAppGoal: (state, action) => {
      state.value.weeklyAppGoal = action.payload;
    },
    updateEmail: (state, action) => {
      state.value.email = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { storeProfile, updateFirstName, updateLastName, updateWeeklyAppGoal, updateEmail } = profileSlice.actions;

export default profileSlice.reducer;
