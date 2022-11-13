import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./DashJobCards.css";
import "../../index.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { displayJobs } from "../../redux/Slices/jobSlice";

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
  }, [dispatch]);

  const d = new Date();

  const mostActiveArr = jobs.map((job) => {
    const string = job.trackerTimestamp.toString();
    const date = new Date(string + "Z");
    const timeBetween = Math.abs(d.getTime() - date.getTime());
    const timeNId = { _id: job._id, value: timeBetween };
    return timeNId;
  });

  const mostActiveSort = mostActiveArr
    .sort((a, b) => a.value - b.value)
    .slice(0, 3);

    // const dashJobCards = [{_id: 0, companyLocation: "No Card to Load", companyName: "No Card to Load", contactEmail: "No Card to Load", contactName: "No Card to Load", dateApplied:"No Card to Load", jobTitle : "No Card to Load", trackerStatus : "No Card to Load", salary: "No Card to Load"},{_id: 1,companyLocation: "No Card to Load", companyName: "No Card to Load", contactEmail: "No Card to Load", contactName: "No Card to Load", dateApplied:"No Card to Load", jobTitle : "No Card to Load", trackerStatus : "No Card to Load", salary: "No Card to Load"},{_id: 2,companyLocation: "No Card to Load", companyName: "No Card to Load", contactEmail: "No Card to Load", contactName: "No Card to Load", dateApplied:"No Card to Load", jobTitle : "No Card to Load", trackerStatus : "No Card to Load", salary: "No Card to Load" }]
  const dashJobCards = [];
  const dashJobCardOb = () => {
    if(jobs.length < 3) {
      return dashJobCards
    } else {
    for (let i = 0; i < 3; i++) {
      dashJobCards.unshift(
        jobs.find((card) => card._id === mostActiveSort[i]._id)
      );
    }}
  };

  dashJobCardOb();

  const [frontView0, setFrontView0] = useState("visible");
  const [backView0, setBackView0] = useState("hidden");
  const [frontView1, setFrontView1] = useState("visible");
  const [backView1, setBackView1] = useState("hidden");
  const [frontView2, setFrontView2] = useState("visible");
  const [backView2, setBackView2] = useState("hidden");
  const handleCardFlip0 = () => {
    if (frontView0 === "visible") {
      setFrontView0("hidden");
      setBackView0("visible");
    } else {
      setFrontView0("visible");
      setBackView0("hidden");
    }
  };
  const handleCardFlip1 = () => {
    if (frontView1 === "visible") {
      setFrontView1("hidden");
      setBackView1("visible");
    } else {
      setFrontView1("visible");
      setBackView1("hidden");
    }
  };
  const handleCardFlip2 = () => {
    if (frontView2 === "visible") {
      setFrontView2("hidden");
      setBackView2("visible");
    } else {
      setFrontView2("visible");
      setBackView2("hidden");
    }
  };

  return typeof dashJobCards[0] != "undefined" ? (
    <div className='dashboard_job-card_container flex justify-center'>
      <div
        className='dashboard_job-card_item'
        key={nanoid()}
        onClick={handleCardFlip0}
      >
        <div className={`dashboard_job-card_front ${frontView0}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Company:{" "}
              </p>
              <p className='dashboard_job-card_text' placeholder='N/A'>
                {`${dashJobCards[0].companyName}`}
              </p>
              <p className='dashboard_job-card_text' placeholder='N/A'></p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Title: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].jobTitle}`}</p>
            </div>
          </div>
          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Location:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].companyLocation}`}</p>
            </div>
          </div>
        </div>

        <div className={`dashboard_job-card_back ${backView0}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Date Applied:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].dateApplied}`}</p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Application Status:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].trackerStatus}`}</p>
            </div>
          </div>

          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Salary: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].salary}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Name:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].contactName}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Email:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[0].contactEmail}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='dashboard_job-card_item '
        key={nanoid()}
        onClick={handleCardFlip1}
      >
        <div className={`dashboard_job-card_front ${frontView1}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Company:{" "}
              </p>
              <p className='dashboard_job-card_text '>{`${dashJobCards[1].companyName}`}</p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Title: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].jobTitle}`}</p>
            </div>
          </div>
          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Location:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].companyLocation}`}</p>
            </div>
          </div>
        </div>

        <div className={`dashboard_job-card_back ${backView1}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Date Applied:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].dateApplied}`}</p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Application Status:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].trackerStatus}`}</p>
            </div>
          </div>

          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Salary: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].salary}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Name:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].contactName}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Email:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[1].contactEmail}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className='dashboard_job-card_item '
        key={nanoid()}
        onClick={handleCardFlip2}
      >
        <div className={`dashboard_job-card_front ${frontView2}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Company:{" "}
              </p>
              <p className='dashboard_job-card_text '>{`${dashJobCards[2].companyName}`}</p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Title: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].jobTitle}`}</p>
            </div>
          </div>
          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Location:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].companyLocation}`}</p>
            </div>
          </div>
        </div>

        <div className={`dashboard_job-card_back ${backView2}`}>
          <div className='dashboard_job-card_top'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Date Applied:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].dateApplied}`}</p>
            </div>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Application Status:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].trackerStatus}`}</p>
            </div>
          </div>

          <div className='dashboard_job-card_bottom'>
            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>Salary: </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].salary}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Name:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].contactName}`}</p>
            </div>

            <div className='dashboard_job-card_inner'>
              <p className='dashboard_job-card_text job-card_label'>
                Contact Email:{" "}
              </p>
              <p className='dashboard_job-card_text'>{`${dashJobCards[2].contactEmail}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>loading....</div>
  );
};

export default DashJobCards;
