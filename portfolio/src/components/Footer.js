import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../assets/styles/footer.css';

const name = '</> OCTAVIO A.';

function FooterComponent() {
    return(
        <div className='footer'>
           <Row className='top-footer'>
            <Col className = 'navbar-description'>
                    <h3 className = 'footer-title'>{ name }</h3>
                    <p className = 'footer-text'>Innovative Developer Creating Tomorrow's Scalable Technologies Today. My focus is on delivering robust, scalable software that meets the challenges of the digital world. Let's collaborate to bring cutting-edge ideas to life.</p>
                    <Row className='footer-email'><i class='bx bx-envelope'></i><p className = 'footer-text'> contact@octavio-aleman.tech</p></Row>
                </Col>
                <Row className='footer-media'>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Quick Links</h5>
                        <a href = '/' className = 'footer-link'>Home</a>
                        <a href = '/about' className = 'footer-link'>About Me</a>
                        <a href = '/contact' className = 'footer-link'>Contact</a>
                    </Col>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Links</h5>
                        <a className = 'footer-link'>Privacy Policy</a>
                        <a className = 'footer-link'>Terms of Use</a>
                    
                    </Col>
                    <Col className = 'navbar-links'>
                        <h5 className = 'footer-subtitle'>Social Media</h5>
                        <Row className='navbar-socials'>
                            <a href='https://www.linkedin.com/in/augusto-aleman' style={{ '--j': 1 }}>
                                <i class='bx bxl-linkedin' ></i>
                            </a>
                            <a href='https://github.com/AugustoAleman' style={{ '--j': 2 }}>
                                <i class='bx bxl-github' ></i>
                            </a>
                            <a href = 'https://www.facebook.com/octavio.aleman.3557' style = {{'--j': 3}}>
                                <i class='bx bxl-facebook' ></i>
                            </a>
                        </Row>
                    </Col>
                </Row>
           </Row>
           <Row className='bottom-footer'>
            <hr className="separator"></hr>
                <p className = 'footer-text'>Designed and built by Octavio Aleman All Rights Reserved © 2024 | Made with React, Bootstrap and Flask</p>

           </Row>

        </div>
    );
}

export default FooterComponent;