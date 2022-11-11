import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Message from '../components/Messages';
import Container from 'react-bootstrap/Container';
import '../css/Home.css'

function HomePage () {
    return (
        <MainLayout>
            <Container fluid className='home min-vh-100 p-5'>
                <Message/>
            </Container>
        </MainLayout>
    )
};

export default HomePage;
