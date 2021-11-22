import React, { Component } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <Router>
            <Header />
            <Sidebar />
            <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login/:notify?" element={<Login/>} />
            </Routes>
            <Footer />
      </Router>
    );
  }
}