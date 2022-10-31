import React from 'react';
import JobCard from './JobCard';

const JobList = ({jobs}) => {
    
    return (
        <>
        {jobs.map((data) =>  
            <JobCard 
                className="tracker-page__card" 
                jobDetails={data} 
                key={data.id}
            /> 
        )} 
        </>
    )
    
} 

export default JobList 