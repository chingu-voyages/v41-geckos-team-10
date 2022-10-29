import React from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './DashJobCards.css';
import '../../index.css'


const DashJobCards = () => {

    const [dashJobCards, setDashJobCards] = useState([
        {item: "Job Card #1"},
        {item: "Job Card #2"},
        {item: "Job Card #3"}
        ]);

    return (
    <div className='dashboard_job-card_container'>
        {dashJobCards.map((job) => (
            <div 
                className='dashboard_job-card_item' 
                key={nanoid()}
            >
                <p className='dashboard_job-card_text'>{job.item}</p>
            </div> 
        ))}
    </div>)
}

export default DashJobCards