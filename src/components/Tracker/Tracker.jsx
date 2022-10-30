import React from 'react';
import './Tracker.css'
import { NavBar } from '../NavBar';
import SortJobs from './SortJobs';
import { JOBS } from '../../dummycardata';
import JobCard from './JobCard';

const Tracker = () => {
    
    // Iterates through array and sends data for each job to JobCard component.
    const jobList = JOBS.map((data) => { 
        return (
            <JobCard 
                className="tracker-page__card" 
                jobDetails={data} 
            /> 
        )
    })

    return(
        <div className="tracker-page">
            <NavBar />
            <div className="tracker-div">
                <SortJobs />
                {jobList}
            </div>
            
        </div>
    );
};

export default Tracker