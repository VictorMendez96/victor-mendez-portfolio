import React from 'react';
import Container from 'react-bootstrap/Container';
import MainNav from '../components/Navbar';
import Footer from '../components/Footer'

function MainLayout ( {children} ) {
  return (
    <Container fluid className="main-font bg-black">
        <MainNav/>
        {children}
        <Footer/>
    </Container>
  );
}

export default MainLayout;