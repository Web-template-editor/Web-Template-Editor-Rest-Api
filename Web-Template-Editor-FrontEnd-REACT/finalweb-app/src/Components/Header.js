import React from "react";
import {Navbar,Nav,NavDropdown}from 'react-bootstrap';


function Header(){
    
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand href="">WEB-TEMPLATE PROJECT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/Details">DETAILS</Nav.Link>
      
      <NavDropdown title="PROJECT 2020-2022" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Project">team -1</NavDropdown.Item>
        <NavDropdown.Item href="/Details">team-2</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Guids">MORE INFO</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>

</Navbar>

        )
    }

export default Header;