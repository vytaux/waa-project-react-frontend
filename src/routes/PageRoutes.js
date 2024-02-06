import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Missing from '../components/Missing'
import Homepage from '../containers/Homepage'
import Login from '../components/Login'
import Register from '../components/Register'
import RequireAuth from "../components/RequireAuth";
import AdminDashboard from "../containers/AdminDashboard";
import OwnerDashboard from "../containers/OwnerDashboard";
import CustomerDashboard from "../containers/CustomerDashboard";
import Property from "../components/Property";
import PropertyDetails from "../components/PropertyDetails";

function PageRoutes({ currentUser, setCurrentUser }) {
    return (
        <Routes>
            <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />

            {/*Show properties homepage*/}
            <Route path='/' element={<Homepage />} />
            <Route path='/properties/:slug' element={<PropertyDetails />} />

            <Route element={<RequireAuth currentUser={currentUser} />}>
                {/*Show admin dashboard*/}
                <Route path='/admin' element={<AdminDashboard currentUser={currentUser} />} />
                {/*Show admin dashboard*/}
                <Route path='/owner' element={<OwnerDashboard />} />
                {/*Show admin dashboard*/}
                <Route path='/customer' element={<CustomerDashboard />} />
            </Route>

            {/*Show Register/Signup page*/}
            <Route path='/register' element={<Register />} />

            {/*beautiful 404*/}
            <Route path="*" element={<Missing />} />
        </Routes >
    )
}

export default PageRoutes
