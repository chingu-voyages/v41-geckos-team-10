import React from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import '../../index.css'


const DashJobCards = () => {

    const [dashJobCards, setDashJobCards] = useState([
        {item: "Job Card #1"},
        {item: "Job Card #2"},
        {item: "Job Card #3"}
        ]);

    return (
    <div className='dashboard_job-card_container row-span-3 flex flex-column mx-12'>
        {dashJobCards.map((job) => (
            <div 
                className='dashboard_job-card_item bg-lt-green basis-2/6 border-2 m-4 rounded-3xl' 
                key={nanoid()}
            >
                <p className='dashboard_job-card_text text-center'>{job.item}</p>
            </div> 
        ))}
    </div>)
}

export default DashJobCards