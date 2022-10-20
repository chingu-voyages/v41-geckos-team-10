import React from "react";
import { useState } from "react";
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
    ])

    // const Line = ( bottom ) => {
    //     return (
    //         <div className='graph_line'
    //             style={ bottom: `{bottom}` } 
    //         />
    //     )
    // };

    return (
        <div className='graph bg-white text-black w-full h-full rounded-3xl'>
            <div className='graph_container relative w-full h-full'>
                <div className='graph_text'>

                </div>
                <div className='graph_line_container'>
                    <div className='graph_line bottom-1/8' />  
                    <div className='graph_line bottom-1/4' />  
                    <div className='graph_line bottom-3/8' />
                    <div className='graph_line bottom-1/2' />  
                    <div className='graph_line bottom-5/8' />
                    <div className='graph_line bottom-3/4' />  
                    <div className='graph_line bottom-7/8' />
                </div>

            </div>
        </div>
    );
}

export default WeeklyAppGraph