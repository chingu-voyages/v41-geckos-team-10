import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './SortJobs.css';

const SortJobs = () => {
    const jobs = useSelector((state) => state.jobs.value); //jobs is an array of objects from the redux store
    const [sortSelection, setSortSelection] = useState("blank")
    let jobsList = [...jobs];

    useEffect(() => {
        // Sorts according to which option was selected.
        if (sortSelection === "jobTitleAZ") {
            jobsList.sort((a, b) =>
                a.jobTitle.localeCompare(b.jobTitle)
            )
        } else if (sortSelection === "companyAZ") {
            jobsList.sort((a, b) =>
                a.companyName.localeCompare(b.companyName)
            )
        } else if (sortSelection === "locationAZ") {
            jobsList.sort((a, b) =>
                a.companyLocation.localeCompare(b.companyLocation)
            )
        }
        //setData(jobsList)

    }, [sortSelection])

    function updateSortSelection(e) {
        // Updates the sortSelection state to the selected sort option
        setSortSelection(e.target.value); 
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
