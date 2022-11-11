import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';
import Container from 'react-bootstrap/Container';
import '../css/Contact.css'

function ContactPage () {
    return (
        <MainLayout>
            <Container fluid className='contact min-vh-100 p-5'>
                <ContactForm/>
            </Container>
        </MainLayout>
    )
}

export default ContactPage;