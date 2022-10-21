import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import WeeklyAppGraph from '../components/WeeklyAppGraph';


const Dashboard = () => {
    
    const [memberName, setMemberName] = useState("Pat d'User");
    const [profilePic, setProfilePic] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Uwo-kkvTH_pEjCu0O4z7oQAAAA%26pid%3DApi&f=1&ipt=05ed7a42f68098e6fac9bfc7fd61e9576b8082bdb45f0bc2adacca5b37256e03&ipo=images");

    const [trackerItems, setTrackerItems] = useState([
        {item: "Login Streak"},
        {item: "Weekly Goals"},
        {item: "Latest Achievement"}
        ]);

    const [jobCards, setJobCards] = useState([
        {item: "Job Card #1"},
        {item: "Job Card #2"},
        {item: "Job Card #3"}
        ]);
    
    return(
        <div className='dashboard grid grid-rows-5 bg-bg-blue text-white h-screen'>
            <div className='dashboard_user-profile flex flex-column m-3'>
                
                <div className='dashboard-user-profile_pic m-2'>
                    <Link to='/profile' className=''>
                        <img src={profilePic} alt='Profile' className='h-full'/>
                    </Link>
                </div>
                <p className='dashboard_user-profile_text self-center m-2 text-4xl '>
                    Hello, {memberName}!!
                </p>
            </div>
            <div className='dashboard_tracker grid grid-rows-4 mx-6'>
                <p className='dashboard_tracker_text self-end ml-8 text-xl '>
                    Most Active Goals and Achievments
                </p>
                <div className='dashboard_tracker_container row-span-3 flex flex-column'>
                    {trackerItems.map((track) => (
                        <div 
                            className='dashboard_tracker bg-lt-green basis-2/6 border-2 m-2 rounded-3xl' 
                            key={nanoid()}
                        >
                            <p className='dashboard_tracker_text  text-center'>{track.item}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div className='dashboard_job-card grid grid-rows-4 mx-6'>
                <p className='dashboard_job-card_text self-end ml-8 text-xl'>
                    Most Recent Applications
                </p>
                <div className='dashboard_job-card_container row-span-3 flex flex-column mx-12'>
                    {jobCards.map((job) => (
                        <div 
                            className='dashboard_job-card_item bg-lt-green basis-2/6 border-2 m-4 rounded-3xl' 
                            key={nanoid()}
                        >
                            <p className='dashboard_job-card_text text-center'>{job.item}</p>
                        </div> 
                    ))}
                </div>
            </div>
            <div className='dashboard_job-tracker row-span-2 grid grid-rows-4 mx-6'>
                <p className='dashboard_job-tracker_text self-end ml-8 text-xl'>
                    Weekly Job Application Tracker
                </p>
                <div className='dashboard_job-tracker_graph bg-lt-green border-2 row-span-3 m-6 rounded-3xl text-center '>
                    <WeeklyAppGraph />
                </div>
            </div>
        </div>
    );
};

export default Dashboard