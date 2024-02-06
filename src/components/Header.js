import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import hasRole from "../util/hasRole";

const Header = () => {
    const { currentUser, updateUser } = useContext(UserContext)
    const navigate = useNavigate();

    const logoutHandler = () => {
        updateUser(null);
        navigate('/')
    }
    
    return (
        <header className='header'>
            <nav className='w-full flex'>
                <Link to={'/'} className='title-link'><h1>OneHouse</h1></Link>
                {hasRole(currentUser, 'ADMIN') ? <Link to='/admin'>Admin</Link> : null}
                {hasRole(currentUser, 'OWNER') ? <Link to='/owner'>Owner</Link> : null}
                {hasRole(currentUser, 'CUSTOMER') ? <Link to='/customer'>Customer</Link> : null}
                {hasRole(currentUser, 'OWNER') || hasRole(currentUser, 'ADMIN')
                    ? <Link className='add-property' to='/owner/add-property'>Add Property</Link> : null}
                {!currentUser ? <Link to='/register' className='login-logout-link'>Register</Link> : null}
                {!currentUser ? <Link to='/login' className='login-logout-link'>Login</Link> : null}
                {currentUser ? <Link className='login-logout-link' onClick={logoutHandler}>Logout</Link> : null}
            </nav>
        </header>
    )
}


export default Header;