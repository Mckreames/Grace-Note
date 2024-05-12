import React, { useState } from "react";
import "./GraceNoteNav.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import logo from "./Imgs/LogoOnly.png";

export default function GraceNoteNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-2 nav-sect">
      <Navbar className="offset-1 col-10" expand="md" style={{ zIndex: 100 }}>
        <NavbarBrand className="nav-brand">
          <Link to="/">
            <img className="app-logo" alt="logo" src={logo} />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/song-search" style={{ textDecoration: "none" }}>
                <NavLink>Search</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/account" style={{ textDecoration: "none" }}>
                <NavLink>Account</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Songs
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Your Song List</DropdownItem>
                <DropdownItem>
                  <Link
                    to="/Randomizer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Song Randomizer
                  </Link>
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem>
                  <Link
                    to="/song-add"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Manage Your Songs
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/sign-up" style={{ textDecoration: "none" }}>
                <NavLink>Login</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Wazzup</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
