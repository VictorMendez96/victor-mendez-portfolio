import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import ContactLinks from './ContactLinks';

function Footer () {
    return (
        <footer className="text-center">
            <Stack direction="horizontal">
                <Container>
                    Victor Mendez 2022 | 
                </Container>
                <ContactLinks/>
            </Stack>
        </footer>
    )
}

export default Footer;