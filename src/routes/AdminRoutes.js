import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from '../containers/AdminDashboard'
import Test from '../containers/Test'

function AdminRoutes() {
    return (
        <Routes>
            {/*Show admin dashboard*/}
            <Route path='/adminnn' element={<Test />} />
        </Routes>
    )
}

export default AdminRoutes
