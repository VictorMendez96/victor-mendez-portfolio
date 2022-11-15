import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../css/Portfolio.css';

function PortfolioPage () {
    return (
        <MainLayout>
            <Container fluid className='portfolio min-vh-100 p-5 justify-content-center flex-wrap'>
                    <Card className='bg-transparent'>
                        <Card.Body>
                            <Button variant="primary" size="lg" href="#/Backend" className="bg-black bg-gradient">
                                Back-End Development
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className='bg-transparent'>
                        <Card.Body>
                            <Button variant="primary" size="lg" href="#/Frontend" className="bg-black bg-gradient">
                                Front-End Development
                            </Button>
                        </Card.Body>
                    </Card>
                    <Card className='bg-transparent'>
                        <Card.Body>
                            <Button variant="primary" size="lg" href="#/GameDev" className="bg-black bg-gradient">
                                Game Development
                            </Button>
                        </Card.Body>
                    </Card>
            </Container>
        </MainLayout>
    )
};

export default PortfolioPage;