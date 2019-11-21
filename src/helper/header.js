import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const data = localStorage.getItem("user")
const Header = () => {
    console.log("USER DATA ::: :: ", data)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="http://lacodeid.com">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>

                    <li className="nav-item ">
                        <span> Hi Sachin Tyagi</span>
                    </li>

                    <li className="nav-item right">
                        <Link className="nav-link" to="/logout">Logout</Link>

                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Header;