import { AboutSection, SkillsSection } from './sections';
import { Container, Row, Col } from 'react-bootstrap';
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

    </>
  );
}

export default AboutPage;