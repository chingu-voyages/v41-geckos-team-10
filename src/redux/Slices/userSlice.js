import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isLoggedIn: false,
    user: {},
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.value.isLoggedIn = true;
      state.value.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.value.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedUser } = userSlice.actions;

export default userSlice.reducer;
