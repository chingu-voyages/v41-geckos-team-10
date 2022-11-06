import React from 'react';
import JobCard from './JobCard';
import { useSelector } from 'react-redux';

const JobList = () => {
    const jobs = useSelector((state) => state.jobs.value);

    if(jobs.length !== 0) {
    return (
        <>
        {jobs.map((data) =>  
            <JobCard 
                className="tracker-page__card" 
                jobDetails={data} 
                key={data._id}
            /> 
        )} 
        </>
    )
    
}  else {
    return (
        <div>No Jobs Being Tracked</div>
    )
}
}

export default JobList;
