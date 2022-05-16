import React from 'react';
import david from '../../assets/David.jpg';

function About() {

  return (
    <section>
      <div className="avatar-container">
        <img className="avatar" src={david} alt="David with a puppy" />
      </div>
      <article>Welcome to my professional portfolio. My name is David and I'm glad you're here.
      <br/><br/>
      I have spent most of my adulthood working in emergency medical services as a paramedic, but recently I decided to make a switch into web/software development. I attended a full stack coding boot camp through Michigan State University, learning the MERN stack. The portfolio tab above has links to some of the projects that I have created in the boot camp. Also available here are navigation links for contact info and my resume.
      <br/><br/>
      Take a look around and feel free to contact me with any questions or requests.
      </article>
    </section>
  );
};

export default About;