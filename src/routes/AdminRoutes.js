import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../containers/AdminDashboard'

function AdminRoutes() {
    return (
        <Routes>
            {/*Show admin dashboard*/}
            <Route path='/admin' element={<AdminDashboard />} />
        </Routes >
    )
}

export default AdminRoutes
