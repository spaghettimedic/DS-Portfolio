import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'Password Generator',
      src: 'passwordGenerator',
      href: 'https://spaghettimedic.github.io/passwordGenerator/',
      github: 'https://www.github.com/spaghettimedic/passwordGenerator',
      alt: 'A simple application for generating random passwords.'
    },
    {
      name: 'Code Quiz',
      src: 'codingQuiz',
      href: 'https://spaghettimedic.github.io/codingQuiz/',
      github: 'https://www.github.com/spaghettimedic/codingQuiz',
      alt: 'A short quiz on basic coding concepts made with javascript.'
    },
    {
      name: 'Workday Scheduler',
      src: 'workDayScheduler',
      href: 'https://spaghettimedic.github.io/workDayScheduler/',
      github: 'https://www.github.com/spaghettimedic/workDayScheduler',
      alt: 'An organizational application for managing your work day by the hour.'
    },
    {
      name: 'Weather Dashboard',
      src: 'weatherDashboard',
      href: 'https://spaghettimedic.github.io/weatherDashboard/',
      github: 'https://www.github.com/spaghettimedic/weatherDashboard',
      alt: 'A weather forecasting application that utilizes third-party API technology.'
    },
    {
      name: 'BarFly',
      src: 'barfly',
      href: 'https://spaghettimedic.github.io/Project1-BarFly/',
      github: 'https://www.github.com/spaghettimedic/Project1-BarFly',
      alt: 'A simple search engine to find bars/restaurants in a given city via third party API technology.'
    },
    {
      name: 'README Generator',
      src: 'READMEGenerator',
      href: 'https://github.com/spaghettimedic/READMEgenerator',
      github: 'https://www.github.com/spaghettimedic/READMEGenerator',
      alt: 'A command line application that generates a README.md file based on user input.'
    },
    {
      name: 'Team Profile Generator',
      src: 'teamProfileGenerator',
      href: 'https://www.github.com/spaghettimedic/teamProfileGenerator',
      github: 'https://www.github.com/spaghettimedic/teamProfileGenerator',
      alt: 'A command line application that generates a styled HTML page to showcase your team based on user input.'
    },
    {
      name: 'Note Taker',
      src: 'noteTaker',
      href: 'https://spaghettimedic-note-taker.herokuapp.com/notes',
      github: 'https://www.github.com/spaghettimedic/noteTaker',
      alt: 'A note-taking application with persistent data.'
    },
    {
      name: 'Employee Tracker',
      src: 'employeeTracker',
      href: 'https://www.github.com/spaghettimedic/employeeTracker',
      github: 'https://www.github.com/spaghettimedic/employeeTracker',
      alt: 'A command line application for organizing employees in a database.'
    },
    {
      name: 'E-commerce backend',
      src: 'eCommerce',
      href: 'https://www.github.com/spaghettimedic/e-commerce-backend',
      github: 'https://www.github.com/spaghettimedic/e-commerce-backend',
      alt: 'Server and database files for a fictional e-commerce website.'
    },
    {
      name: 'The Tech Blog',
      src: 'techBlog',
      href: 'https://spaghettimedic-the-tech-blog.herokuapp.com/',
      github: 'https://www.github.com/spaghettimedic/didactic-chainsaw',
      alt: 'A blog website to talk about tech.'
    },
    {
      name: 'Sit + Stay',
      src: 'sitStay',
      href: 'https://sit-stay-project-2.herokuapp.com/',
      github: 'https://www.github.com/spaghettimedic/fuzzy-octo-doodle',
      alt: 'A blog-style website to connect pet owners with pet sitters.'
    },
    {
      name: 'Regex Tutorial',
      src: 'regex',
      href: 'https://gist.github.com/spaghettimedic/4db137c75fb958eb42272fc2dd5f5eeb',
      github: 'https://gist.github.com/spaghettimedic/4db137c75fb958eb42272fc2dd5f5eeb',
      alt: 'A Github gist describing regular expressions.'
    },
    {
      name: 'thinkr',
      src: 'thinkr',
      href: 'https://www.github.com/spaghettimedic/thinkr',
      github: 'https://www.github.com/spaghettimedic/thinkr',
      alt: 'An API for a mock social media website for posting thoughts and reactions.'
    },
    {
      name: 'Budget Tracker',
      src: 'budgetTracker',
      href: 'https://spaghettimedic-budget-tracker.herokuapp.com/',
      github: 'https://www.github.com/spaghettimedic/budgetTracker',
      alt: 'A visual representation of money spent and earned with persistent data.'
    },
    {
      name: 'Couch Tomatoes',
      src: 'couchTomatoes',
      href: 'https://couch-tomatoes.herokuapp.com/',
      github: 'https://github.com/johnsiefert/Couch-Tomatoes',
      alt: 'Social media meets Rotten Tomatoes!'
    }
  ]);

  return (
    <div className="project-container">
      <div className="flex-row justify-content-center">
        {projects.map(project => (
          <div className="project">
            <a href={project.href} target="_blank">
              <img 
                src={require(`../../assets/${project.src}.png`)}
                alt={project.alt}
                className="project-img mx-1"
                key={project.name}
              />
              <p>{project.name}</p>
            </a>
            <a href={project.github} target="_blank">Github Repo</a>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Project;
