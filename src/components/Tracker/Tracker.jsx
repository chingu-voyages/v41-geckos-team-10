import React from 'react';
import './Tracker.css'
import { NavBar } from '../NavBar';
import SortJobs from './SortJobs';
import { JOBS } from '../../dummycardata';
import TrackerFilter from './TrackerFilter'
import JobList from './JobList'
import { useState } from 'react';

const Tracker = () => {
    const [ data, setData ] = useState(JOBS)

    const filterHandler = (selected) => {
        if(selected.toLowerCase() === "all") {
            setData(JOBS)
        } else {
            setData(JOBS.filter(job => job.status.toLowerCase() === selected.toLowerCase()))
        }
    }

    return(
        <div className="tracker-page">
            <NavBar />
            <TrackerFilter filterHandler={filterHandler}/>
            <div className="tracker-div">
                <SortJobs />
                <JobList jobs={data}/>
            </div>
        </div>
    );
};

export default Tracker