import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/navbar.css';
import logo from '../assets/images/logo.png';

function NavbarComponent() {
    const location = useLocation();
    console.log('Current location:', location.pathname);

    return (
        <Navbar expand='lg' bg="dark" data-bs-theme="dark" className='navbar'>
            <Container>
                <Navbar.Brand as={NavLink} to='/'>
                    <img
                        alt=''
                        src={logo}
                        className='navbar-logo'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-bar' />
                <Navbar.Collapse id='basic-navbar-bar'>
                    <Nav className="navbar-nav">
                        <Nav.Link 
                            as={NavLink} 
                            to='/' 
                            className='navbar-link' 
                            style={{ '--i': 1 }}>
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={NavLink} 
                            to='/about' 
                            className='navbar-link' 
                            style={{ '--i': 2 }}>
                            About me
                        </Nav.Link>
                        <Nav.Link 
                            as={NavLink} 
                            to='/contact' 
                            className='navbar-link' 
                            style={{ '--i': 3 }}>
                            Contact
                        </Nav.Link>
                    </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
