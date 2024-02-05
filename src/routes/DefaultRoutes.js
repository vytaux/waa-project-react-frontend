import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Missing from '../components/Missing'
import Homepage from '../containers/Homepage'
import Login from '../components/Login'
import Register from '../components/Register'

function DefaultRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />

            {/*Show properties homepage*/}
            <Route path='/' element={<Homepage />} />


            {/*Show Register/Signup page*/}
            <Route path='/register' element={<Register />} />

            {/*beautiful 404*/}
            <Route path="*" element={<Missing />} />
        </Routes >
    )
}

export default DefaultRoutes
