import React from 'react';
import { useState } from 'react';
import './AddJob.css';


//Company, Job Title, Job Status , follow up, location, contact name, contact email, contact phone, resume sent, salary, job description link, date applied, time stamp updated

const AddJob = () => {
    
    const now = new Date()
    console.log(now)
    
    const trackerStatusArr =['', 'Applied', 'Contacted', 'Interview Scheduled', 'Interview Held', 'Offer Made', 'Archived']

    const resumeUploadedArr = ['', 'coding_resume', 'pm_resume', 'somm_resume']

    const [addJobTracker, setAddJobTracker] = useState({});

    const handleAddJobTracker = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddJobTracker(values =>( {...values, [name]: value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(addJobTracker)
    }

    
    return(
        <div className='add-job border w-96 h-screen flex flex-col justify-between bg-blue-100'>
            <form className='add-job_opportunity-detail_form'>
           <div className='add-job_header border'>
                <div className='add-job_header_close'>
                    <button className='add-job_header_close_button'>x</button>
                </div>
           </div>
           <div className='add-job_container'>
           <div className='add-job_opportunity-detail m-5'>
           
                    
                        <div className='add-job_opportunity-detail_company-name'>
                            <label className='add-job_opportunity-detail_label'>
                                Company Name
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='companyName'
                                    value={addJobTracker.companyName}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label> 
                        </div>
                        <div className='add-job_opportunity-detail_listing'>
                            <label className='add-job_opportunity-detail_label'>
                                Job Listing Link
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='listingLink'
                                    value={addJobTracker.listingLink}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                           
                        </div>
                        <div className='add-job_opportunity-detail_company-location'>
                            <label className='add-job_opportunity-detail_label'>
                                Company Location
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='companyLocation'
                                    value={addJobTracker.companyLocation}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job_opportunity-detail_contact-name'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Name
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactName'
                                    value={addJobTracker.contactName}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                           
                        </div>
                        <div className='add-job_opportunity-detail_contact-email'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Email
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactEmail'
                                    value={addJobTracker.contactEmail}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job_opportunity-detail_contact-phone'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Phone #
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactPhone'
                                    value={addJobTracker.contactPhone}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                    
                </div>

                <div className='add-job_status-detail m-5'>
                    <div className='add-job_status-detail_menu'>
                        <label className='add-job_opportunity-detail_label'>
                                Opportunity Status
                                <select 
                                    className='add-job_opportunity-detail_input bg-white'
                                    type='menu'
                                    name='trackerStatus'
                                    value={addJobTracker.trackerStatus}
                                    onChange={handleAddJobTracker}
                                    >
                                    {trackerStatusArr.map((item) =>
                                    <option value={item}>{item}</option>)}     
                                </select>    
                        </label>
                        
                    </div>
                    <div className='add-job_status-detail_date-applied'>
                        <label className='add-job_opportunity-detail_label'>
                                Date Application Submited
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='date'
                                    name='dateApplied'
                                    value={addJobTracker.dateApplied}
                                    onChange={handleAddJobTracker}
                                    />    
                        </label>
                        
                    </div>
                    <div className='add-job_status-detail_resume-upload'>
                        <label className='add-job_opportunity-detail_label'>
                                Resume Applied With
                                <select 
                                    className='add-job_opportunity-detail_input bg-white'
                                    type='menu'
                                    name='trackerResume'
                                    value={addJobTracker.trackerResume}
                                    onChange={handleAddJobTracker}>
                                    {resumeUploadedArr.map((item) =>
                                    <option value={item}>{item}</option>)}     
                                </select>    
                        </label>
                    </div>
                   
                </div>
                {/* location, contact name, contact email, contact phone, resume sent, salary, job description link, */}
                
           </div>
           <div className='add-job_footer border'>
                <div className='add-job_footer_edit'>
                    <button 
                        className='add-job_footer_button submit'
                        type='submit'
                        name='trackerTimeStamp'
                        value={now}
                        onChange={handleAddJobTracker}
                        onSubmit={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
           </div>
           </form>
        </div>
    );
};

export default AddJob