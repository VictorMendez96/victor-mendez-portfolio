import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import GitHub from '../assets/github.svg'
import LinkedIn from '../assets/linkedin.svg'

function Footer () {
    return (
        <footer className="flex-end text-center">
            <Container>
                Victor Mendez 2022 | 
                <Image src={GitHub}/>
                <Image src={LinkedIn}/>
            </Container>
        </footer>
    )
}

export default Footer;