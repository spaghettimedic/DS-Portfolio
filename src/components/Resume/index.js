import React from 'react';

function Resume() {
  return(
    <section>
      <br/>
      <h3><a href="/assets/Resume.pdf" download>Download a copy of my resume here.</a></h3>
      <br/>
      <article>
        <ul>
          <h3>Proficiencies:</h3>
          <br/>
          <li>HTML & CSS: BootStrap, Handlebars</li>
          <li>JavaScript & jQuery, Node</li>
          <li>Git, GitHub, Heroku</li>
          <li>APIs: web, third-party, and server-side</li>
          <li>RESTful APIs, Express</li>
          <li>OOP, ORM, TDD, MVC</li>
          <li>SQL, Sequelize, Insomnia</li>
          <li>NoSQL, GraphQl, MongoDB, Mongoose</li>
          <li>PWAs and SPAs</li>
        </ul>
      </article>
    </section>
  );
};

export default Resume;
