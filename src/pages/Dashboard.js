import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    
    const [memberName, setMemberName] = useState("Elliot Erickson")
    const [profilePic, setProfilePic] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Uwo-kkvTH_pEjCu0O4z7oQAAAA%26pid%3DApi&f=1&ipt=05ed7a42f68098e6fac9bfc7fd61e9576b8082bdb45f0bc2adacca5b37256e03&ipo=images")
    
    return(
        <div className='dashboard grid grid-rows-4 bg-bg-blue text-white'>
            <div className='dashboard_user-profile flex flex-column m-3'>
                <div className='dashboard-user-profile_pic basis-1/6 m-2'>
                    <Link to='/profile'>
                        <img src={profilePic} alt='Profile'/>
                    </Link>
                </div>
                <p className='dashboard_user-profile_text self-center m-2 text-4xl '>
                    Hello, {memberName}!!
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
    );
};

export default Dashboard