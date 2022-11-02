import React from 'react';

const SortJobs = () => {
    function sortJobs(e) {
        const sortOption = e.target.value;
        console.log(`You want to sort by ${sortOption}`)
    }

    return (
        <div className='tracker '>
           <label for="sort-jobs">Sort by:</label>
            <select name="pets" id="sort-jobs" onChange={sortJobs}>
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