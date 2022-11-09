import React, { useEffect } from "react";
import DashWeeklyAppGraph from "./DashWeeklyAppGraph";
import DashJobCards from "./DashJobCards";
import DashGoalItems from "./DashGoalItems";
import DashHeader from "./DashHeader";
import axios from "axios";
import { appsThisWeek, displayJobs } from "../../redux/Slices/jobSlice";
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import IsLoggedIn from "../IsLoggedIn";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);

  if (user.isLoggedIn) {
    return (
      <div className="dashboard ">
        <div className="dashboard--div">
          <DashHeader />
          <div className="objectives-div">
            <div className="dashboard_tracker">
              <p className="dashboard_tracker_text">
                Most Active Goals and Achievments
              </p>
              <DashGoalItems />
            </div>
            <div className="dashboard_job-card">
              <p className="dashboard_job-card_header-text">
                Most Recent Applications 
              </p>
              <p  className="dashboard_job-card_header-text">
                (Click Cards for More Information)    
              </p>
              <DashJobCards />
            </div>
          </div>
          <div className="dashboard_job-tracker">
            <p className="dashboard_job-tracker_text">
              Weekly Job Application Tracker
            </p>
            <div className="dashboard_job-tracker_graph">
              <DashWeeklyAppGraph />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <IsLoggedIn />;
  }
};

export default Dashboard;
