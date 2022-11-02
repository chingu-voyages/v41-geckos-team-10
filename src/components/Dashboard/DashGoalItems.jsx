import React from "react";
import { nanoid } from 'nanoid';
import { useState } from 'react';
import WeeklyAppGoal from './WeeklyAppGoal/WeeklyAppGoal'
import './DashGoalItems.css'


const DashGoalItems = () => {

    const [dashGoalItem, setDashGoalItem] = useState([
        {item: "Login Streak"},
        {
            item: "Weekly Goals", 
            component: 
                <WeeklyAppGoal 
                size={100}
                strokeWidth={10}
             
                
                />
        },
        ]);

   
    return (
        <div className='dashboard_tracker_container'>
            {dashGoalItem.map((track) => (
                <div 
                    className='dashboard_tracker_item' 
                    key={nanoid()}
                >   {track.component}
                    <p className='dashboard_tracker_item_text'>{track.item}</p>
                </div>  
            ))}
        </div>
)
}

export default DashGoalItems