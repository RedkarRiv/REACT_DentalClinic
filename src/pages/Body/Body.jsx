import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";

export const Body = () => {

    return (
        <>
        <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
        </>
    )
}