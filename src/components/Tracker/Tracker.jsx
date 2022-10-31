import React, { useEffect } from "react";
import "./Tracker.css";
import { NavBar } from "../NavBar";
import SortJobs from "./SortJobs";
import { JOBS } from "../../dummycardata";
import { useState, useReducer } from "react";
import EditJobPanel from "./EditJobPanel";
import JobCard from "./JobCard";
import TrackerFilter from "./TrackerFilter";

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
  const [jobs, setJobs] = useState(state);
  const [filter, setFilter] = useState("all");
  const [focusId, setFocusId] = useState(0);
  const [openEditTrackerDrawer, setOpenEditTrackerDrawer] = useState({
    isClosed: true,
  });

  const filterHandler = (selected) => {
    if (selected.toLowerCase() === "all") {
      setJobs(state);
      setFocusId(0);
    } else {
      const filtered = state.filter(
        (job) => job.status.toLowerCase() === selected.toLowerCase()
      );
      if (filtered.length !== 0) {
        setJobs(filtered);
        setFocusId(0);
      } else {
        setJobs([]);
      }
    }
    setFilter(selected.toLowerCase());
  };

  useEffect(() => {
    if (filter === "all") {
      setJobs(state);
    } else {
      setJobs(
        state.filter((job) => job.status.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [state]);

  const handleOpenEditTrackerDrawer = () => {
    console.log(openEditTrackerDrawer);
    setOpenEditTrackerDrawer({ isClosed: !openEditTrackerDrawer.isClosed });
  };

  const style = {
    visibility: openEditTrackerDrawer.isClosed ? "hidden" : "visible",
  };

  const handleToggle = (id) => {
    setFocusId(id);
  };
  // Iterates through array and sends data for each job to JobCard component.
  const jobList = jobs.map((data, idx) => {
    return (
      <div
        onClick={() => {
          handleToggle(idx);
          if (openEditTrackerDrawer.isClosed) {
            handleOpenEditTrackerDrawer();
          }
        }}
      >
        <JobCard className="tracker-page__card" jobDetails={data} key={idx} />
      </div>
    );
  });

  return (
    <div className="tracker-page">
      <NavBar />
      <div className="tracker-div">
        <TrackerFilter filterHandler={filterHandler} />
        <SortJobs />
        {jobList}
        <div style={style}>
          <EditJobPanel
            state={jobs}
            dispatch={dispatch}
            focusId={focusId}
            handleOpenTrackerDrawer={handleOpenEditTrackerDrawer}
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
