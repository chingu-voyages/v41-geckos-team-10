import React from 'react';
import { useState } from "react";
import { Line, Bar } from "./GraphUtilities";
import "../index.css"

// How to Build a Bar Graph With React https://dzuz14.medium.com/how-to-build-a-bar-graph-with-react-458a19ef0ba0//

function WeeklyAppGraph() {

    const graphTextArr = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    const graphLineSpacingArr = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
    const graphBarArr = [
        {percent: '10', spacing: '0', day: "Mon", value: 0}, 
        {percent: '10', spacing: '1/7', day: "Tues", value: 0}, 
        {percent: '10', spacing: '2/7', day: "Wed", value: 0},
        {percent: '10', spacing: '3/7', day: "Thur", value: 0},
        {percent: '10', spacing: '4/7', day: "Fri", value: 0},
        {percent: '10', spacing: '5/7', day: "Sat", value: 0}, 
        {percent: '10', spacing: '6/7', day: "Sun", value: 0}
    ];

    return (
        <div className='graph bg-white text-black w-full h-full rounded-3xl'>
            <div className='graph_container relative w-full h-full '>
                <div className='graph_text_container flex flex-row justify-around absolute w-full h-1/8 bottom-0 bg-lt-green rounded-b-3xl'>
                  
                </div>
                <div className='graph_line_container absolute grid grid-cols-7 w-full h-7/8 bg-red-100 rounded-t-3xl'>
                    {graphLineSpacingArr.map(line => {
                        return (
                        <div className={`graph_line bottom-${line}`} />
                        )
                    })}
                    {graphBarArr.map(bar => {
                        return (
                        <div className={`graph_bar h-${bar.percent} left-${bar.spacing}`}>
                            <div className='graph_text text-center'>
                                {bar.day} {bar.value}
                            </div>
                        </div>
                        
                        )
                    })}
                    {/* <div className='graph_bar h-10 left-0' /> 
                    <div className='graph_bar h-10 left-1/7' />
                    <div className='graph_bar h-10 left-2/7' /> 
                    <div className='graph_bar h-10 left-3/7' /> 
                    <div className='graph_bar h-10 left-4/7' /> 
                    <div className='graph_bar h-10 left-5/7' />
                    <div className='graph_bar h-10 left-6/7' />  */}
                    {/* 
                    <div className='graph_line bottom-0' />
                    <div className='graph_line bottom-1/8' />
                    <div className='graph_line bottom-1/4' />
                    <div className='graph_line bottom-3/8' />
                    <div className='graph_line bottom-1/2' />
                    <div className='graph_line bottom-5/8' />
                    <div className='graph_line bottom-3/5' />
                    <div className='graph_line bottom-7/8' /> */}

                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph