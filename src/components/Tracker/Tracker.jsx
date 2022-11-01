import React from 'react';
import './Tracker.css'
import { NavBar } from '../NavBar';
import SortJobs from './SortJobs';
import { JOBS } from '../../dummycardata';
import TrackerFilter from './TrackerFilter'
import JobList from './JobList'
import AddJob from '../AddJob/AddJob';
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
    
    const [openTrackerDrawer, setOpenTrackerDrawer ] = useState('hidden');

    const handleOpenTrackerDrawer = () => {
       ( openTrackerDrawer === 'hidden') ? setOpenTrackerDrawer('visible') : setOpenTrackerDrawer('hidden')
    }

    const style = {visibility: openTrackerDrawer.isClosed ? 'hidden' : 'visible'};

    return(
        <div className="tracker-div">
            <NavBar />
            
            <div className='tracker-content'>
                <TrackerFilter filterHandler={filterHandler}/>
                <div className='tracker-control'>
                    <SortJobs 
                        jobs={data}
                        setData={setData}
                    />
                    <button
                        className='tracker-button' 
                        onClick={handleOpenTrackerDrawer}> Create Tracker </button>
                </div>
                <div>
                <JobList jobs={data}/>
                </div>
                
            </div>

            <div className={`tracker_drawer ${openTrackerDrawer}`}>
                <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer}/>
            </div>
        </div> 
    );
};

export default Tracker