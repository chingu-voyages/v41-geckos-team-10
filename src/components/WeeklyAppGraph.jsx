import React from "react";
import { useState } from "react";

function WeeklyAppGraph() {

    const [weeklyAppGraph, setWeeklyAppGraph] = useState([
        {day: "Mond", value: 0},
        {day: "Tues", value: 0},
        {day: "Wed", value: 0},
        {day: "Thur", value: 0},
        {day: "Fri", value: 0},
        {day: "Sat", value: 0},
        {day: "Sun", value: 0},
    ])


    return (
        <div className='graph'>
            <div className='graph_container'>
                <p>Graph Goes Here</p>
                <div className='graph_content bg-bg-blue'>
                    Lines Go Here
                    <div className='graph_line'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph