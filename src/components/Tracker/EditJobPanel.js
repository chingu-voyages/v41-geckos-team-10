import { useEffect, useState } from "react";
import "./EditJobPanel.css";

const statusClass = {
  Applied: "applied",
  Upcoming: "upcoming-interview",
  Archived: "archived",
  Interviewed: "interviewed",
};

const EditJobPanel = ({
  selectedJob,
  dispatch,
  focusId,
  sortSelection,
  handleOpenTrackerDrawer,
}) => {

  /*
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
  } =
    state.length !== 0
      ? state[focusId]
      : //arbitrary data for empty sections
        {
          id: 0,
          //dummy data
          dateApplied: "2022-10-31",
          followUpSent: true,
          jobListing: "LinkedIn",
          contactInfo: "0123456789",
          resume: "Resume.pdf",
          salary: "50,000 USD",
        };
        */

  let [inEditMode, setInEditMode] = useState(false);
  let [titleValue, setTitleValue] = useState(selectedJob.jobTitle);
  let [companyValue, setCompanyValue] = useState(selectedJob.companyName);
  let [statusValue, setStatusValue] = useState(selectedJob.trackerStatus);
  let [dateAppliedValue, setDateAppliedValue] = useState(selectedJob.dateApplied);
  let [followUpSentValue, setFollowUpSentValue] = useState(selectedJob.followUpSent);
  let [jobListingValue, setJobListingValue] = useState(selectedJob.listingLink);
  let [locationValue, setLocationValue] = useState(selectedJob.companyLocation);
  let [contactInfoValue, setContactInfoValue] = useState(selectedJob.Name);
  let [resumeValue, setResumeValue] = useState(selectedJob.trackerResume);
  let [salaryValue, setSalaryValue] = useState(selectedJob.salary);

  let [errorMessage, setErrorMessage] = useState("");

  /* useEffect(() => {
    setTitleValue(title);
    setCompanyValue(company);
    setStatusValue(status);
    setDateAppliedValue(dateApplied);
    setJobListingValue(jobListing);
    setLocationValue(location);
    setContactInfoValue(contactInfo);
    setResumeValue(resume);
    setSalaryValue(salary);
  }, [focusId, state]); */

  const handleClose = (e) => {
    e.preventDefault();
    if (inEditMode) setInEditMode(false);
  };

  const openEdit = (e) => {
    e.preventDefault();
    setInEditMode(true);
  };

  //currently onClick as onSubmit will result in hard refreshing the page
  const handleEdit = (e) => {
    e.preventDefault();
    if (
      titleValue === "" ||
      companyValue === "" ||
      statusValue === "" ||
      statusValue === "" ||
      dateAppliedValue === "" ||
      followUpSentValue === "" ||
      jobListingValue === "" ||
      salaryValue === ""
    ) {
      setErrorMessage("Please fill out all fields.");
    } else {
      setErrorMessage("");
      dispatch({
        type: "EDIT",
        id: selectedJob._id,
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
        sortSelection: sortSelection,
      });

      handleOpenTrackerDrawer({ isClosed: true });
      setInEditMode(false);
    }
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
      {inEditMode && errorMessage && (
        <span className="edit-job-panel_error-message">{errorMessage}</span>
      )}
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
                required
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
            <h2 className="edit-job-panel_info--main_job-title">{selectedJob.jobTitle}</h2>
            <h3 className="edit-job-panel_info--main_company">{selectedJob.companyName}</h3>
            <span
              className={`edit-job-panel_info--main_status edit-job-panel_info--main_status--${statusClass[selectedJob.trackerStatus]}`}
            >
              {selectedJob.trackerStatus}
            </span>
            <span className="edit-job-panel_info--main_date-applied">
              {selectedJob.dateApplied}
            </span>
            <div className="edit-job-panel_info--main_follow-up">
              <input
                type="checkbox"
                name="follow-up"
                disabled
                checked={selectedJob.followUpSent}
              />
              <label htmlFor="follow-up">Follow up sent</label>
            </div>
          </div>
          <div className="edit-job-panel_info--other">
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="job-listing">Job Listing</label>
              <span>{selectedJob.listingLink}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="location">Location</label>

              <span>{selectedJob.companyLocation}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="contact-info">Contact Info</label>
              <span>{selectedJob.contactName}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="resume">Resume</label>
              <span>{selectedJob.trackerResume}</span>
            </div>
            <div className="edit-job-panel_info--other_item">
              <label htmlFor="salary">Salary</label>
              <span>{selectedJob.salary}</span>
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
