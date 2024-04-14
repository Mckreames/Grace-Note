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

export default function GraceNoteNav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar >
        <NavbarBrand href="/">Grace Note</NavbarBrand>
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
          </Nav>
          <NavbarText>Settings</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
