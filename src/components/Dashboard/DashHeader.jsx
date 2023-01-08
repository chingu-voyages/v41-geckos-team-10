import React from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import './DashHeader.css';

const DashHeader = () => {
  
    const userFirstName = useSelector((state) => state.profile.value.firstName);
    const userLastName = useSelector((state) => state.profile.value.lastName);


    return (
        <div className='dashboard_user-profile'>
                
            <p className='dashboard_user-profile_text'>
                Hello, {userFirstName +" "+ userLastName}!!
            </p>

        </div>
    )
}

export default DashHeader
