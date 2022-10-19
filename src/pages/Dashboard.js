import React from 'react';

const Dashboard = () => {
    return(
        <div className='dashboard grid grid-rows-4'>
            <div className='dashboard_user-profile flex flex-column border-2 m-3'>
                <div className='dashboard-user-profile_pic basis-1/6 border-2 m-2'>
                    User Profile Pic
                </div>
                <p className='dashboard_user-profile_text self-center border-2 m-2 text-4xl '>
                    Hello, Member Name!!
                </p>
            </div>
            <div className='dashboard_tracker-dashboard flex flex-column border-2 m-6'>
                <div className='dashboard_tracker-dashboard_item basis-2/6 border-2'>
                    <p className='dashboard_tracker-dashboard_text'>Login Streak</p>
                </div>
                <div className='dashboard_tracker-dashboard_item basis-2/6 border-2'>
                    <p>Weekly Goals</p>
                </div>
                <div className='dashboard_tracker-dashboard_item basis-2/6 border-2'>
                    <p>Last Achievement</p>
                </div>
            </div>
            <div className='dashboard_job-card flex flex-column border-2 m-3'>
                <div className='dashboard_job-card_item basis-2/6 border-2 m-4'>
                    <p className='dashboard_job-card_text'>Job Card #1</p>
                </div>
                <div className='dashboard_job-card_item basis-2/6 border-2 m-4'>
                    <p className='dashboard_job-card_text'>Job Card #2</p>
                </div>
                <div className='dashboard_job-card_item basis-2/6 border-2 m-4'>
                    <p className='dashboard_job-card_text'>Job Card #3</p>
                </div>
            </div>
            <div className='dashboard_job-tracker border-2 m-3'>
                <p className='dashboard_job-tracker_text'>Weekly Job Application Tracker</p>
                <div className='dashboard_job-tracker_graph border-2 m-6'>
                    Graph Goes Here
                </div>
            </div>
        </div>
    )
}

export default Dashboard