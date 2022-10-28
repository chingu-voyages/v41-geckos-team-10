import React from 'react';
import './Tracker.css'
import AddJob from '../AddJob/AddJob';
import { useState } from 'react';

const Tracker = () => {

    const [openTrackerDrawer, setOpenTrackerDrawer ] = useState({isClosed: true});

    const handleOpenTrackerDrawer = () => {
        setOpenTrackerDrawer({ isClosed: !openTrackerDrawer.isClosed});
    }

    const style = {visibility: openTrackerDrawer.isClosed ? 'hidden' : 'visible'};

    return(
        <div className='tracker flex justify-end'>
            <button onClick={handleOpenTrackerDrawer}> Create Tracker </button>
            <div className='tracker_drawer' style={style}>
                <AddJob handleOpenTrackerDrawer={handleOpenTrackerDrawer}/>
            </div>
        </div>  
    );
};

export default Tracker