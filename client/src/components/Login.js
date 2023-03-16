import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import './Login.css';
import Userfront from "@userfront/core";


// Define the Login form component
function Login() {
//   constructor(props) {
//     super(props);
//     this.state = {
//       emailOrUsername: "",
//       password: "",
//     };

//   this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     event.preventDefault();
//     const target = event.target;
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     Userfront.login({
//       method: "password",
//       emailOrUsername: this.state.emailOrUsername,
//       password: this.state.password,
//     });
//   }

//   render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email or username
            <input
              name="emailOrUsername"
              type="text"
              value={this.state.emailOrUsername}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }

export default Login;