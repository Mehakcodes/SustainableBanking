import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidHide } from "react-icons/bi";


const Login = () => {
  const [formDetails, setformDetails] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    const { name, value } = event.target;
    setformDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function btnHandler(event) {
    event.preventDefault();
    console.log(formDetails);
  }

  return (
    <div className="whole-form-page">
      <div className="pt-24 px-16 pb-14">
        <form onSubmit={btnHandler} className="main bg-white form-login">
          <div className="font-bold text-3xl pb-6">Login to your account</div>
          <label htmlFor="email" className="pb-2 text-lg">E-mail ID / Customer ID</label>
          
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter ID"
            value={formDetails.email}
            onChange={changeHandler}
            
          />
                    <span>
            <a href="/forgot-password" className="text-sm text-red-500">Forgot Login ID?</a>
          </span>
          <br />

          <label htmlFor="password" className="pb-2 text-lg">Password</label>
         
         <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={formDetails.password}
            onChange={changeHandler}
            className=""
          />
          <BiSolidHide className="text-red-500 size-6 relative bottom-8 btnn"/>

          <span>
            <a href="/forgot-password" className="text-sm text-red-500">Forgot Password?</a>
          </span>
          <br />

          <button className="signin">Sign In</button>
          <span className="firsttime pt-1">
          <Link to="/Signup" className="">First time user? REGISTER HERE</Link>
          </span>

        </form>
      </div>
    </div>
  );
};

export default Login;
