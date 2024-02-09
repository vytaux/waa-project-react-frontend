import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import hasRole from "../../util/hasRole";
import './Header.css';

const Header = () => {
    const { currentUser, updateUser } = useContext(UserContext)
    const navigate = useNavigate();

    const logoutHandler = () => {
        updateUser(null);
        sessionStorage.setItem('user', "");
    }

    return (
        <header className='header'>
            <nav className='w-full flex'>
                <Link to={'/'} className='logo'><img src="/logo.png" alt="" /></Link>
                {hasRole(currentUser, 'OWNER') || hasRole(currentUser, 'ADMIN')
                    ? <Link className='add-property' to='/owner/add-property'>Add Property</Link> : null}
                <div className="dashboard-links">
                    {hasRole(currentUser, 'ADMIN') ? <Link to='/admin'>Admin</Link> : null}
                    {hasRole(currentUser, 'OWNER') ? <Link to='/owner'>Owner</Link> : null}
                    {hasRole(currentUser, 'CUSTOMER') ? <Link to='/customer'>Customer</Link> : null}
                    {currentUser ? <Link to="/messages">Messages</Link> : null}
                </div>
                <div className="auth-links">
                    {!currentUser ? <Link to='/register'>Register</Link> : null}
                    {!currentUser ? <Link to='/login'>Login</Link> : null}
                    {currentUser ? <Link onClick={logoutHandler}>Logout</Link> : null}
                </div>
            </nav>
        </header>
    )
}


export default Header;