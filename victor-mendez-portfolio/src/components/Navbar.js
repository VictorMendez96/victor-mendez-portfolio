import React from 'react';        
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function MainNav () {
    return (
        <Navbar className="bg-success" expand="md">
            <Container fluid>
                <Navbar.Brand href="#/">Victor Mendez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <Navbar.Text><Nav.Link href="#/">Home</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/About">About Me</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Portfolio">Portfolio</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Resume">Resume</Nav.Link></Navbar.Text>
                        <Navbar.Text><NavDropdown title="Contact Me" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.linkedin.com/in/victorhmendez/" target="_blank">LinkedIn</NavDropdown.Item>
                            <NavDropdown.Item href="https://github.com/VictorMendez96" target="_blank">GitHub</NavDropdown.Item>
                            <NavDropdown.Item href="mailto:victormendez990@gmail.com">Email</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/Contact">Contact Form</NavDropdown.Item>
                        </NavDropdown></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav;