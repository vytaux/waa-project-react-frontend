import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import hasRole from "../util/hasRole";

const Header = ({ currentUser, setCurrentUser }) => {

    const navigate = useNavigate();

    const logoutHandler = () => {
        setCurrentUser(null);
    }

    if (hasRole(currentUser, 'ROLE_ADMIN'))
        navigate('/admin')

    if (hasRole(currentUser, 'ROLE_OWNER'))
        navigate('/owner')

    if (hasRole(currentUser, 'ROLE_CUSTOMER'))
        navigate('/customer')


    if (!currentUser)
        return (
            <header className='header'>
                <nav className='w-full flex'>
                    <Link to={'/'} className='title-link'><h1>OneHouse</h1></Link>
                    {!currentUser ? <Link to='/register' className='login-logout-link'>Register</Link> : null}
                    {!currentUser ? <Link to='/login' className='login-logout-link'>Login</Link> : null}
                    {currentUser ? <Link className='login-logout-link' onClick={logoutHandler}>Logout</Link> : null}
                </nav>
            </header>
        )

}


export default Header;