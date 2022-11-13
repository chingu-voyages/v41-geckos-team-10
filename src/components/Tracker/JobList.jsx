import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, handleClick }) => {
  if (jobs.length !== 0) {
    return (
      <>
        {jobs.map((data) => (
          <JobCard
            className='tracker-page_card'
            jobDetails={data}
            key={data._id}
            handleClick={handleClick}
          />
        ))}
      </>
    );
  } else {
    return <div>No Jobs Being Tracked</div>;
  }
};

export default JobList;
