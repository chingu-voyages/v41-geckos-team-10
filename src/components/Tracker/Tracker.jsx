import React, { useEffect } from "react";
import "./Tracker.css";
import { NavBar } from "../NavBar";
import SortJobs from "./SortJobs";
import { JOBS } from "../../dummycardata";
import { useState, useReducer } from "react";
import EditJobPanel from "./EditJobPanel";
import TrackerFilter from "./TrackerFilter";
import AddJob from "../AddJob/AddJob";
import JobList from "./JobList";

const initialState = JOBS.map((data) => {
  //dummy data supplement
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
      let newState = state.map((item) => {
        if (item.id === action.id) {
          return { ...item, ...action.payload };
        } else {
          return item;
        }
      });
      if (action.sortSelection !== "blank") {
        if (action.sortSelection === "jobTitleAZ") {
          return newState.sort((a, b) => a.title.localeCompare(b.title));
        } else if (action.sortSelection === "companyAZ") {
          return newState.sort((a, b) => a.company.localeCompare(b.company));
        } else if (action.sortSelection === "locationAZ") {
          return newState.sort((a, b) => a.location.localeCompare(b.location));
        } else if (action.sortSelection === "newest") {
          return newState.sort((a, b) =>
            a.dateApplied.localeCompare(b.dateApplied)
          );
        }
      }
      return newState;
    default:
      return state;
  }
}

const Tracker = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [sortSelection, setSortSelection] = useState("blank");

  const [jobs, setJobs] = useState(state);
  const [filter, setFilter] = useState("all");
  const [focusId, setFocusId] = useState(0);
  const [openTrackerDrawer, setOpenTrackerDrawer] = useState("hidden");
  const [openEditTrackerDrawer, setOpenEditTrackerDrawer] = useState({
    isClosed: true,
  });

  const filterHandler = (selected) => {
    if (selected.toLowerCase() === "all") {
      if (sortSelection === "jobTitleAZ") {
        state.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortSelection === "companyAZ") {
        state.sort((a, b) => a.company.localeCompare(b.company));
      } else if (sortSelection === "locationAZ") {
        state.sort((a, b) => a.location.localeCompare(b.location));
      } else if (sortSelection === "newest") {
        state.sort((a, b) => a.dateApplied.localeCompare(b.dateApplied));
      }
      setJobs(state);
      setFocusId(0);
    } else {
        const filtered = state.filter(
        (job) => job.status.toLowerCase() === selected.toLowerCase()
      );
      if (sortSelection === "jobTitleAZ") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortSelection === "companyAZ") {
        filtered.sort((a, b) => a.company.localeCompare(b.company));
      } else if (sortSelection === "locationAZ") {
        filtered.sort((a, b) => a.location.localeCompare(b.location));
      } else if (sortSelection === "newest") {
        filtered.sort((a, b) => a.dateApplied.localeCompare(b.dateApplied));
      }
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

  const handleOpenTrackerDrawer = () => {
    openTrackerDrawer === "hidden"
      ? setOpenTrackerDrawer("visible")
      : setOpenTrackerDrawer("hidden");
  };

  const handleOpenEditTrackerDrawer = () => {
    setOpenEditTrackerDrawer({ isClosed: !openEditTrackerDrawer.isClosed });
  };

  const editStyle = {
    visibility: openEditTrackerDrawer.isClosed ? "hidden" : "visible",
  };

  const handleToggle = (id) => {
    setFocusId(id);
  };

  const handleClick = (idx) => {
    handleToggle(idx);
    if (openEditTrackerDrawer.isClosed) {
      handleOpenEditTrackerDrawer();
    }
  };

  return (
    <div className="tracker-page">
      <NavBar />
      <div className="tracker-div">
        <div className="tracker-content">
          <TrackerFilter
            filterHandler={filterHandler}
            openEditTrackerDrawer={openEditTrackerDrawer}
            setOpenEditTrackerDrawer={setOpenEditTrackerDrawer}
          />
          <div className="tracker-control">
            <SortJobs
              jobs={jobs}
              setData={setJobs}
              sortSelection={sortSelection}
              setSortSelection={setSortSelection}
            />
            <button
              className="tracker-button"
              onClick={handleOpenTrackerDrawer}
            >
              Create Tracker
            </button>
          </div>
          <JobList jobs={jobs} handleClick={handleClick} />
        </div>
        <div className={`tracker_drawer ${openTrackerDrawer}`}>
          <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer} />
        </div>
        <div style={editStyle}>
          <EditJobPanel
            state={jobs}
            setJobs={setJobs}
            dispatch={dispatch}
            focusId={focusId}
            sortSelection={sortSelection}
            handleOpenTrackerDrawer={handleOpenEditTrackerDrawer}
          />
        </div>
      </div>
    </div>
  );
};

export default Tracker;
