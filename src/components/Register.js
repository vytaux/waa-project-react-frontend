import React, { useRef } from 'react'
import FetchService from '../service/FetchService';
import extractJwtPayload from '../util/extractJwtPayload';
import { useNavigate } from 'react-router-dom';

function Register({ setCurrentUser }) {
    const email = useRef();
    const password = useRef();
    const role = useRef();
    const navigate = useNavigate();

    const register = () => {
        // alert("Registering user")
        console.log(email.current.value)
        console.log(password.current.value)
        console.log(role.current.value)

        // FetchService.login(email.current.value, password.current.value, role.current.value)
        //     .then(response => {
        //         const payload = extractJwtPayload(response.data.accessToken);

        //         console.log(payload)
        //         const currentUser = {
        //             email: payload.sub,
        //             roles: payload.roles
        //         };
        //         setCurrentUser(currentUser);

        //         navigate('/')
        //     });

        navigate('/')

    }

    return (
        <main className='register-content'>
            <div className="form register-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" ref={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" ref={password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="roleDropdown">Select an option: </label>
                    <select id="roleDropdown" ref={role}>
                        <option value="">-- Select an option--</option>
                        <option value="ROLE_OWNER">Home Owner</option>
                        <option value="ROLE_CUSTOMER">Home Buyer</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </main>
    );
}

export default Register
