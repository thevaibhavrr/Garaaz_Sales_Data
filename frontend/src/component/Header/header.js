import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarLink,
} from "mdb-react-ui-kit";
import logo from "../../images/logo6.png";
// import {NavLink} from "react-router-dom"
import { NavLink } from "react-router-dom";

// Navbar
export default function Header() {
  return (
    // <MDBNavbar expand="lg" light bgColor="light" >
    <MDBNavbar expand="lg" light bgColor="white">
      <MDBContainer fluid>
        <NavLink to="/">
          <img src={logo} alt="logo" width="40" height="40" />
        </NavLink>
        {/* Brand_Sales_Daily */}
        <MDBNavbarNav>
          <MDBNavbarLink active aria-current="page">
            <NavLink to="/" aria-current style={{ color: "black" }}>
              Add Sale
            </NavLink>
            {/* See Sale */}
          </MDBNavbarLink>
          <MDBNavbarLink active aria-current="page" href="/">
            <NavLink to="/data" aria-current style={{ color: "black" }}>
              All Sale
            </NavLink>
          </MDBNavbarLink>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
