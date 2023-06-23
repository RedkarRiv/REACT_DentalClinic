import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { AboutUs } from "../AboutUs/AboutUs";
import { OurTeam } from "../OurTeam/OurTeam";
import { Contact } from "../Contact/Contact";
import { UserProfile } from "../UserProfile/UserProfile";

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
            <Route path="/myprofile" element={<UserProfile />}/>

        </Routes>
        </>
    )
}