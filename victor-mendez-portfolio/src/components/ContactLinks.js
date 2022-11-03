import React from 'react';
import Image from 'react-bootstrap/esm/Image';
import GitHub from '../assets/github.svg';
import LinkedIn from '../assets/linkedin.svg';
import Col from 'react-bootstrap/Col';

function ContactLinks () {
    return (
        <Col>
                <Image className="m-1" src={GitHub}/>
                <Image className="m-1" src={LinkedIn}/>
        </Col>
    )
};

export default ContactLinks;