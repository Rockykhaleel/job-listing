import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from "mdb-react-ui-kit";
import "./All.css";

const Navbar = () => {
  const [showNavSecond, setShowNavSecond] = useState(false);
  return (
    <header>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">Logo</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNavSecond(!showNavSecond)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavSecond}>
            <MDBNavbarNav className="mmid">
              <MDBNavbarLink
                active
                aria-current="page"
                href="#"
                className="middle"
              >
                Find Jobs
              </MDBNavbarLink>
              <MDBNavbarLink href="#" className="middle">
                Find Talent
              </MDBNavbarLink>
              <MDBNavbarLink href="#" className="middle">
                Upload Job
              </MDBNavbarLink>
              <MDBNavbarLink href="#" className="middle">
                About Us
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3663024/pexels-photo-3663024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: "400px",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Find your dream job</h1>
              <h4 className="mb-3">
                Looking for jobs? Browse our latest job openings to view & apply
                the best jobs today
              </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
