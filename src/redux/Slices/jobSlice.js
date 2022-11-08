import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    appsThisWeek: (state, action) => {
      console.log(state.value)
    },
    displayJobs: (state, action) => {
      state.value = action.payload;
    },
    editJobs: (state, action) => {
      state.value = state.value.map((item) => {
        if (item._id === action.payload._id) {
          return { ...item, ...action.payload.updatedJob };
        } else {
          return item;
        }
      });
    },
    filterJobs: (state, action) => {
      state.value = state.value.filter((item) => {
        return (
          item.trackerStatus.toLowerCase() === action.payload.toLowerCase()
        );
      });
    },
    sortJobs: (state, action) => {
      if (action.payload === "jobTitleAZ") {
        state.value = state.value.sort((a, b) =>
          a.jobTitle.localeCompare(b.jobTitle)
        );
      } else if (action.payload === "companyAZ") {
        state.value = state.value.sort((a, b) =>
          a.companyName.localeCompare(b.companyName)
        );
      } else if (action.payload === "locationAZ") {
        state.value = state.value.sort((a, b) =>
          a.companyLocation.localeCompare(b.companyLocation)
        );
      } else if (action.payload === "oldest") {
        state.value = state.value.sort((a, b) =>
          a.dateApplied.localeCompare(b.dateApplied)
        );
      } else if (action.payload === "newest") {
        state.value = state.value.sort((a, b) => {
          let c = new Date(a.dateApplied);
          let d = new Date(b.dateApplied);
          return c < d ? 1 : -1;
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { displayJobs, editJobs, filterJobs, sortJobs, appsThisWeek } =
  jobsSlice.actions;

export default jobsSlice.reducer;
