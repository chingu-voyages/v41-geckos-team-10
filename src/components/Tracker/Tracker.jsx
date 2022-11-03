import React, { useEffect } from "react";
import axios from "axios";
import "./Tracker.css";
import { NavBar } from "../NavBar";
import { JOBS } from "../../dummycardata";
import SortJobs from "./SortJobs";
import TrackerFilter from "./TrackerFilter";
import JobList from "./JobList";
import AddJob from "../AddJob/AddJob";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { displayJobs } from "../../redux/Slices/jobSlice";
import { useSelector } from "react-redux";
import IsLoggedIn from "../IsLoggedIn";

const Tracker = () => {
  const [openTrackerDrawer, setOpenTrackerDrawer] = useState("hidden");
  const user = useSelector((state) => state.user.value);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/jobs", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data); // array of jobs from db for seeing data while developing
          dispatch(displayJobs(res.data));
        } else {
          console.log("Error");
        }
      });
  }, []);

  const filterHandler = (selected) => {
    if (selected.toLowerCase() === "all") {
      setData(JOBS);
    } else {
      setData(
        JOBS.filter(
          (job) => job.status.toLowerCase() === selected.toLowerCase()
        )
      );
    }
  };

  const handleOpenTrackerDrawer = () => {
    openTrackerDrawer === "hidden"
      ? setOpenTrackerDrawer("visible")
      : setOpenTrackerDrawer("hidden");
  };

  const style = {
    visibility: openTrackerDrawer.isClosed ? "hidden" : "visible",
  };

  if (user.isLoggedIn) {
    return (
      <div className="tracker-div">
        <NavBar />

        <div className="tracker-content">
          <TrackerFilter filterHandler={filterHandler} />
          <div className="tracker-control">
            <SortJobs setData={setData} />
            <button
              className="tracker-button"
              onClick={handleOpenTrackerDrawer}
            >
              {" "}
              Create Tracker{" "}
            </button>
          </div>
          <div>
            <JobList />
          </div>
        </div>

        <div className={`tracker_drawer ${openTrackerDrawer}`}>
          <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer} />
        </div>
      </div>
    );
  } else {
    return (
      <IsLoggedIn />
    );
  }
};
export default Tracker;
