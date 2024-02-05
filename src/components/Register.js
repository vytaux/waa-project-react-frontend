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
        <div>
            <h1>Register</h1>
            <div>email<input type="text" ref={email} /></div>
            <div>password <input type="password" ref={password} /></div>

            <label htmlFor="roleDropdown" >Select an option: </label>
            <select id="roleDropdown" ref={role} >
                <option value="">-- Select an option--</option>
                <option value="ROLE_OWNER">Home Owner</option>
                <option value="ROLE_CUSTOMER">Home Buyer</option>
            </select>

            <button onClick={register}>Register</button>
        </div>
    );
}

export default Register
