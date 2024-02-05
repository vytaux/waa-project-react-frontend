import React from "react";
import {Link} from "react-router-dom";
import hasRole from "../util/hasRole";

const Header = ({ currentUser, setCurrentUser }) => {

    const logoutHandler = () => {
        setCurrentUser(null);
    }

    return (
        <header className='header'>
            <nav className='w-full flex'>
                <Link to={'/'} className='title-link'><h1>OneHouse</h1></Link>

                {hasRole(currentUser, 'ROLE_ADMIN') && <h2>This is ADMIN</h2>}
                {hasRole(currentUser, 'ROLE_OWNER') && <h2>This is OWNER</h2>}
                {hasRole(currentUser, 'ROLE_CUSTOMER') && <h2>This is CUSTOMER</h2>}

                {!currentUser
                    ? <Link to='/login' className='login-logout-link'>Login</Link>
                    : <Link className='login-logout-link' onClick={logoutHandler}>Logout</Link>
                }
            </nav>
        </header>
    );
}


export default Header;