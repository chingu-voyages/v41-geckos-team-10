import { useEffect, useState } from "react";
import "./EditJobPanel.css";

const statusClass = {
  Applied: "applied",
  Upcoming: "upcoming-interview",
  Archived: "archived",
  Interviewed: "interviewed",
};

const EditJobPanel = ({
  state,
  dispatch,
  focusId,
  handleOpenTrackerDrawer,
}) => {
  let {
    id,
    title,
    company,
    status,
    dateApplied,
    followUpSent,
    jobListing,
    location,
    contactInfo,
    resume,
    salary,
  } = state[focusId];

  let [inEditMode, setInEditMode] = useState(false);

  let [titleValue, setTitleValue] = useState(title);
  let [companyValue, setCompanyValue] = useState(company);
  let [statusValue, setStatusValue] = useState(status);
  let [dateAppliedValue, setDateAppliedValue] = useState(dateApplied);
  let [followUpSentValue, setFollowUpSentValue] = useState(followUpSent);
  let [jobListingValue, setJobListingValue] = useState(jobListing);
  let [locationValue, setLocationValue] = useState(location);
  let [contactInfoValue, setContactInfoValue] = useState(contactInfo);
  let [resumeValue, setResumeValue] = useState(resume);
  let [salaryValue, setSalaryValue] = useState(salary);

  useEffect(() => {
    setTitleValue(title);
    setCompanyValue(company);
    setStatusValue(status);
    setDateAppliedValue(dateApplied);
  }, [focusId]);

  const handleClose = (e) => {
    e.preventDefault();
    if (inEditMode) setInEditMode(false);
  };

  const openEdit = (e) => {
    e.preventDefault();
    setInEditMode(true);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: "EDIT",
      id: id,
      payload: {
        title: titleValue,
        company: companyValue,
        status: statusValue,
        dateApplied: dateAppliedValue,
        followUpSent: followUpSentValue,
        jobListing: jobListingValue,
        location: locationValue,
        contactInfo: contactInfoValue,
        resume: resumeValue,
        salary: salaryValue,
      },
    });
    setInEditMode(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (inEditMode) setInEditMode(false);
  };

  return (
    <div className="edit-job-panel">
      <button className="edit-job-panel_close-button" onClick={handleClose}>
        <img
          src="/icons/close-panel-icon.svg"
          alt="close"
          onClick={handleOpenTrackerDrawer}
        />
      </button>
      {inEditMode ? (
        <form className="edit-job-panel_info--edit">
          <div className="edit-job-panel_info--main--edit">
            <div className="edit-job-panel_info--main--edit_item">
              <label htmlFor="job-title">Job Title</label>
              <input
                type="text"
                name="job-title"
                value={titleValue}
                onChange={(e) => {
                  setTitleValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--main--edit_item">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                value={companyValue}
                onChange={(e) => {
                  setCompanyValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--main--edit_item">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                value={statusValue}
                onChange={(e) => {
                  setStatusValue(e.currentTarget.value);
                }}
              >
                <option value="Applied">Applied</option>
                <option value="Upcoming">Upcoming Interview</option>
                <option value="Interviewed">Interviewed</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
            <div className="edit-job-panel_info--main--edit_item">
              <label htmlFor="date-applied">Date Applied</label>
              <input
                type="date"
                name="date-applied"
                value={dateAppliedValue}
                onChange={(e) => {
                  setDateAppliedValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--main--edit_item edit-job-panel_info--main--edit_item--checkbox">
              <input
                type="checkbox"
                name="follow-up"
                checked={followUpSentValue}
                onClick={(e) => {
                  setFollowUpSentValue(!followUpSentValue);
                }}
              />
              <label htmlFor="follow-up">Follow up sent</label>
            </div>
          </div>
          <div className="edit-job-panel_info--other--edit">
            <div className="edit-job-panel_info--other_item--edit">
              <label htmlFor="job-listing">Job Listing</label>
              <input
                type="text"
                name="job-listing"
                value={jobListingValue}
                onChange={(e) => {
                  setJobListingValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--other_item--edit">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                value={locationValue}
                onChange={(e) => {
                  setLocationValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--other_item--edit">
              <label htmlFor="contact-info">Contact Info</label>
              <input
                type="text"
                name="contact-info"
                value={contactInfoValue}
                onChange={(e) => {
                  setContactInfoValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--other_item--edit">
              <label htmlFor="resume">Resume</label>
              <input
                type="text"
                name="resume"
                value={resumeValue}
                onChange={(e) => {
                  setResumeValue(e.currentTarget.value);
                }}
              />
            </div>
            <div className="edit-job-panel_info--other_item--edit">
              <label htmlFor="salary">Salary</label>
              <input
                type="text"
                name="salary"
                value={salaryValue}
                onChange={(e) => {
                  setSalaryValue(e.currentTarget.value);
                }}
              />
            </div>
          </div>
          <div className="edit-job-panel_info_button-group">
            <button
              className="edit-job-panel_info_button-group_edit-button"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="edit-job-panel_info_button-group_cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <form className="edit-job-panel_info">
          <div className="edit-job-panel_info--main">
            <h2 className="edit-job-panel_info--main_job-title">{title}</h2>
            <h3 className="edit-job-panel_info--main_company">{company}</h3>
            <span
              className={`edit-job-panel_info--main_status edit-job-panel_info--main_status--${statusClass[status]}`}
            >
              {status}
            </span>
            <span className="edit-job-panel_info--main_date-applied">
              {dateApplied}
            </span>
            <div className="edit-job-panel_info--main_follow-up">
              <input
                type="checkbox"
                name="follow-up"
                disabled
                checked={followUpSent}
              />
              <label htmlFor="follow-up">Follow up sent</label>
            </div>
          </div>
          <div className="edit-job-panel_info--other">
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="job-listing">Job Listing</label>
              <span>{jobListing}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="location">Location</label>

              <span>{location}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="contact-info">Contact Info</label>
              <span>{contactInfo}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="resume">Resume</label>
              <span>{resume}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="salary">Salary</label>
              <span>{salary}</span>
            </div>
          </div>
        </form>
      )}

      {!inEditMode && (
        <button className="edit-job-panel_edit-button" onClick={openEdit}>
          <img src="/icons/edit-icon.svg" alt="edit" />
          <span>Edit</span>
        </button>
      )}
    </div>
  );
};

export default EditJobPanel;
