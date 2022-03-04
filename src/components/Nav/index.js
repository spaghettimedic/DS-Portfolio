import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    sections = [],
    setCurrentSection,
    currentSection
  } = props;
  
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentSection.name);
  }, [currentSection]);

  return (
    <header className="flex-row justify-content-between">
      <h2>
        <a href="/portfolio/">
          David Steiner
        </a>
      </h2>
      <nav className="navbar">
        <ul className="flex-row">
          {sections.map((section) => (
            <li className={`mx-auto my-auto px-2 ${currentSection.name === section.name && 'navActive'}`} key={section.name}>
              <span onClick={() => { setCurrentSection(section); }}>
                {capitalizeFirstLetter(section.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;