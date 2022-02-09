import React, { useEffect, useState } from "react";
import {Navbar,Nav,NavDropdown}from 'react-bootstrap';
import axios from "axios";

function Header(){
  const[project,setProject]=useState([])
  //const[ide,setIde]=useState('')

  useEffect(()=>{axios.get('http://localhost:8080/projects/project').then((response)=>{
    setProject(response.data)

  })},[])

  return(
  
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
  <Navbar.Brand href="">WEB-TEMPLATE PROJECT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/Welcome">HOME</Nav.Link>
     
      <NavDropdown title="PROJECT 2020-2022" id="collasible-nav-dropdown">
        
        {
          project.map((obj,index)=>{
            return(
              
              <NavDropdown.Item key={index} href={"/project/"+obj.projectName}>{obj.projectName}</NavDropdown.Item>

            )

          })

        }

        {/* <NavDropdown.Item href="/Details">team-2</NavDropdown.Item> */}
        
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/Selection">MORE INFO</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>

</Navbar>

)}

export default Header;