import React from 'react';

function Resume() {
  return(
    <section>
      <br/>
      <h3><a href="./assets/resumeDavidSteiner.pdf" download>Download a copy of my resume here.</a></h3>
      <br/>
      <article>
        <h3>My proficiencies:</h3>
        <br></br>
        <table>
          <tr>
            <td>&#8226; HTML, CSS, JavaScript</td>
            <td>&#8226; Bootstrap, jQuery, Node.js</td>
            <td>&#8226; Git, GitHub</td>
          </tr>
          <tr>
            <td>&#8226; Express.js, Handlebars.js</td>
            <td>&#8226; RESTful APIs, JSOn data interaction</td>
            <td>&#8226; Heroku, Insomnia</td>
          </tr>
          <tr>
            <td>&#8226; Jest, TDD</td>
            <td>&#8226; OOP, ORM, MVC</td>
            <td>&#8226; PWAs, SPAs, React</td>
          </tr>
          <tr>
            <td>&#8226; SQL, MySQL, Sequelize</td>
            <td>&#8226; NoSQL, MongoDB, Mongoose</td>
            <td>&#8226; GraphQL, Apollo</td>
          </tr>
        </table>
        {/* <ul>
          <h3>Proficiencies:</h3>
          <br/>
          <li>HTML, CSS, JavaScript</li>
          <li>Bootstrap, jQuery, Node.js</li>
          <li>Git, GitHub</li>
          <li>Express.js, Handlebars.js</li>
          <li>Heroku, Insomnia</li>
          <li>RESTful APIs, JSON data interaction</li>
          <li>OOP, ORM, MVC</li>
          <li>Jest, TDD</li>
          <li>SQL, MySQL, Sequelize</li>
          <li>NoSQL, MongoDB, Mongoose</li>
          <li>GraphQL, Apollo</li>
          <li>PWAs and SPAs</li>
        </ul> */}
      </article>
    </section>
  );
};

export default Resume;
