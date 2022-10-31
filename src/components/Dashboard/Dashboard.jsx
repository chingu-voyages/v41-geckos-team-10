import React from 'react';
import DashWeeklyAppGraph from './DashWeeklyAppGraph';
import DashJobCards from './DashJobCards';
import DashGoalItems from './DashGoalItems';
import DashHeader from './DashHeader';
import './Dashboard.css'

import { NavBar } from '../NavBar';
// import {Drawer, ButtonToolbar, Button} from 'rsuite';
// import { useState } from 'react';

const Dashboard = () => {
//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState('left');
//   const handleOpen = key => {
//     setPlacement(key);
//     setOpen(true);
//     };
    return(
          <div className='dashboard '>
  {/* <ButtonToolbar>
    <Button onClick={() => handleOpen('left')}>Open</Button>
  </ButtonToolbar>

  <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
    <Drawer.Body>
    <NavBar />
    </Drawer.Body>
  </Drawer>  */}
    <NavBar />
    <DashHeader />
            <div className='dashboard_div'>
                <div className='dashboard_tracker'>
                    <p className='dashboard_tracker_text'>
                        Most Active Goals and Achievments
                    </p>
                    <DashGoalItems />
                </div>
                <div className='dashboard_job-card'>
                    <p className='dashboard_job-card_text'>
                        Most Recent Applications
                    </p>
                    <DashJobCards />
                </div>
                <div className='dashboard_job-tracker'>
                    <p className='dashboard_job-tracker_text'>
                        Weekly Job Application Tracker
                    </p>
                    <div className='dashboard_job-tracker_graph'>
                    <DashWeeklyAppGraph />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard