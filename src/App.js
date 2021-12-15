import React, { Component, Fragment , useState} from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Register from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Main from "./components/main";
import Passwordreset from "./components/passwordreset";
import Passwordforgot from "./components/passwordforgot";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
const isLoggedIn = () => {
  return localStorage.getItem("TOKEN_KEY") != null;
};

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition

      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Navigate to="/login" />
      )
    }
  /> 
);
export default class App extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log("update");
  }

  render() {
    //const {pathname} = this.props.location;
    return (
      <Router>
        <Fragment>
          {isLoggedIn() && <Header />}
          {isLoggedIn() && <Sidebar />}
          <Routes>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/password/reset/:token" element={<Passwordreset/>} />
            <Route path="/password/forgot" element={<Passwordforgot/>} />
            
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Main/>} />
            <Route/>
          </Routes>
          {isLoggedIn() && <Footer />}
        </Fragment>
      </Router>
    );
  }
}