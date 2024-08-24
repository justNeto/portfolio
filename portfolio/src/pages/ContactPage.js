import { Container, Row, Col, Card } from 'react-bootstrap';
import { FormulaireComponent } from '../components';
import '../assets/styles/contactpage.css'

function ContactPage() {
  const subject = "Contact";
  return (
    <Container className='parent-container'>
      <Row className='contact-page'>
        <Col className='contact-text'>
          <Col className='contact-description'>
            <h1>Let's Get <span>In Touch!</span></h1>
            <p>Your thoughts and feedback are important to me! If you’re interested in collaborating on a project, have a question about my work, or just want to get in touch, I’m eager to hear from you. Please fill out the contact form  with your details and message, and I’ll get back to you as soon as I can. Let’s start a conversation and explore how we might work together!</p>
          </Col>
          <hr className="separator"></hr>
          <Col className='contact-social-media'>
            <h3>Connect with Me</h3>
            <Row className='contact-social-media-buttons'>
              <a href='https://www.linkedin.com' style={{ '--j': 1 }}>
                <i class='bx bxl-linkedin' ></i>
              </a>
              <a href='https://www.github.com' style={{ '--j': 2 }}>
                <i class='bx bxl-github' ></i>
              </a>
              <a href = 'https://www.facebook.com' style = {{'--j': 3}}>
                <i class='bx bxl-facebook' ></i>
              </a>
            </Row>
          </Col>
        </Col>
        <Col className='contact-formulaire'>
            <FormulaireComponent></FormulaireComponent>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;