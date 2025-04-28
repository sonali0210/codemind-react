import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
  const {compName} = props; 
  // Destructuring props to get compName and compLoc 
  
  return (
        <>
            {/* <h1>Header</h1>
            <p>Welcome to Header Component</p>
             <*/}
          <Navbar bg="warning" variant="light" expand="lg" className="shadow-sm">
            <Container>
              <Navbar.Brand href="#" className="fw-bold text-dark">
                {compName}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className="text-dark fw-semibold">Home</Nav.Link>
                  <Nav.Link href="#recipes" className="text-dark fw-semibold">Recipes</Nav.Link>
                  <Nav.Link href="#about" className="text-dark fw-semibold">About</Nav.Link>
                  <Nav.Link href="#contact" className="text-dark fw-semibold">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>          
        </>
    );
}

export default Header;