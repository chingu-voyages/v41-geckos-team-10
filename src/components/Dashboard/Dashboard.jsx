import React from 'react';
import DashWeeklyAppGraph from './DashWeeklyAppGraph';
import DashJobCards from './DashJobCards';
import DashGoalItems from './DashGoalItems';
import DashHeader from './DashHeader';
import './Dashboard.css'

import { NavBar } from '../NavBar';

const Dashboard = () => {

    return(
        <div className='dashboard '>
        <NavBar />
            <div className='dashboard--div'>
                <DashHeader />
                    <div className='objectives-div'>
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