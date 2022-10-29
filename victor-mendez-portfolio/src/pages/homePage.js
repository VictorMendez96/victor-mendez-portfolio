import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HomePage () {
    return (
        <MainLayout>
            <Container className="p-5">
                <Card className="text-center">
                    <Card.Header className="bg-success text-white">Welcome!</Card.Header>
                    <Card.Body>
                    <Card.Title>Thanks for visiting my website!</Card.Title>
                    <Card.Text>
                        Learn more about me, see my work, and contact me.
                    </Card.Text>
                    <Button className="bg-success">About Me!</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </Container>
        </MainLayout>
    )
};

export default HomePage;
