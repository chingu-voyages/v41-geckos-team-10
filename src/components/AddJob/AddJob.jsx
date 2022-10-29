import React from 'react';
import { useState } from 'react';
import './AddJob.css';
import closePane from '../../assets/close-pane.svg';
import submitEdit from '../../assets/submit-edit.svg';


//Button from navbar? Strict field validation? Resume State? Make location required

const AddJob = (props) => {
    
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
        props.handleOpenTrackerDrawer();
  
    }

    
    return(
        <div className='add-job '>
            <form 
                className='add-job_opportunity-detail_form'
                onSubmit={handleSubmit}
                >
                
                <div className='add-job_header'>
                    <div className='add-job_header_close '>
                        <button 
                            className='add-job_header_button'
                            onClick={props.handleOpenTrackerDrawer}
                            >
                            <img src={closePane} alt='Close Pane'/>
                            <p>Create Job Tracker</p>
                        </button>
                    </div>
                  
                </div>
                <div className='add-job_container'>
                    <p>* Required Fields</p>
                    <div className='add-job_opportunity-detail'>
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
                                * Job Opening Title
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    required
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
                                * Company Location
                                <input 
                                    className='add-job_opportunity-detail_input'
                                    type='text'
                                    required
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
                    <div className='add-job_status-detail'>
                        <div className='add-job__field'>
                            <label className='add-job_opportunity-detail_label'>
                                    * Opportunity Status
                                    <select 
                                        className='add-job_opportunity-detail_input required bg-white'
                                        required
                                        type='menu'
                                        name='trackerStatus'
                                        value={addJobTracker.trackerStatus || ''}
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
                <div className='add-job_footer'>
                    <div className='add-job_footer_edit'>
                        <button 
                            className='add-job_footer_button'
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