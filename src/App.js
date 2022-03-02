import React, { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [sections] = useState([
    {
      name: 'about',
      description: 'A short bio on David:'
    },
    {
      name: 'portfolio',
      description: `David's projects and deployed applications:`
    },
    {
      name: 'resume',
      description: `See David's qualifications:`
    },
    {
      name: 'contact',
      description: 'Get in touch with David regarding his projects or prospective work with this contact form:'
    }
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const renderSection = (currentSection) => {
    switch(currentSection) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />
      case 'resume':
        return <Resume />
      case 'contact':
        return <Contact />
    }
  };

  return (
    <div>
      <Nav
      sections={sections}
      setCurrentSection={setCurrentSection}
      currentSection={currentSection}
      >
      </Nav>
      <main>
        {renderSection(currentSection.name)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
