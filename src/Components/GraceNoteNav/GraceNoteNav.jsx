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
      <Navbar className="offset-1 col-10" expand="md" style={{ zIndex: 999 }}>
        <div className="nav-brand">
          <Link to="/">
            <img className="app-logo" alt="logo" src={logo} />
          </Link>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
            <NavLink tag={Link} to="/song-search">
              Search
            </NavLink>
            {/* <NavLink tag={Link} to="/account">
              Account
            </NavLink> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Songs
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Your Song List</DropdownItem>
                <DropdownItem tag={Link} to="/Randomizer">
                  Song Randomizer
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/song-add">
                  Manage Your Songs
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavLink tag={Link} to="/sign-up">
              Login
            </NavLink>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
