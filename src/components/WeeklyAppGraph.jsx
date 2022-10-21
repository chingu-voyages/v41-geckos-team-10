import React from 'react';
import { useState } from "react";
import { Line, Bar } from "./GraphUtilities";
import '../style/dashboard.css'
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

    const graphLineSpacingArr = ['1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8']
    const graphBarArr = [{percent: '10', spacing: '0'}, {percent: '10', spacing: '32'}, {percent: '10', spacing: '64'},{percent: '10', spacing: '96'},{percent: '10', spacing: '160'},{percent: '10', spacing: '200'}]
    return (
        <div className='graph bg-white text-black w-full h-full rounded-3xl'>
            <div className='graph_container flex relative w-full h-full '>
                <div className='graph_text absolute w-full h-1/8 bottom-0 bg-lime-200 rounded-b-3xl'>
                
                </div>
                <div className='graph_line_container relative w-full h-7/8 bg-red-100 rounded-t-3xl'>
                    {graphLineSpacingArr.map(line => {
                        return (
                        <div className={`graph_line bottom-${line}`} />
                        )
                    })}
                    {graphBarArr.map(bar => {
                        return (
                        <div className={`graph_bar h-${bar.percent} left-${bar.spacing}`} />
                        )
                    })}
                    <div className='graph_bar bottom-1/8' />
                    <div className='graph_bar bottom-1/4' />
                    <div className='graph_bar bottom-3/8' />
                    <div className='graph_bar bottom-1/2' />
                    <div className='graph_bar bottom-5/8' />
                    <div className='graph_bar bottom-3/4' />
                    <div className='graph_bar bottom-7/8' />
                
                    
                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph