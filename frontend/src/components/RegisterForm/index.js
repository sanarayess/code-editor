import React, { useState } from "react";
import axios from 'axios';


function RegisterForm() {

  const handleSignUpClick = () => {
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
      const { user, authorisation } = response.data;
      localStorage.setItem('token', authorisation.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("user_id", response.data.user.id);
      localStorage.setItem("email", response.data.user.email);
      console.log('User created successfully:', user);
      window.location.href = "/Home";
    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <div>
      <div className="container-signup flex">
        <div className="flex column center">
          <a href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#0DD99F' }}>PY</span>THONIC
          </a>
          <div id="signup-content" className="register-content round-edges">

            <form onSubmit={handleSubmit}>
              <div id="login-content" className="login-container1 flex column">
                <p className="login-title dark-purple">Register</p>
                <label htmlFor="name">Username</label>
                <input id="name" className="input round-edges" type="text" name="name" />
                <label htmlFor="email">Email</label>
                <input id="email" className="input round-edges" type="text" name="email" />
                <label htmlFor="password">Password</label>
                <input id="password" className="input round-edges" type="password" name="password" />
                <label htmlFor="gender">Gender:</label>
                <select className="round-edges input-border display-block" id="gender" name="gender" required>
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select><br />
                <label htmlFor="age">Age:</label>
                <input className="round-edges input-border display-block" type="number" id="age" name="age"
                  required />

                <label htmlFor="location">Location:</label>
                <input className="round-edges input-border display-block" type="text" id="location" name="location"
                  required></input>
              </div>

              <button id="signup-btn" className="round-edges btn-signup" type="submit">
                Sign Up
              </button>
            </form>

            <div className="flex row">
              <p className="dark-purple">Already have an account?</p>
              <a href="#" className="content-btn" id="signup-content-btn btn" onClick={handleSignUpClick}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;