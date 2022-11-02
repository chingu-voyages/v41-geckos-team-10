import React from "react";
import "./JobCard.css";

const JobCard = (props) => {
  const statusColor = findStatusColor();

  function findStatusColor() {
    if (props.jobDetails.status === "Applied") {
      return "applied";
    } else if (props.jobDetails.status === "Upcoming") {
      return "upcoming";
    } else if (props.jobDetails.status === "Interviewed") {
      return "interviewed";
    } else if (props.jobDetails.status === "Archived") {
      return "archived";
    }
  }

  return (
    <div className="tracker-page__card-container">
      <div className="card-container__title">
        <p>{props.jobDetails.title}</p>
        <p className="card-container__light-detail">
          {props.jobDetails.company}
        </p>
      </div>

      <div className="card-container__section">
        <p className={`${statusColor} card-container__status-pill`}>
          {props.jobDetails.status}
        </p>
      </div>

      <div className="card-container__section">
        <p>{props.jobDetails.location}</p>
      </div>

      <div className="card-container__section">
        <p className="card-container__light-detail">
          {props.jobDetails.dateApplied}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
