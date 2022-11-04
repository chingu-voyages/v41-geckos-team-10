import React from 'react';
import { useState } from 'react';

//https://blog.logrocket.com/build-svg-circular-progress-component-react-hooks/

const WeeklyAppGoal = ({size, strokeWidth, weeklyGoal}) => {
   const percentage = 50;
   const dailyGoal=50
   const goalMet=dailyGoal*(percentage/100)
   const radius = 40
   //  const [percentage, setPercentage] = useState(30);
   const circumference = 2 * Math.PI * radius;
    const dash = ((100-percentage) * circumference)/100;

    return (
        <div className='weeklyAppGoal_progressCircle relative inline-flex items-center justify-center overflow-hidden rounded-full bottom-0 left-0'
        >
    
                <svg width={size} height={size}>
                   <circle
                    
                    fill='transparent'
                    
                    cx={size /2}
                    cy={size /2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    stroke={'#ccc'}
                    strokeDasharray={circumference}
                    //strokeLinecap='round'
                    />
               
                    <circle
                 
                    fill='transparent'
                    
                    cx={size /2}
                    cy={size /2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    stroke={percentage !== circumference ? '#aa9aff' : ''}
                    transform={`rotate(-90 ${size/2} ${size/2})`}
                    strokeDasharray={circumference}
                    strokeDashoffset={percentage ? dash : 0}
                    strokeLinecap='round'
                    />
                </svg>
                <span className='absolute text-xl text-tailwind-grey font-bold'>{goalMet}/{dailyGoal}</span>
        </div>
    )
}

export default WeeklyAppGoal;

