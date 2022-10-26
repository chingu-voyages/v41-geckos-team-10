import React from 'react';
import './AddJob.css'


//Company, Job Title, Job Status (Applied, Contacted, Interview Setup, Interview Held, Waiting Response, Offer Made, Archived), follow up, location, contact name, contact email, contact phone, resume sent, salary, job description link, date applied, time stamp updated

const AddJob = () => {

    return(
        <div className='add-job border w-96 h-screen flex flex-col justify-between'>
           <div className='add-job_header border'>
                <div className='add-job_header_close'>
                    x
                </div>
           </div>
           <div className='add-job_container'>

           <div className='add-job_opportunity-detail m-5'>
                    
                    <div className='add-job_opportunity-detail_company-name'>
                        Company Name: company
                    </div>
                    <div className='add-job_opportunity-detail_listing'>
                        Job Listing: Indeed Listing Link
                    </div>
                    <div className='add-job_opportunity-detail_company-location'>
                        Company Location: Location
                    </div>
                    <div className='add-job_opportunity-detail_contact-name'>
                        Contact Name: Tim Johnson
                    </div>
                    <div className='add-job_opportunity-detail_contact-email'>
                        Contact Email: timjohnson@company.com
                    </div>
                    <div className='add-job_opportunity-detail_contact-phone'>
                        Contact Phone: 555-123-4567
                    </div>
                </div>

                <div className='add-job_status-detail m-5'>
                    <div className='add-job_status-detail_menu'>
                        Interview Setup
                    </div>
                    <div className='add-job_status-detail_date-applied'>
                        Date Applied: 08/08/23
                    </div>
                    <div className='add-job_status-detail_resume-upload'>
                        Resume Upload
                    </div>
                   
                </div>
                {/* location, contact name, contact email, contact phone, resume sent, salary, job description link, */}
                
           </div>
           <div className='add-job_footer border'>
                <div className='add-job_footer_edit'>
                    Create
                </div>
           </div>
        </div>
    );
};

export default AddJob