import React, { useEffect } from "react";
import DashWeeklyAppGraph from "./DashWeeklyAppGraph";
import DashJobCards from "./DashJobCards";
import DashGoalItems from "./DashGoalItems";
import DashHeader from "./DashHeader";
import "./Dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import IsLoggedIn from "../IsLoggedIn";

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);
  const fname = useSelector((state) => state.profile.value.firstName);
  const lname = useSelector((state) => state.profile.value.lastName);
  const wAG = useSelector((state) => state.profile.value.weeklyAppGoal);
  
  console.log("dash", fname)

  if (user.isLoggedIn) {
    return (
      <div className='dashboard'>
        <div className='dashboard_div'>
          <DashHeader />
          <div className='objectives_div'>
            <div className='dashboard_tracker'>
              <p className='dashboard_tracker_text'>
                Most Active Goals and Achievments
              </p>
              <div className='dashboard_tracker_cards'>
                <DashGoalItems />
              </div>
            </div>
            <div className='dashboard_job-card'>
              <p className='dashboard_job-card_header-text '>
                Most Recent Applications
              </p>
              <p className='dashboard_job-card_header-text'>
                (Click Cards for More Information)
              </p>
              <DashJobCards />
            </div>
          </div>
          <div className='dashboard_job-tracker'>
            <p className='dashboard_job-tracker_text'>
              Weekly Job Application Tracker
            </p>
            <div className='dashboard_job-tracker_graph'>
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
