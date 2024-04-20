import React, { useState } from 'react';
import "./GraceNoteNav.css";
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
} from 'reactstrap';
import logo from './Imgs/LogoOnly.png';

export default function GraceNoteNav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-sect">
      <Navbar className="offset-1 col-10" expand="md">
        <NavbarBrand href="/" className="nav-brand">
          <img
          className="app-logo"
            alt="logo"
            src={logo}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Account
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                songs
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Search Song</DropdownItem>
                <DropdownItem>Song List</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Song Selector</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="#">Settings</NavLink>
            </NavItem>
          </Nav>
          <NavbarText></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
