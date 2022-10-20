import React from "react";
import { useState } from "react";
import { Line, Bar } from "./GraphUtilities";

import "../index.css"

function WeeklyAppGraph() {

    const [weeklyAppGraph, setWeeklyAppGraph] = useState([
        {day: "Mon", value: 0},
        {day: "Tues", value: 0},
        {day: "Wed", value: 0},
        {day: "Thur", value: 0},
        {day: "Fri", value: 0},
        {day: "Sat", value: 0},
        {day: "Sun", value: 0},
    ]);

    

    return (
        <div className='graph bg-white text-black w-full h-full rounded-3xl'>
            <div className='graph_container relative w-full h-full '>
                <div className='graph_text absolute w-full h-1/8 bottom-0 bg-lime-200 rounded-b-3xl'>
                
                </div>
                <div className='graph_line_container w-full h-full bg-red-100 rounded-3xl'>
                    <Line spacing='1/8' /> 
                    <Line spacing='1/4' /> 
                    <Line spacing='3/8' /> 
                    <Line spacing='1/2' /> 
                    <Line spacing='5/8' /> 
                    <Line spacing='3/4' />
                    <Line spacing='7/8' />  
                    <Bar percent='24'/>
                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph