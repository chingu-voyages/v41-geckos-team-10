import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';
import './DashHeader.css';

const DashHeader = () => {

    const userFirstName = useSelector((state) => state.profile.value.firstName);
    const userLastName = useSelector((state) => state.profile.value.lastName);


    return (
        <div className='dashboard_user-profile'>
                
            <p className='dashboard_user-profile_text self-center m-2 text-4xl '>
                Hello, {userFirstName +" "+ userLastName}!!
            </p>

        </div>
    )
}

export default DashHeader