import React from "react";
import { sortJobs } from "../../redux/Slices/jobSlice";

import "./SortJobs.css";

const SortJobs = ({ dispatch, sortSelection, setSortSelection }) => {
  function updateSortSelection(e) {
    // Updates the sortSelection state to the selected sort option
    setSortSelection(e.target.value);
    dispatch(sortJobs(e.target.value));
  }

  return (
    <div className="tracker_sort-jobs">
      <label for="sort-jobs">Sort by:</label>
      <select
        className="tracker-page__sort-menu"
        name="sortList"
        id="sort-jobs"
        onChange={updateSortSelection}
        value={sortSelection}
      >
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
        <option value="jobTitleAZ">Job title</option>
        <option value="companyAZ">Company</option>
        <option value="locationAZ">Location</option>
      </select>
    </div>
  );
};

export default SortJobs;
