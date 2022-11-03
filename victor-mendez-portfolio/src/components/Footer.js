import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ContactLinks from './ContactLinks';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
    return (
        <footer>
            <Container fluid className="text-center">
                <Row>
                    <Col>
                        Victor Mendez 2022
                    </Col>
                    <ContactLinks/>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;