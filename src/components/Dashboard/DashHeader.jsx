import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';
import './DashHeader.css';

const DashHeader = () => {

    const [profilePic, setProfilePic] = useState("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Uwo-kkvTH_pEjCu0O4z7oQAAAA%26pid%3DApi&f=1&ipt=05ed7a42f68098e6fac9bfc7fd61e9576b8082bdb45f0bc2adacca5b37256e03&ipo=images");

    const userFirstName = useSelector((state) => state.profile.value.firstName);
    const userLastName = useSelector((state) => state.profile.value.lastName);

    console.log("First, Last", (userFirstName +" "+ userLastName))

    return (
        <div className='dashboard_user-profile'>
                
            <p className='dashboard_user-profile_text self-center m-2 text-4xl '>
                Hello, {userFirstName +" "+ userLastName}!!
            </p>

        </div>
    )
}

export default DashHeader