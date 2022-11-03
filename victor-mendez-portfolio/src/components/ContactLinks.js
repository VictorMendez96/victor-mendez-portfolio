import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';

function ContactLinks () {
    return (
        <Container>
            <Container>
                <Image src={GitHub}/>
            </Container>
            <Container>
                <Image src={LinkedIn}/>
            </Container>
        </Container>
    )
};

export default ContactLinks;