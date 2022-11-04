import React from 'react';        
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';


function MainNav () {
    return (
        <Navbar className="bg-dark rounded m-1" expand="xl">
            <Container fluid>
                <Navbar.Brand href="#/" className="text-white m-2">Victor Mendez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="align-items-center p-2">
                        <Navbar.Text><Nav.Link href="#/" className="text-white m-2">Home</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/About" className="text-white m-2">About Me</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Portfolio" className="text-white m-2">Portfolio</Nav.Link></Navbar.Text>
                        <Navbar.Text><Nav.Link href="#/Resume" className="text-white m-2">Resume</Nav.Link></Navbar.Text>
                        <Dropdown>
                            <Dropdown.Toggle variant="dark" id="dropdown-basic">
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