import React from "react";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import './DashGoalItems.css'


const DashGoalItems = () => {

    const [dashGoalItem, setDashGoalItem] = useState([
        {item: "Login Streak"},
        {item: "Weekly Goals"},
        {item: "Latest Achievement"}
        ]);

   
    return (
        <div className='dashboard_tracker_container'>
            {dashGoalItem.map((track) => (
                <div 
                    className='dashboard_tracker_item' 
                    key={nanoid()}
                >
                    <p className='dashboard_tracker_item_text'>{track.item}</p>
                </div>  
            ))}
        </div>
)
}

export default DashGoalItems