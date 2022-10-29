import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';

function ContactForm () {
    return (
        <Container className="p-5">
            <Card>
                <Card.Header className="bg-success text-white">Send me a message!</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address: </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message: </Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="bg-success" type="submit">
                            Send!
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default ContactForm;