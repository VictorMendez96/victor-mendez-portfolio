import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Figure from 'react-bootstrap/Figure';
import ProfilePhoto from '../assets/profile-photo.jpg';
import Container from 'react-bootstrap/esm/Container';

function AboutPage () {
    return (
        <MainLayout>
            <Container className='text-center p-5'>
                <Figure>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt={ProfilePhoto}
                        src={ProfilePhoto}
                        className="rounded-circle"
                    />
                    <Figure.Caption className="p-5">
                        Hello, my name is Victor Mendez. I am currently an Associate Application Developer for a Credit Union. 
                        I recently completed a Coding Bootcamp at Denver Univeristy. My goal is to enter into game development
                        and work with a team to innovate the future of gaming. I invite you to explore my website and see some 
                        of the projects I have worked on and continue to work on, available on my Porfolio page.
                    </Figure.Caption>
                </Figure>
            </Container>
        </MainLayout>
    )
}

export default AboutPage;
