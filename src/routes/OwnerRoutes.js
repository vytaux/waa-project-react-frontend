import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OwnerDashboard from '../containers/OwnerDashboard'

function OwnerRoutes() {
    return (
        <Routes>
            {/*Show admin dashboard*/}
            <Route path='/owner' element={<OwnerDashboard />} />
        </Routes>
    )
}

export default OwnerRoutes
