import React, { Component } from "react";
import { Navigate } from "react-router";

class Main extends Component {
  render() {
    return <div>
  <h1> Welcome to ClubMe! </h1>
  <p /><ul>
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
    <li><a href="/logout">Logout</a></li>
  </ul><p />
</div>

  }
}

export default Main;
