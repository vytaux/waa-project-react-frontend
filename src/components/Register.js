import React, { useRef } from "react";
import FetchService from "../service/FetchService";
import extractJwtPayload from "../util/extractJwtPayload";
import { useNavigate } from "react-router-dom";

function Register() {
  const email = useRef();
  const password = useRef();
  const role = useRef();
  const navigate = useNavigate();

  const register = () => {
    if (!email.current.value) alert("Please enter email");
    else if (!password.current.value) alert("Please enter password");
    else if (!role.current.value) alert("Please select a role");
    else
      FetchService.register(
        email.current.value,
        password.current.value,
        role.current.value
      )
        .then((response) => {
          alert("Registration Successful, please login");
          navigate("/login");
        })
        .catch((e) => {
          console.log(e);
          alert(e.response.data);
        });
  };

  return (
    <main className="register-content">
      <div className="form register-form mx-auto">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            ref={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            ref={password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roleDropdown">Select an option: </label>
          <select id="roleDropdown" ref={role}>
            <option value="">-- Select an option--</option>
            <option value="OWNER">Home Owner</option>
            <option value="CUSTOMER">Home Buyer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary" onClick={register}>
          Register
        </button>
      </div>
    </main>
  );
}

export default Register;
