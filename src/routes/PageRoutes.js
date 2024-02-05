import { Routes, Route } from "react-router-dom";
import React from 'react';
import RequireAuth from "../components/RequireAuth";
import Missing from "../components/Missing";
import Homepage from "../components/Homepage";
import Login from "../components/Login";

export default function PageRoutes({ setCurrentUser }) {
    return (
        <Routes>
            <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />

            {/*Show properties homepage*/}
            <Route path='/' element={<Homepage />} />

            {/*specific admin/customer/owner routes???*/}
            <Route element={<RequireAuth />}>

            </Route>

            {/*beautiful 404*/}
            <Route path="*" element={<Missing />} />
        </Routes>
    )
}