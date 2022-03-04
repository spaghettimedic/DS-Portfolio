import React from 'react';
import david from '../../assets/David.jpg';

function About() {

  return (
    <section>
      <div className="avatar-container">
        <img className="avatar" src={david} alt="David with a puppy" />
      </div>
      <article className="ps-3 pt-3">&nbsp;&nbsp;&nbsp;&nbsp;Welcome to my professional portfolio. My name is David and I'm glad you're here.
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;I have spent most of my adulthood working in emergency medical services as a paramedic, but recently I decided to make a switch into web development. I attended a full stack coding bootcamp through Michigan State University, learning the MERN stack. The portfolio tab above has links to all the projects that I have created in the bootcamp, as well as some personal projects. Also available here are navigation links for a contact form and my resume.
      <br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;Take a look around and feel free to contact me with any questions or requests.
      </article>
    </section>
  );
};

export default About;