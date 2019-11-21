import React from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import LoginPage from "./components/login/loginForm"
import HomePage from "./components/home/home"
import Logout from "./components/logout/logout"
import ReactNotification from "react-notifications-component";
import { PrivateRoute } from "./helper/privateRoute"
import { history } from "./helper/history";
import Header from "./helper/header"

function App() {
  return (
    <div>
      <Router history={history}>
        <Header></Header>
        <div className="container">
          <ReactNotification></ReactNotification>
          <div>
            <PrivateRoute exact path="/home" component={HomePage} />
            <PrivateRoute exact path="/logout" component={Logout} />
            <Route path="/login" component={LoginPage} />

          </div>


        </div></Router></div>
  );
}

export default App;
