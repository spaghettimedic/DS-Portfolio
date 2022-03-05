import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState ] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {

      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage.length) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
  };

  return (
    <section>
      <h3>Contact me</h3>
      <div className="responsive">
        <div id="contact-form" className="row form" onSubmit={handleSubmit}>
          <div className="col">
            <input type="text" name="name" placeholder="Name" className="form-control" defaultValue={name} onBlur={handleChange} />
          </div>
          <div className="col">
            <input type="email" name="email" placeholder="Email" className="form-control" defaultValue={email} onBlur={handleChange} />
          </div>
            <textarea rows="5" name="message" placeholder="Type your message here..." defaultValue={message} onBlur={handleChange} />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </div>
      </div>
      <br/><br/><br/>
    </section>
  )
};

export default Contact;
