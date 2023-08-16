import React, { Children, createContext, useRef } from "react";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
// import Home from "./Home";

// export let ContextApi = createContext();

const Register = () => {
  let navigate = useNavigate();
  let [tg, setTg] = useState(false);
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let emailRef = useRef();
  let passRef = useRef();
  let userRef = useRef();

  let handleSubmit = (e) => {
    e.preventDefault();

    if (emailRef.current.value === "") {
      emailRef.current.style.border = "1px solid red";
    } else {
      emailRef.current.style.border = "1px solid black";
    }
    if (passRef.current.value === "") {
      passRef.current.style.border = "1px solid red";
    } else {
      passRef.current.style.border = "1px solid black";
    }
    if (userRef.current.value === "") {
      userRef.current.style.border = "1px solid red";
    } else {
      userRef.current.style.border = "1px solid black";
    }
    if (username !== "" && email !== "" && password !== "") {
      window.localStorage.setItem("username", username);
      setTg(!tg);
      navigate("/home");

      console.log(username);
    }
  };

  const [state, setState] = useState(false);
  let handletoggle = () => {
    setState(!state);
  };

  return (
    <div id="registerform">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type={state ? "text" : "password"}
              id="password"
              ref={passRef}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="password-toggle">
              {state ? (
                <AiOutlineEyeInvisible onClick={handletoggle} />
              ) : (
                <AiOutlineEye onClick={handletoggle} />
              )}
            </div>
          </div>
        </div>
        <div className="submit-container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
