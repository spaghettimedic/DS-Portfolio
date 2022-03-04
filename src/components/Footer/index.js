import React from 'react';
import linkedInLogo from '../../assets/linkedin.png';
import gitHubLogo from '../../assets/github.png';
import twitterLogo from '../../assets/twitter.png';

function Footer() {
  return (
    <footer className="flex-row">
      <div className="logos">
        <a  className="logo" href="https://twitter.com/dsteiner247" target="_blank"><img className="logo" src={twitterLogo} alt="Twitter Logo" /></a>
        <a  className="logo" href="https://www.linkedin.com/in/spaghettimedic/" target="_blank"><img className="logo" src={linkedInLogo} alt="LinkedIn Logo" /></a>
        <a  className="logo" href="https://www.github.com/spaghettimedic/" target="_blank"><img className="logo" src={gitHubLogo} alt="GitHub Logo Logo" /></a>
      </div>
    </footer>
  );
};

export default Footer;
