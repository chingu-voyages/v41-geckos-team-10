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

  const handleToggle = (id) => {
    setFocusId(id - 1);
  };
  // Iterates through array and sends data for each job to JobCard component.
  const jobList = state.map((data) => {
    return (
      <div
        onClick={() => {
          handleToggle(data.id);
        }}
      >
        <JobCard
          className="tracker-page__card"
          jobDetails={data}
          key={data.id}
          onClick={() => {}}
        />
      </div>
    );
  });

  return (
    <div className="tracker-page">
      <NavBar />
      <SortJobs />
      {jobList}
      <EditJobPanel state={state} dispatch={dispatch} focusId={focusId} />
    </div>
  );
};

export default Tracker;
