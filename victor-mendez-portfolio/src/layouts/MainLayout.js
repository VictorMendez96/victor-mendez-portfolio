import React from 'react';
import Container from 'react-bootstrap/Container';
import MainNav from '../components/Navbar';
import Footer from '../components/Footer'

function MainLayout ( {children} ) {
  return (
    <Container className="min-vw-100 font-monospace">
        <MainNav/>

        <Container fluid className="min-vh-100">
            {children}
        </Container>

        <Footer/>
    </Container>
  );
}

export default MainLayout;