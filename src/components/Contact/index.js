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
    <div>
      <div className="contact-wrapper">
        <h3 className="contact-header">Contact Me</h3>
        <article>If you'd like to inquire about any of my work or potential employment, please email or call me.</article>
        <p>Email: <a href="mailto:dsteiner247@gmail.com">dsteiner247@gmail.com</a></p>
        <p>Phone: (906) 282 - 8330</p>
      </div>
    </div>

    // <div className="contact-wrapper">
    //   <h3>Contact me</h3>
    //   <div className="responsive">
    //     <div id="contact-form" className="row form" onSubmit={handleSubmit}>
    //       <div className="col">
    //         <input type="text" name="name" placeholder="Name" className="form-control" defaultValue={name} onBlur={handleChange} />
    //       </div>
    //       <div className="col">
    //         <input type="email" name="email" placeholder="Email" className="form-control" defaultValue={email} onBlur={handleChange} />
    //       </div>
    //         <textarea rows="5" name="message" placeholder="Type your message here..." defaultValue={message} onBlur={handleChange} />
    //       {errorMessage && (
    //         <div>
    //           <p className="error-text">{errorMessage}</p>
    //         </div>
    //       )}
    //       <button type="submit">Submit</button>
    //     </div>
    //   </div>
    //   <br/><br/><br/>
    // </div>
  )
};

export default Contact;
