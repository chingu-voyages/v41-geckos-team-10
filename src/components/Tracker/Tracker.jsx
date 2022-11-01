import React from 'react';
import './Tracker.css'
import AddJob from '../AddJob/AddJob';
import { NavBar } from '../NavBar';
import SortJobs from './SortJobs';
import { JOBS } from '../../dummycardata';
import TrackerFilter from './TrackerFilter'
import JobList from './JobList'
import { useState } from 'react';

const Tracker = () => {

    const [ data, setData ] = useState(JOBS)
    const [openTrackerDrawer, setOpenTrackerDrawer ] = useState({isClosed: true});

    const handleOpenTrackerDrawer = () => {
        setOpenTrackerDrawer({ isClosed: !openTrackerDrawer.isClosed});
    }

    const filterHandler = (selected) => {
        if(selected.toLowerCase() === "all") {
            setData(JOBS)
        } else {
            setData(JOBS.filter(job => job.status.toLowerCase() === selected.toLowerCase()))
        }
    }

    const style = {visibility: openTrackerDrawer.isClosed ? 'hidden' : 'visible'};

    return(
        <div className='tracker'>
            <NavBar />
            <TrackerFilter filterHandler={filterHandler}/>
            <div className="tracker-div">
                <SortJobs />
                <JobList jobs={data}/>
            </div>
            <button onClick={handleOpenTrackerDrawer}> Create Tracker </button>
            <div className='tracker_drawer' style={style}>
                <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer}/>
            </div>
        </div>  
    );
};

export default Tracker;
