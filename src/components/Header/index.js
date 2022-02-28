import React from 'react';
import Nav from './components/Nav';

function Header() {


  return (
    <div>
      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Nav>
    </div>
  )
};

export default Header;
