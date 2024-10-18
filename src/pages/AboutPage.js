import { AboutSection, 
         SkillsSection, 
         ProjectsSection } from './sections';
import { Container, 
         Row, 
         Col } from 'react-bootstrap';
import '../assets/styles/aboutpage.css';

function AboutPage() {
  return (
    <>
      {/* About Section */}
      <div className='about-section'>
        <AboutSection></AboutSection>
      </div>

      {/* Skills and Education Section */}
      <div className='skills-section'>
      <SkillsSection></SkillsSection>
      </div>

      {/* Projects Section */}
      <div className='projects-section'>
        <ProjectsSection></ProjectsSection>
      </div>

    </>
  );
}

export default AboutPage;