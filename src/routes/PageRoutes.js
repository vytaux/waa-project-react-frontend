import { Routes, Route } from "react-router-dom";
import React from 'react';
import RequireAuth from "../components/RequireAuth";
import Missing from "../components/Missing";
import Homepage from "../containers/Homepage";
import Login from "../components/Login";
import AdminDashboard from "../containers/AdminDashboard";
import OwnerDashboard from "../containers/OwnerDashboard";
import CustomerDashboard from "../containers/CustomerDashboard";

import Register from "../components/Register";


export default function PageRoutes({ setCurrentUser }) {
    return (
        <Routes>
            <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />

            {/*Show properties homepage*/}
            <Route path='/' element={<Homepage />} />

            {/*Show admin dashboard*/}
            <Route path='/admin' element={<AdminDashboard />} />

            {/*Show admin dashboard*/}
            <Route path='/owner' element={<OwnerDashboard />} />

            {/*Show admin dashboard*/}
            <Route path='/customer' element={<CustomerDashboard />} />


            {/*Show Register/Signup page*/}
            <Route path='/register' element={<Register />} />

            {/*specific admin/customer/owner routes???*/}
            <Route element={<RequireAuth />}>

            </Route>

            {/*beautiful 404*/}
            <Route path="*" element={<Missing />} />
        </Routes>
    )
}