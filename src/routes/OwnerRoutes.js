import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OwnerDashboard from "../containers/OwnerDashboard";

function PageRoutes() {
    return (
        <Routes>
            {/*Show owner dashboard*/}
            <Route path='/admin' element={<OwnerDashboard />} />
        </Routes >
    )
}

export default PageRoutes
