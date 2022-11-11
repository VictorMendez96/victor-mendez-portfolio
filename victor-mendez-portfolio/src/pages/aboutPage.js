import React from 'react';
import MainLayout from '../layouts/MainLayout';
import AboutCard from '../components/AboutCard';
import '../css/About.css';
import Container from 'react-bootstrap/esm/Container';

function AboutPage () {
    return (
        <MainLayout>
            <Container fluid className='about min-vh-100 p-5'>
            <AboutCard/>
            </Container>
        </MainLayout>
    )
}

export default AboutPage;
