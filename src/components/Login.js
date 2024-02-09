import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import FetchService from "../service/FetchService";
import extractJwtPayload from "../util/extractJwtPayload";
import pageRoutes from "../routes/PageRoutes";

const Login = ({ setCurrentUser }) => {

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleLogin = () => {

        if (!email.current.value)
            alert("Please enter email")
        else if (!password.current.value)
            alert("Please enter password")
        else
            FetchService.login(email.current.value, password.current.value)
                .then(response => {
                    const payload = extractJwtPayload(response.data.accessToken);

                    const currentUser = {
                        email: payload.sub,
                        accessToken: response.data.accessToken,
                        roles: payload.roles
                    };
                    setCurrentUser(currentUser);
                    console.log(payload)

                    sessionStorage.setItem('user', JSON.stringify(currentUser));

                    navigate('/')
                }).catch((e) => {
                    console.log(e)
                    alert("Invalid email/password");
                });
        ;
    }

    return (
        <main className='login-content'>
            <div className="form login-form mx-auto">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" ref={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"
                        ref={password} />
                </div>
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            </div>
        </main>
    );
}

export default Login;