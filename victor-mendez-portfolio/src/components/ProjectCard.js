import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard ( {project} ) {
    return (
      <Card style={{width: '40%'}} className='bg-black text-white m-4 text-center '>
        <Card.Img variant="top" src={project.image} className='mt-2'/>
        <Card.Body>
          <Card.Title>{project.name}</Card.Title>
          <Card.Text>
            {project.description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={project.ghLink} target='_blank'>GitHub</Card.Link>
          <Card.Link href={project.depLink} target='_blank'>Deployment</Card.Link>
        </Card.Body>
      </Card>
    );
  }

  export default ProjectCard;