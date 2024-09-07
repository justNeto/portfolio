import React from 'react';
import { Button } from 'react-bootstrap';
import '../assets/styles/notfound.css';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h1 className='not-found-title'>Oops!</h1>
        <h5 className='not-found-subtitle'>404 - PAGE NOT FOUND</h5>
        <p className='not-found-text'>The page you are looking for might have been removed, had its name changed or might be temporarily unavailable.</p>
        <Button className='button-not-found' variant="outline-secondary" size='sm' href = '/'>Home Page</Button>{' '}
    </div>
  );
};

export default NotFound;