import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/homepage.css';
import profile_picture from '../assets/images/profile_picture.png';
import { useEffect, useRef } from 'react';

function HomePage() {
  const typedElementRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    const scriptId = 'typed-js-script';
    const existingScript = document.getElementById(scriptId);

    const initializeTyped = () => {
      if (typedElementRef.current && window.Typed) {
        // Destroy existing instance if it exists
        if (typedInstanceRef.current) {
          typedInstanceRef.current.destroy();
        }

        typedInstanceRef.current = new window.Typed(typedElementRef.current, {
          strings: [
            'Software Engineer',
            'AI Specialist',
            'Data Science Specialist',
            'Data Analytics Specialist'
          ],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        });
      } else {
        console.error('Typed.js is not available.');
      }
    };

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js";
      script.id = scriptId;
      script.onload = initializeTyped;
      script.onerror = () => console.error('Failed to load Typed.js script.');
      document.body.appendChild(script);
    } else {
      initializeTyped();
    }

    return () => {
      // Cleanup any existing Typed instances if component unmounts
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <Container>
      <Row className='home-page'>
        <Col className='profile-info'>
          <Col className='profile-info-text'>
            <h3>Hello, It's me</h3>
            <h1>Octavio Aleman</h1>
            <h3>And I'm a <span ref={typedElementRef} className='multiple-text'></span></h3>
            <p>Software Development and Computer Technologies Specialist with solid experience in creating efficient and scalable technological solutions. Passionate about developing innovative projects that drive digital transformation in various industries.</p>
            <Row className='contact-buttons'>
              <Button className='contact-button-l' variant="outline-secondary" size='sm'>Contact</Button>{' '}
              <Button className='contact-button-g' variant="outline-secondary">Download CV</Button>{' '}
            </Row>
          </Col>
          <Col className='social-media'>
            <Row className='social-media-row'>
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
        <Col xs={5} className='profile-pic'>
          <div className='picture'>
            <img src={profile_picture} alt='Profile Picture'></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
