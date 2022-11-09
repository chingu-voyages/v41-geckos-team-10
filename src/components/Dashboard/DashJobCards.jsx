import React, {useEffect} from "react";
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './DashJobCards.css';
import '../../index.css'
import { useSelector, useDispatch } from "react-redux";
import { displayJobs } from "../../redux/Slices/jobSlice";
import axios from "axios";


const DashJobCards = () => {

    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.value);
  
    useEffect(() => {
        axios
          .get("http://localhost:4000/jobs", { withCredentials: true })
          .then((res) => {
            if (res.status === 200) {
              dispatch(displayJobs(res.data));
            } else {
              console.log("Error");
            }
          });
      }, []);

    const d = new Date();
   console.log("jobs", jobs)

    const string = "Tue Nov 08 2022 13:07:24"
   // const date = new Date(string + "Z")

   // Math.abs(d.getTime() - date.getTime() )
    
    const mostActiveArr = jobs.map((job) => {
        const string = job.trackerTimestamp.toString() 
        const date = new Date(string + "Z")
        const timeBetween = Math.abs(d.getTime() - date.getTime() )
        const timeNId = {_id: job._id, value: timeBetween}
        return timeNId
    })

    const mostActiveSort = mostActiveArr.sort((a,b) => a.value - b.value).slice(0, 3)
    
    const dashJobCards = []

    const dashJobCardOb = () => {
        for (let i = 0; i < 3; i++) {
           dashJobCards.push(jobs.find( (card) => card._id === mostActiveSort[i]._id))
        }
       
       
    }

    dashJobCardOb();

    let frontView = "visible"
    let backView = "hidden"

    const handleCardFlip = (frontView, backView) => {
        
        if (frontView === "visible" ){
          let frontView = "hidden"
          let backView = "visible"
          (console.log("in If"))
          return frontView, backView;
          } else {
            frontView = "visible";
             backView = "hidden";
             console.log("in Else")
          }
    }


    return (
    <div className='dashboard_job-card_container flex justify-center'>
        {dashJobCards.map((job) => (
            <div 
                className='dashboard_job-card_item block rounded-lg shodow-lg bg-white max-w-sm text-center' 
                key={nanoid()}
                onClick={handleCardFlip}
            >
              <div className={`dashboard_job-card_front ${frontView}`}>
                <div className="py-3 px-3 border-b border-gray-300">
                  <p className='dashboard_job-card_text '>{`${job.companyName}`}</p>
                  <p className='dashboard_job-card_text'>{`${job.jobTitle}`}</p>
                </div>
                  
                  
                  <p className='dashboard_job-card_text'>{`${job.companyLocation}`}</p> 
              </div>
              <div className={`dashboard_job-card_back ${backView}`}>
                <p className='dashboard_job-card_text'>{`${job.dateApplied}`}</p>
                <p className='dashboard_job-card_text'>{`${job.trackerStatus}`}</p>
                <p className='dashboard_job-card_text'>{`${job.salary}`}</p>
              </div>
                
            </div>
        ))}
    </div>)
}

export default DashJobCards