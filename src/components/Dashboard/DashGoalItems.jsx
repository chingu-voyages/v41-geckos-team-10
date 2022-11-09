import React, { useEffect } from "react";
import { nanoid } from 'nanoid';
import './DashGoalItems.css'


const DashGoalItems = () => {

    const dashGoalItem = [
        {item: "Login Streak"},
        {item: "Weekly Application Goal"},
    ]
     
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