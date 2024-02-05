import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import FetchService from "../service/FetchService";
import extractJwtPayload from "../util/extractJwtPayload";

const Login = ({ setCurrentUser }) => {

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleLogin = () => {
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

                navigate('/')
            });
    }

    return (
        <div>
            <h1>Login</h1>
            <div>email <input type="text" ref={email}/></div>
            <div>password <input type="password" ref={password}/></div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;