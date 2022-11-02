import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs, handleClick }) => {
  return (
    <>
      {jobs.map((data, idx) => (
        <div onClick={() => handleClick(idx)}>
          <JobCard
            className="tracker-page__card"
            jobDetails={data}
            key={data.id}
          />
        </div>
      ))}
    </>
  );
};

export default JobList;
