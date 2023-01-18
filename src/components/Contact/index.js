import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers'

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if(!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
    } else {
        if(!e.target.value) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
    }

    if(!errorMessage) {
        setFormState({ ...formState, [e.target.name]: [e.target.value] })
    }

    // console.log('errorMessage', errorMessage);
  }

  return (
    <section >
      <h1 className='d-flex justify-content-center'>Contact Me</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="John Appleseed" defaultValue={name} onBlur={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" defaultValue={email} onBlur={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Send Me a Note</Form.Label>
            <Form.Control as="textarea" rows={3} defaultValue={message} onBlur={handleChange}/>
          </Form.Group>
          {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}  </p>
            </div>
          )}
          <button className="btn btn-secondary btn-block" 
            data-testid="button" type="submit">Submit
          </button>
        </Form>

    </section>  
  );
}

export default Contact;