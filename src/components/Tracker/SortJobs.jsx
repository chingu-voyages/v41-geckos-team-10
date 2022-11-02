import React from 'react';
import { useState, useEffect } from 'react';
import './SortJobs.css';

const SortJobs = (props) => {
    const [sortSelection, setSortSelection] = useState("blank")
    let jobsList = [...props.jobs];

    useEffect(() => {
        // Sorts according to which option was selected.
        if (sortSelection === "jobTitleAZ") {
            jobsList.sort((a, b) =>
                a.title.localeCompare(b.title)
            )
        } else if (sortSelection === "companyAZ") {
            jobsList.sort((a, b) =>
                a.company.localeCompare(b.company)
            )
        } else if (sortSelection === "locationAZ") {
            jobsList.sort((a, b) =>
                a.location.localeCompare(b.location)
            )
        }
        props.setData(jobsList)

    }, [sortSelection])

    function updateSortSelection(e) {
        // Updates the sortSelection state to the selected sort option
        setSortSelection(e.target.value); 
    }

    return (
        <div className='tracker_sort-jobs'>
           <label for="sort-jobs">Sort by:</label>
            <select className="tracker-page__sort-menu" name="sortList" id="sort-jobs" onChange={updateSortSelection}>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="jobTitleAZ">Job title</option>
                <option value="companyAZ">Company</option>
                <option value="locationAZ">Location</option>
            </select>
        </div>
    )
    
}

export default SortJobs;