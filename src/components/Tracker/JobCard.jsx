import React from "react";
import "./JobCard.css";

const JobCard = (props) => {
  const statusColor = findStatusColor();
  //console.log(props.jobDetails); //uncomment if you want to see the properties of the jobDetails object
  function findStatusColor() {
    if (props.jobDetails.trackerStatus === "Applied") {
      return "applied";
    } else if (props.jobDetails.trackerStatus === "Upcoming Interview") {
      return "upcoming";
    } else if (props.jobDetails.trackerStatus === "Interviewed") {
      return "interviewed";
    } else if (props.jobDetails.trackerStatus === "Archived") {
      return "archived";
    } else if (props.jobDetails.trackerStatus === "Offer Made") {
      return "offered";
    }
  }

  return (
    <div
      className='tracker-page_card-container'
      onClick={() => props.handleClick(props.jobDetails)}
    >
      <div className='card-container_title'>
        <p>{props.jobDetails.jobTitle}</p>
        <p className='card-container_light-detail'>
          {props.jobDetails.companyName}
        </p>
      </div>

      <div className='card-container_section'>
        <p className={`${statusColor} card-container_status-pill`}>
          {props.jobDetails.trackerStatus}
        </p>
      </div>

      <div className='card-container_section'>
        <p>{props.jobDetails.companyLocation}</p>
      </div>

      <div className='card-container_section'>
        <p className='card-container_light-detail'>
          {props.jobDetails.dateApplied}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
