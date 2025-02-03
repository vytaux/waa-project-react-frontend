import React, { useRef } from "react";
import FetchService from "../service/FetchService";
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
          <label htmlFor="roleDropdown">You are a...</label>

          <div style={{display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center"}}>
            <div style={{display: "flex", alignItems: "center", marginRight: "10px"}}>
              <input style={{marginBottom: "7px", marginRight: "4px"}} type="radio" id="homeOwner" name="userType" value="OWNER"/>
              <label htmlFor="homeOwner" style={{marginLeft: "0.25rem"}}>Home Owner</label>
            </div>
            <div style={{display: "flex", alignItems: "center", marginBottom: "3px", marginRight: "5px"}}>
              <input style={{marginBottom: "7px", marginRight: "4px"}} type="radio" id="homeBuyer" name="userType" value="CUSTOMER"/>
              <label htmlFor="homeBuyer" style={{marginLeft: "0.25rem"}}>Home Buyer</label>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={register}>
          Register
        </button>
      </div>
    </main>
  );
}

export default Register;
