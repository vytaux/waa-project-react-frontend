import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerDashboard from '../containers/CustomerDashboard'

function CustomerRoutes() {
    return (
        <Routes>
            {/*Show admin dashboard*/}
            <Route path='/admin' element={<CustomerDashboard />} />

        </Routes>
    )
}

export default CustomerRoutes