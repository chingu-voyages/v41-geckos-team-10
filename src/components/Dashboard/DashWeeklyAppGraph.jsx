import React from 'react';
import '../../index.css';
import './DashWeeklyAppGraph.css'

// How to Build a Bar Graph With React https://dzuz14.medium.com/how-to-build-a-bar-graph-with-react-458a19ef0ba0//

function WeeklyAppGraph() {

    const graphLineSpacingArr = ['0', '1/8', '1/4', '3/8', '1/2', '5/8', '3/4', '7/8'];
    const graphBarArr = [
        {spacing: '0', day: 'Sun', percent: 12}, 
        {spacing: '1/7', day: 'Mon', percent: 8}, 
        {spacing: '2/7', day: 'Tues', percent: 20},
        {spacing: '3/7', day: 'Wed', percent: 12},
        {spacing: '4/7', day: 'Thurs', percent: 8},
        {spacing: '5/7', day: 'Fri', percent: 20}, 
        {spacing: '6/7', day: 'Sat', percent: 20}
    ];

    const d = new Date();
    const baseDay = d.getDate();
    const dayNum = d.getDay()
    const month = d.getMonth()
    const year = d.getYear()
    const getDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    }
    const daysInMonth = (m) => {
        return getDaysInMonth(year, m + 1, 0)
    }
    
    

    console.log("hello", d.getDay())
    return (
        
        <div className='graph'>
            <div className='graph_container'>
                <div className='graph_text_container '>
                    {graphBarArr.map((bar, i) => {

                        const dayOfWeek = () => {
                            if (d.getDay === i){
                            return baseDay
                        } else {
                            return dayNum
                        }
                        }

                        return (
                        <p className={`graph_text left-${bar.spacing}`}>
                            {bar.day} {dayOfWeek()} {i}
                        </p>
                        )})}
                  
                </div>
                <div className='graph_line_container'>
                    {graphLineSpacingArr.map(line => {
                        return (
                        <div className={`graph_line bottom-${line}`} />
                        )
                    })}
                    
                    {graphBarArr.map(bar => {
                        return (
                        <div className={`graph_bar  h-${bar.percent}/100 left-${bar.spacing}`}>
                            {bar.percent}
                        </div>
                        )
                    })}
                    {/* <div className='graph_bar ml-4 h-54/100 left-0' /> 
                    <div className='graph_bar ml-4 h-24/100 left-1/7' />
                    <div className='graph_bar ml-4 h-20/100 left-2/7' /> 
                    <div className='graph_bar ml-4 h-34/100 left-3/7' /> 
                    <div className='graph_bar ml-4 h-32/100 left-4/7' /> 
                    <div className='graph_bar ml-4 h-44/100 left-5/7' />
                    <div className='graph_bar ml-4 h-58/100 left-6/7' />  */}
                    
                    {/* <div className='graph_line bottom-0' />
                    <div className='graph_line bottom-1/8' />
                    <div className='graph_line bottom-1/4' />
                    <div className='graph_line bottom-3/8' />
                    <div className='graph_line bottom-1/2' />
                    <div className='graph_line bottom-5/8' />
                    <div className='graph_line bottom-3/4' />
                    <div className='graph_line bottom-7/8' /> */}
                {/* tailwind styling when in the map sometimes breaks, if I uncomment the above divs it works again...bug */}
                </div>
            </div>
        </div>
    );
}

export default WeeklyAppGraph