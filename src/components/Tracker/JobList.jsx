import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';

const JobList = () => {
    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/jobs', {withCredentials: true})
        .then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setJobList(res.data);
            } else {
                console.log('Error');
            }
        })
    }, []);
    
    return (
        <>
        {jobList.map((data) =>  
            <JobCard 
                className="tracker-page__card" 
                jobDetails={data} 
                key={data._id}
            /> 
        )} 
        </>
    )
    
} 

export default JobList 