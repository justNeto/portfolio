import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projectsData from './data/projectsData.json'; // Import the JSON file

const importImage = (imageName) => {
    try {
        return require(`../../assets/images/${imageName}`);
    } catch (error) {
        return null;
    }
};

function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Set the projects data
        setProjects(projectsData);
    }, []);

    return (
        <Container>
            <Col className='projects-section'>
                <Row className='projects-header'>
                    <h1>My <span>Latest </span>Projects</h1>
                    <p>
                        Explore some of my latest projects that highlight my skills and expertise in web development, AI, and data science. Each project demonstrates a different aspect of my capabilities and problem-solving approach.
                    </p>
                </Row>
                <Row className='project-cards'>
                    {projects.map((project, index) => (
                        <div key={index} className='project-card'
                            style={{
                                backgroundImage: `url(${importImage(project.bannerImage)})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className='project-card-body'>
                                <div className='project-card-header'>
                                    <h3 className='project-card-title'>
                                        {project.title}
                                    </h3>
                                    <p className='project-card-text'>
                                        {project.shortDescription}
                                    </p>
                                    <Button className='project-button' variant="outline-secondary" href={project.url}>See More</Button>{' '}
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>
                <Row className='resume-button'>
                    <p>
                        Want to know more about my professional background?
                        Download my resume for a detailed overview of my skills, experience, and qualifications.
                    </p>
                    <Button className='contact-button-g' variant="outline-secondary">Download CV</Button>{' '}
                </Row>
            </Col>
        </Container>
    );
}

export default ProjectsSection;
