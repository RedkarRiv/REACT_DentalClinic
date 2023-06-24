import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurTeam } from "../OurTeam/OurTeam";
import { Contact } from "../Contact/Contact";
import { UserProfile } from "../UserProfile/UserProfile";
import { EmployeeProfile } from "../EmployeeProfile/EmployeeProfile";
import {AdminProfile }from "../AdminProfile/AdminProfile";
import { UserDetail } from "../UserDetail/UserDetail";
import { AppointmentDetail } from "../AppointmentDetail/AppointmentDetail";

export const Body = () => {

    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/ourteam" element={<OurTeam />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/userprofile" element={<UserProfile />}/>
            <Route path="/employeeprofile" element={<EmployeeProfile />}/>
            <Route path="/managerprofile" element={<AdminProfile />}/>
            <Route path="/userdetail" element={<UserDetail />}/>
            <Route path="/appointmentdetail" element={<AppointmentDetail/>}/>



            
        </Routes>
        </>
    )
}