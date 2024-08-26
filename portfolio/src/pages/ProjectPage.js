import React from 'react';
import { Container, Row, Col, Button, Image, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import projectsData from './sections/data/projectsData.json'; 
import Carousel from 'react-bootstrap/Carousel';
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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

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
                    <Carousel activeIndex={index} onSelect={handleSelect} className='project-carousel'>
                        <Carousel.Item>
                            <img src=  {importImage(project.bannerImage)} />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img src=  {importImage(project.image2)} />
                        </Carousel.Item>
                    </Carousel>
                    <Row className='project-github'>
                        <a href={project.github} style={{ '--j': 2 }}>
                            <i class='bx bxl-github' ></i>
                        </a>
                    </Row>
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
                            Technologies:&nbsp;&nbsp; &nbsp;   
                            <span>
                                {project.technologies.join(', ')}
                            </span>
                        </h5></li>
                        <li><h5>
                            Methodologies:&nbsp;&nbsp;&nbsp;    
                            <span>
                                {project.methodologies.join(', ')}
                            </span>
                        </h5></li>
                        <li><h5>
                            Developed for:&nbsp;&nbsp;&nbsp;   
                            <span> {project.user}</span>
                        </h5></li>
                    </ul>
                    <p>{addBreaks(project.fullDescription)}</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectPage;
