import React from "react";
import { Link } from "react-router-dom";
import AuthNav from "./Auth0/loginFunction";
import logo from "../img/wodamoiLogo.png";

const NavBar = () => {
  return (
    <header className="mb-3" style={{backgroundColor: "#9f7800"}}>
      <div class="topnav">
        <div class="topnav-centered">
          <Link to="/">
              <img src={logo} alt="logo" className="logoHeader"></img>
          </Link>
        </div>
          
        <div class="topnav-right">
          <AuthNav />
        </div>
      </div>
      <p style={{height: "150px"}}></p>
    </header>
  );
};

export default NavBar;
