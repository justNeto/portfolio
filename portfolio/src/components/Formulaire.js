import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const Formulaire = () => {
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', message: '' });
    const [errors, setErrors] = useState({ name: '', surname: '', email: '', phone: '', message: '' });
    const [touched, setTouched] = useState({ name: false, surname: false, email: false, phone: false, message: false });
    const [isValid, setIsValid] = useState(false);

    // Validate form data based on touched fields
    useEffect(() => {
        let tempErrors = {};
        let formIsValid = true;
    
        // Name validation
        if (touched.name) {
            if (formData.name === '') {
                tempErrors.name = 'Name is required';
                formIsValid = false;
            } else if (!/^[a-zA-ZÁáÉéÍíÓóÄäÖöÜüÑñ\s\-]{2,20}$/.test(formData.name)) {
                tempErrors.name = 'Invaid name';
                formIsValid = false;
            }
        }
    
        // Surname validation
        if (touched.surname) {
            if (formData.surname === '') {
                tempErrors.surname = 'Surname is required';
                formIsValid = false;
            } else if (!/^[a-zA-ZÁáÉéÍíÓóÄäÖöÜüÑñ\s\-]{2,20}$/.test(formData.surname)) {
                tempErrors.surname = 'Invalid surname';
                formIsValid = false;
            }
        }
    
        // Phone number validation
        if (touched.phone) {
            if (formData.phone && (!/^\+?\d[\d\s]{7,15}$/.test(formData.phone))) {
                tempErrors.phone = 'Phone number should be at least 8 characters long';
                formIsValid = false;
            }
        }
    
        // Message validation
        if (touched.message) {
            if (formData.message === '') {
                tempErrors.message = 'Message is required';
                formIsValid = false;
            } else if (formData.message.length < 10) {
                tempErrors.message = 'Message must be at least 10 characters long';
                formIsValid = false;
            } else if (formData.message.length > 1500) {
                tempErrors.message = 'Message cannot be longer than 1,500 characters';
                formIsValid = false;
            } else if (!/^[a-zA-Z0-9\s.,!?()@ÁáÉéÍíÓóÄäÖöÜüÑñ-]+$/.test(formData.message)) {
                tempErrors.message = 'Invalid message';
                formIsValid = false;
            }
        }
    
        // Email validation
        if (touched.email) {
            if (formData.email === '') {
                tempErrors.email = 'Email is required';
                formIsValid = false;
            } else if (!/\S+@\S+\.\S{2,30}/.test(formData.email)) {
                tempErrors.email = 'Invalid email address';
                formIsValid = false;
            }
        }
    
        setErrors(tempErrors);
        setIsValid(formIsValid && formData.name !== '' && formData.surname !== '' && formData.message !== '' && formData.email !== '');
    }, [formData, touched]);
    
    
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid) {
            try {
                console.log(`${process.env.REACT_APP_API_URL}/submit`);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    const result = await response.json();
                    alert(`${formData.name}, thank you for contacting me.\nI'll get back to you as soon as possible!`);
                    // You can also reset the form here if needed
                    setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
                    setTouched({ name: false, surname: false, email: false, phone: false, message: false });
                } else {
                    alert('There was a problem submitting the form. Please try again later.');
                    // You can also reset the form here if needed
                    setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
                    setTouched({ name: false, surname: false, email: false, phone: false, message: false });
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('There was a problem submitting the form. Please try again later.');
                // You can also reset the form here if needed
                setFormData({ name: '', surname: '', email: '', phone: '', message: '' });
                setTouched({ name: false, surname: false, email: false, phone: false, message: false });
            }
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle field blur
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
    };

    // Function to get helper text
    const getHelperText = (field) => {
        return touched[field] && errors[field] ? errors[field] : '.';
    };

    return (
        <div className="formulaire">
            <Form onSubmit={handleSubmit}>
                <div className="form-row">
                    <Form.Floating className="mb-3 flex-fill">
                        <Form.Control
                            className='textfield-first'
                            autocomplete="off"
                            type="text"
                            id="floatingName"
                            name="name"
                            placeholder="Name*"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.name}
                        />
                        <label htmlFor="floatingName">Name*</label>
                        <Form.Text className={!!errors.name ? 'text-danger' : 'text-muted'}>
                            {getHelperText('name')}
                        </Form.Text>
                    </Form.Floating>

                    <Form.Floating className="mb-3 flex-fill">
                        <Form.Control
                            className='textfield-first'
                            autocomplete="off"
                            type="text"
                            id="floatingSurname"
                            name="surname"
                            placeholder="Surname*"
                            value={formData.surname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.surname}
                        />
                        <label htmlFor="floatingSurname">Surname*</label>
                        <Form.Text className={!!errors.surname ? 'text-danger' : 'text-muted'}>
                            {getHelperText('surname')}
                        </Form.Text>
                    </Form.Floating>
                </div>
                <div className="form-col">
                    <Form.Floating className="mb-3">
                        <Form.Control
                            autocomplete="off"
                            className='textfield-second'
                            type="email"
                            id="floatingEmail"
                            name="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.email}
                        />
                        <label htmlFor="floatingEmail">Email*</label>
                        <Form.Text className={!!errors.email ? 'text-danger' : 'text-muted'}>
                            {getHelperText('email')}
                        </Form.Text>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                        <Form.Control
                            autocomplete="off"
                            className='textfield-second'
                            type="text"
                            id="floatingPhone"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.phone}
                        />
                        <label htmlFor="floatingPhone">Phone</label>
                        <Form.Text className={!!errors.phone ? 'text-danger' : 'text-muted'}>
                            {getHelperText('phone')}
                        </Form.Text>
                    </Form.Floating>

                    <Form.Floating className="mb-3">
                        <Form.Control
                            autocomplete="off"
                            className='textfield-second'
                            as="textarea"
                            id="floatingMessage"
                            name="message"
                            placeholder="Message*"
                            style={{ height: '100px' }}
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.message}
                        />
                        <label htmlFor="floatingMessage">Message*</label>
                        <Form.Text className={!!errors.message ? 'text-danger' : 'text-muted'}>
                            {getHelperText('message')}
                        </Form.Text>
                    </Form.Floating>
                </div>
                <div className='submit-button'>
                   <Button type="submit" className="btn-primary" disabled={!isValid}>
                        Submit
                    </Button>
                   </div>
            </Form>
        </div>
    );
};

export default Formulaire;
