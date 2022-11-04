import React, { useEffect } from "react";
import axios from "axios";
import "./Tracker.css";
import SortJobs from "./SortJobs";
import TrackerFilter from "./TrackerFilter";
import JobList from "./JobList";
import AddJob from "../AddJob/AddJob";
import EditJobPanel from "./EditJobPanel";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayJobs } from "../../redux/Slices/jobSlice";
import IsLoggedIn from "../IsLoggedIn";

/*
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
          return newState.sort((a, b) => a.jobtitle.localeCompare(b.jobTitle));
        } else if (action.sortSelection === "companyAZ") {
          return newState.sort((a, b) => a.companyName.localeCompare(b.companyName));
        } else if (action.sortSelection === "locationAZ") {
          return newState.sort((a, b) => a.companyLocation.localeCompare(b.companyLocation));
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
*/

const Tracker = () => {
  const user = useSelector((state) => state.user.value);
  const jobs = useSelector((state) => state.jobs.value);
  const [openTrackerDrawer, setOpenTrackerDrawer] = useState("hidden");
  const [sortSelection, setSortSelection] = useState("blank");
  const [openEditTrackerDrawer, setOpenEditTrackerDrawer] = useState({
    isClosed: true,
  });
  const [selectedJob, setSelectedJob] = useState({});
  const [filter, setFilter] = useState("all");
  const [focusId, setFocusId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobs", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          //console.log(res.data); // array of jobs from db for seeing data while developing
          dispatch(displayJobs(res.data));
        } else {
          console.log("Error");
        }
      });
  }, []);

  /*
  const filterHandler = (selected) => {
    if (selected.toLowerCase() === "all") {
      if (sortSelection === "jobTitleAZ") {
        jobs.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
      } else if (sortSelection === "companyAZ") {
        jobs.sort((a, b) => a.companyName.localeCompare(b.companyName));
      } else if (sortSelection === "locationAZ") {
        jobs.sort((a, b) => a.companyLocation.localeCompare(b.companyLocation));
      } else if (sortSelection === "newest") {
        jobs.sort((a, b) => a.dateApplied.localeCompare(b.dateApplied));
      }
      setJobs(state);
      setFocusId(0);
    } else {
      const filtered = state.filter(
        (job) => job.status.toLowerCase() === selected.toLowerCase()
      );
      if (sortSelection === "jobTitleAZ") {
        filtered.sort((a, b) => a.jobTitle.localeCompare(b.jobTitle));
      } else if (sortSelection === "companyAZ") {
        filtered.sort((a, b) => a.companyName.localeCompare(b.companyName));
      } else if (sortSelection === "locationAZ") {
        filtered.sort((a, b) => a.companyLocation.localeCompare(b.companyLocation));
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
  }; */

  /*
  useEffect(() => {
    if (filter === "all") {
      setFilteredJobs(state);
    } else {
      setJobs(
        state.filter((job) => job.trackerStatus.toLowerCase() === filter.toLowerCase())
      );
    }
  }, [state]);
  */

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

  /*const handleToggle = (id) => {
    setFocusId(id);
  };*/

  const handleClick = (job) => {
    setSelectedJob(job); 
    //handleToggle(idx);
    handleOpenEditTrackerDrawer();
  };

  if (user.isLoggedIn) {
    return (
      <div className="tracker-page">
        <div className="tracker-div">
          <div className="tracker-content">
            <TrackerFilter
              /* filterHandler={filterHandler} */
              openEditTrackerDrawer={openEditTrackerDrawer}
              setOpenEditTrackerDrawer={setOpenEditTrackerDrawer}
            />
            <div className="tracker-control">
              <SortJobs
                jobs={jobs}
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
            <JobList jobs={jobs} handleClick={handleClick}/>
          </div>
          <div className={`tracker_drawer ${openTrackerDrawer}`}>
            <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer} />
          </div>
          <div style={editStyle}>
            <EditJobPanel
              dispatch={dispatch}
              focusId={focusId}
              sortSelection={sortSelection}
              handleOpenTrackerDrawer={handleOpenEditTrackerDrawer}
              selectedJob={selectedJob}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <IsLoggedIn />;
  }
};
export default Tracker;
