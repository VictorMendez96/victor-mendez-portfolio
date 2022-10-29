import React from 'react';        
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


function MainNav () {
    return (
        <Navbar className="bg-success" expand="md">
            <Container fluid>
                <Navbar.Brand href="#/" className="text-white">Victor Mendez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="align-items-center">
                        <Navbar.Text><Nav.Link href="#/" className="text-white">Home</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/About" className="text-white">About Me</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Portfolio" className="text-white">Portfolio</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Resume" className="text-white">Resume</Nav.Link></Navbar.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Contact Me
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="mailto:victormendez990@gmail.com">Email</Dropdown.Item>
                                <Dropdown.Item href="https://github.com/VictorMendez96" target="_blank">GitHub</Dropdown.Item>
                                <Dropdown.Item href="https://www.linkedin.com/in/victorhmendez/" target="_blank">LinkedIn</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="#/Contact">Contact Form</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNav;