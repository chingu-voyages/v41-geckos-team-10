import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import WeeklyAppGoal from "./WeeklyAppGoal/WeeklyAppGoal";
import axios from "axios";
import { displayJobs } from "../../redux/Slices/jobSlice";
import "./DashGoalItems.css";

const DashGoalItems = () => {
    
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.value);
  const wAG = useSelector((state) => state.profile.value.weeklyAppGoal);
  
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

  const getSunday = () => {
    const d = new Date();
    const day = d.getDay();
    const date = d.getDate() - day;
    return date;
  };

  const getSaturday = () => {
    const d = new Date();
    const day = d.getDay();
    const date = d.getDate() + (6 - day);
    return date;
  };

  const thisWeeksApps = jobs.filter((item) => {
    if (
      item.dateApplied.toString().slice(-2) >= getSunday() &&
      item.dateApplied.toString().slice(-2) <= getSaturday()
    ) {
      return item;
    }
  });

  const weeklyApps = thisWeeksApps.length;

  const dashGoalItem = [
    { item: "Login Streak" },
    {
      item: "Weekly Application Goal",
      component: (
        <WeeklyAppGoal
          size={100}
          strokeWidth={10}
          goalValue={wAG}
          weeklyApps={weeklyApps}
        />
      ),
    },
  ];

  return (
    <div className='dashboard_tracker-container'>
      {dashGoalItem.map((track) => (
        <div className='dashboard_tracker-item' key={nanoid()}>
          {" "}
          {track.component}
          <p className='dashboard_tracker-item_text'>{track.item}</p>
        </div>
      ))}
    </div>
  );
};

export default DashGoalItems;
