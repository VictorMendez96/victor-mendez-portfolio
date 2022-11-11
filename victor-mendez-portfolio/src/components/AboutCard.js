import React from 'react';
import Figure from 'react-bootstrap/Figure';
import ProfilePhoto from '../assets/profile-photo.jpg';
import Container from 'react-bootstrap/esm/Container';

function AboutCard () {
    return (
        <Container className='text-center p-5 bg-black bg-gradient rounded'>
            <Figure>
                
            <Figure.Image
                width={400}
                height={400}
                alt={ProfilePhoto}
                src={ProfilePhoto}
                className="rounded-circle"
            />
            <Figure.Caption className="p-5 bg-black rounded text-white m-3">
                Hello, my name is Victor Mendez. I am currently an Associate Applications Developer for a Credit Union. 
                I recently completed a Coding Bootcamp at Denver Univeristy. My goal is to enter into game development
                and work with a team to innovate the future of gaming. I invite you to explore my website and see some 
                of the projects I have worked on and continue to work on, available on my Portfolio page.
            </Figure.Caption>
                
            </Figure>
        </Container>
    )
};

export default AboutCard;