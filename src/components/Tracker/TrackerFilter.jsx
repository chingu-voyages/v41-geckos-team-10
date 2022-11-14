import React from "react";
import axios from "axios";
import "./TrackerFilter.css";
import { displayJobs, filterJobs, sortJobs } from "../../redux/Slices/jobSlice";
import favoritestar from "../../assets/favoritestar.svg";

const TrackerFilter = ({
  openEditTrackerDrawer,
  setOpenEditTrackerDrawer,
  dispatch,
  sortSelection,
  filterHandler,
}) => {
  const handleClick = async (value) => {
    filterHandler(value);
    const getJobs = axios
      .get("http://localhost:4000/jobs", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data); // array of jobs from db for seeing data while developing
          dispatch(displayJobs(res.data));
          if (value !== "all") {
            dispatch(filterJobs(value));
          }
          if (sortSelection !== "blank") {
            dispatch(sortJobs(sortSelection));
          }
        } else {
          console.log("Error");
        }
      });

    if (!openEditTrackerDrawer.isClosed) {
      setOpenEditTrackerDrawer({ isClosed: true });
    }
  };

  return (
    <div className='trackerFilter_div'>
      <li className='trackerFilter_list'>
        <ul className='trackerFilter_list-item'>
          <button
            className='trackerFilter_button button-all'
            onClick={() => handleClick("all")}
          >
            All
          </button>
        </ul>
        <ul className='trackerFilter_list-item'>
          <button
            className='trackerFilter_button button-applied'
            onClick={() => handleClick("Applied")}
          >
            Applied
          </button>
        </ul>
        <ul className='trackerFilter_list-item'>
          <button
            className='trackerFilter_button button-upcomingInterview'
            onClick={() => handleClick("Upcoming Interview")}
          >
            Upcoming Interview
          </button>
        </ul>
        <ul className='trackerFilter_list-item'>
          <button
            className='trackerFilter_button button-interviewed'
            onClick={() => handleClick("Interviewed")}
          >
            Interviewed
          </button>
        </ul>
        <ul className='trackerFilter_list-item'>
          <button
            className='trackerFilter_button button-archived'
            onClick={() => handleClick("Archived")}
          >
            Archived
          </button>
        </ul>
        {/* <ul className="trackerFilter_list-item">
                    <button className="trackerFilter_button button-favorite"><img src={favoritestar} alt="favorite" className='favorite-icon' /></button>
                </ul> */}
            </li>
        </div>
    );

}

export default TrackerFilter;