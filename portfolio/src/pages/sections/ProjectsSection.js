import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projectsData from './data/projectsData.json'; // Import the JSON file
import '../../assets/styles/aboutpage.css';

const importImage = (imageName) => {
    try {
        return require(`../../assets/images/${imageName}`);
    } catch (error) {
        return null;
    }
};

const downloadPDF = () => {
    fetch(`${process.env.REACT_APP_API_URL}/download`)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Resume Octavio Aleman.pdf';
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error downloading the file.', error));
};

function ProjectsSection() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        // Set the projects data
        setProjects(projectsData);
    }, []);

    return (
            <Col className='projects-section'>
                <Col className='projects-header'>
                    <h1>My <span>Latest </span>Projects</h1>
                    <p>
                        Explore some of my latest projects that highlight my skills and expertise in Artificial Intelligence, Data Science, Web Development, networking and software engineering. Each project demonstrates a different aspect of my capabilities and problem-solving approach.
                    </p>
                </Col>
                <div className='project-cards'>
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
                </div>
                <Col className='resume-button'>
                    <p>
                        Want to know more about my professional background?
                        Download my resume for a detailed overview of my skills, experience, and qualifications.
                    </p>
                    <Button className='contact-button-g' variant="outline-secondary" onClick={downloadPDF}>Download CV</Button>{' '}
                </Col>
            </Col>
    );
}

export default ProjectsSection;
