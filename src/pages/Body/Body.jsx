import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "../Home/Home";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurTeam } from "../OurTeam/OurTeam";
import { UserProfile } from "../UserProfile/UserProfile";
import {AdminProfile }from "../AdminProfile/AdminProfile";

export const Body = () => {

    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/ourteam" element={<OurTeam />}/>
            <Route path="/userprofile" element={<UserProfile />}/>
            <Route path="/managerprofile" element={<AdminProfile />}/>



            
        </Routes>
        </>
    )
}