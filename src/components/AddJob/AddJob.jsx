import React from 'react';
import { useState } from 'react';
import './AddJob.css';
import closePane from '../../assets/close-pane.svg';
import submitEdit from '../../assets/submit-edit.svg';


//Company, Job Title, Job Status , follow up, location, contact name, contact email, contact phone, resume sent, salary, job description link, date applied, time stamp updated

const AddJob = () => {
    
    const now = new Date()
    
    const trackerStatusArr =['Applied', 'Contacted', 'Interview Scheduled', 'Interview Held', 'Offer Made', 'Archived']

    const resumeUploadedArr = ['coding_resume', 'pm_resume', 'somm_resume']

    const [addJobTracker, setAddJobTracker] = useState({});

    const handleAddJobTracker = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddJobTracker(values =>( {...values, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(addJobTracker);
        setAddJobTracker('');
  
    }

    
    return(
        <div className='add-job border w-96 bg-blue-100 p-5 flex h-screen'>
            <form 
                className='add-job_opportunity-detail_form flex flex-col flex-1'
                onSubmit={handleSubmit}
                >
                
                <div className='add-job_header border'>
                    <div className='add-job_header_close'>
                        <button className='add-job_header_close_button'>
                            <img src={closePane} alt='Close Pane'/>
                        </button>
                    </div>
                </div>
                <div className='add-job_container flex flex-col flex-1 place-content-around'>
                    <p>* Required Fields</p>
                    <div className='add-job_opportunity-detail flex flex-col'>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                * Company Name
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    required
                                    type='text'
                                    name='companyName'
                                    value={addJobTracker.companyName || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label> 
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Job Opening Title
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='jobTitle'
                                    value={addJobTracker.jobTitle || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label> 
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Salary Offered
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='salary'
                                    value={addJobTracker.salary || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label> 
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                * Job Listing Link
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    required
                                    type='text'
                                    name='listingLink'
                                    value={addJobTracker.listingLink || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Company Location
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='companyLocation'
                                    value={addJobTracker.companyLocation || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Name
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactName'
                                    value={addJobTracker.contactName || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Email
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactEmail'
                                    value={addJobTracker.contactEmail || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                Contact Phone #
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    name='contactPhone'
                                    value={addJobTracker.contactPhone || ''}
                                    onChange={handleAddJobTracker}
                                    />    
                            </label>
                            
                        </div>
                    </div>
                    <div className='add-job_status-detail flex flex-col gap-5 m-5'>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                    * Opportunity Status
                                    <select 
                                        className='add-job_opportunity-detail_input required bg-white'
                                        required
                                        type='menu'
                                        name='trackerStatus'
                                        value={addJobTracker.trackerStatus || ''}
                                        defaultValue=""
                                        onChange={handleAddJobTracker}
                                        >
                                        <option value='' disabled>
                                            -- select an option --
                                        </option>
                                        {trackerStatusArr.map((item) =>
                                        <option value={item} key={item.toString()}>{item}</option>)}     
                                    </select>    
                            </label>  
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                    * Date Application Submited
                                    <input 
                                        className='add-job_opportunity-detail_input'
                                        required
                                        type='date'
                                        name='dateApplied'
                                        value={addJobTracker.dateApplied || ''}
                                        onChange={handleAddJobTracker}
                                        />    
                            </label>  
                        </div>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                    Resume Applied With
                                    <select 
                                        className='add-job_opportunity-detail_input bg-white'
                                        type='menu'
                                        name='trackerResume'
                                        value={addJobTracker.trackerResume || ''}
                                        defaultValue=''
                                        onChange={handleAddJobTracker}>
                                        <option value='' disabled>
                                            -- select an option --
                                        </option>
                                        {resumeUploadedArr.map((item) =>
                                        <option value={item} key={item.toString()}>{item}</option>)}     
                                    </select>    
                            </label>
                        </div>
                    </div>
                </div>
                <div className='add-job_footer border'>
                    <div className='add-job_footer_edit'>
                        <button 
                            className='add-job_footer_button button_hover flex items-center'
                            type='submit'
                            name='trackerTimeStamp'
                            value={now}
                            onClick={handleAddJobTracker}
                        >
                            <img src={submitEdit} alt='Submit Task' />
                            Submit
                        </button>
                    </div>
                </div>
           </form>
        </div>
    );
};

export default AddJob