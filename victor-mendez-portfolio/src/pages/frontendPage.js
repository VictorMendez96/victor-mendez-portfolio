import React from 'react';
import Logo from '../logo.svg';
import ProjectCard from '../components/ProjectCard';
import MainLayout from '../layouts/MainLayout';
import Container from 'react-bootstrap/esm/Container';

function FrontendPage () {
    const projectInfo = [
        {
            name: "Chairman of the Board",
            type: "Collaborative, Web Application",
            description: "Social Media site that connects to Bored.API to give you ideas of what to do.",
            image: "https://user-images.githubusercontent.com/101539821/194795484-2bc08084-5537-4e78-ae59-f3933b0b8db9.png",
            ghLink: "https://github.com/Ginger421/chairman-of-the-bored",
            depLink: "https://arcane-journey-96095.herokuapp.com/"
        },
        {
            name: "Team Profile Generator",
            type: "CLI App",
            description: "Create a team profile HTML from your command line! Helping you stay organized.",
            image: "https://github.com/VictorMendez96/team-profile-generator/blob/main/dist/assets/sample-profile.png?raw=true",
            ghLink: "https://github.com/VictorMendez96/team-profile-generator",
            depLink: "https://drive.google.com/file/d/1GlUPmDELzNFoMjaaNpwdIRG5cHypWRMv/view"
        },
        {
            name: "Professional Readme Generator",
            type: "CLI App",
            description: "This program launches in your command line and asks you a few questions about your project. Then, it generates a professional readme.md file.",
            image: "https://github.com/VictorMendez96/readme-generator/blob/main/assets/sample-readme.png?raw=true",
            ghLink: "https://github.com/VictorMendez96/readme-generator",
            depLink: "https://drive.google.com/file/d/1sNEVdzXIV_9-IiwRd_EhsWaYFII6jdXX/view"
        },
        {
            name: "Note Taker",
            type: "Heroku Deployment",
            description: "I completed the back-end of this application to communicate with the front-end and save user input notes.",
            image: "https://github.com/VictorMendez96/note-taker/raw/main/public/assets/images/homepage.png",
            ghLink: "https://github.com/VictorMendez96/note-taker",
            depLink: "https://agile-cove-29017.herokuapp.com/"
        },
        {
            name: "Custom Homepage",
            type: "Collaborative",
            description: "This webapp allows you to create a custom homepage from the widgets we created and APIs connected.",
            image: "https://github.com/VictorMendez96/custom-homepage/blob/main/assets/img/Example-homepage.png?raw=true",
            ghLink: "https://github.com/VictorMendez96/custom-homepage",
            depLink: "https://victormendez96.github.io/custom-homepage/"
        },
        {
            name: "Explaining a URL Regex",
            type: "GitHub Gist",
            description: "This is a gist I created to help me understand Regex by having to break down a URL Regex.",
            image: Logo,
            ghLink: "https://gist.github.com/VictorMendez96/e10e44d27d14ff4778ae45ba285764dc",
            depLink: "https://gist.github.com/VictorMendez96/e10e44d27d14ff4778ae45ba285764dc"
        }
    ]

    const ProjectCards = projectInfo.map((project) =>
        <ProjectCard key={project.name} project={project}/>
    )

    return (
        <MainLayout>
            <Container fluid className='portfolio min-vh-100 p-5 justify-content-center flex-wrap'>
                    {ProjectCards}
            </Container>
        </MainLayout>
    )
};

export default FrontendPage;