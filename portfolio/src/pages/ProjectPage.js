import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import projectsData from './sections/data/projectsData.json'; 
import '../assets/styles/project.css';

const importImage = (imageName) => {
    try {
        return require(`./../assets/images/${imageName}`);
    } catch (error) {
        return null;
    }
};

function ProjectPage() {
    const { projectId } = useParams();
    const project = projectsData.find(p => p.url === `/projects/${projectId}`);

    if (!project) {
        return <p>Project not found.</p>;
    }

    const addBreaks = (text) => {
        // Replace newline characters with <br /> elements
        return text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ));
    };

    return (
        <Container>
            <Row className='project-page'>
                <Col className='project-images'>
                    <Image src={importImage(project.bannerImage)} alt={project.title} fluid />
                    <Image src={importImage(project.image2)} alt={`${project.title} - 2`} fluid />
                    <Image src={importImage(project.image3)} alt={`${project.title} - 3`} fluid />
                    <Image src={importImage(project.image4)} alt={`${project.title} - 4`} fluid />
                </Col>

                <Col className='project-data'>
                    <h1 className='project-title'>{project.title}</h1>

                    <Row className='project-tags'>
                        {(project.tags || []).map((tag, index) => (
                            <h5 key={index} className='project-badge'>
                                <Badge bg='secondary' className='project-tag'>
                                    {tag}
                                </Badge>
                            </h5>
                        ))}
                    </Row>
                    <ul className='project-properties'>
                        <li><h5>
                            Technologies:  
                            <span>
                                {project.technologies.join(', ')}
                            </span>
                        </h5></li>
                        <li><h5>
                            Methodologies:  
                            <span>
                                {project.methodologies.join(', ')}
                            </span>
                        </h5></li>
                        <li><h5>
                            Developed for: <span> {project.user}</span>
                        </h5></li>
                    </ul>
                    <p>{addBreaks(project.fullDescription)}</p>
                    <Row className='project-github'>
                        <a href='https://www.github.com' style={{ '--j': 2 }}>
                            <i className='bx bxl-github'></i>
                        </a>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectPage;
