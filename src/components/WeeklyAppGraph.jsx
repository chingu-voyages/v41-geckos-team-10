import React from "react";
import { useState } from "react";

function WeeklyAppGraph() {

    const [weeklyAppGraph, setWeeklyAppGraph] = useState([
        {day: "Mon", value: 0},
        {day: "Tues", value: 0},
        {day: "Wed", value: 0},
        {day: "Thur", value: 0},
        {day: "Fri", value: 0},
        {day: "Sat", value: 0},
        {day: "Sun", value: 0},
    ])


    return (
        <div className='graph bg-white relative text-black w-full h-full rounded-3xl'>
            <div className='graph_container relative w-full h-full'>
                <div className='graph_line absolute top-0 bottom-0 left-10 w-1 bg-black'>  
                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph