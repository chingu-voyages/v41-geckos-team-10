import React from "react";
import "./Tracker.css";
import { NavBar } from "../NavBar";
import SortJobs from "./SortJobs";
import { JOBS } from "../../dummycardata";
import { useState, useReducer } from "react";
import EditJobPanel from "./EditJobPanel";
import JobCard from "./JobCard";

const initialState = JOBS.map((data) => {
  return {
    ...data,
    dateApplied: "2022-10-31",
    followUpSent: true,
    jobListing: "LinkedIn",
    contactInfo: "0123456789",
    resume: "Resume.pdf",
    salary: "50,000 USD",
  };
});

function reducer(state, action) {
  switch (action.type) {
    case "EDIT":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.payload };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

const Tracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [focusId, setFocusId] = useState(0);
  const [openEditTrackerDrawer, setOpenEditTrackerDrawer] = useState({
    isClosed: true,
  });

  const handleOpenEditTrackerDrawer = () => {
    console.log(openEditTrackerDrawer);
    setOpenEditTrackerDrawer({ isClosed: !openEditTrackerDrawer.isClosed });
  };

  const style = {
    visibility: openEditTrackerDrawer.isClosed ? "hidden" : "visible",
  };

  const handleToggle = (id) => {
    setFocusId(id - 1);
  };
  // Iterates through array and sends data for each job to JobCard component.
  const jobList = state.map((data) => {
    return (
      <div
        onClick={() => {
          handleToggle(data.id);
          if (openEditTrackerDrawer.isClosed) {
            handleOpenEditTrackerDrawer();
          }
        }}
      >
        <JobCard
          className="tracker-page__card"
          jobDetails={data}
          key={data.id}
        />
      </div>
    );
  });

  return (
    <div className="tracker-page">
      <NavBar />
      <SortJobs />
      {jobList}
      <div style={style}>
        <EditJobPanel
          state={state}
          dispatch={dispatch}
          focusId={focusId}
          handleOpenTrackerDrawer={handleOpenEditTrackerDrawer}
        />
      </div>
    </div>
  );
};

export default Tracker;
