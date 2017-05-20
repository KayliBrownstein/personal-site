import React from 'react';
import { configureAnchors } from 'react-scrollable-anchor';

const Navbar = props => {
  configureAnchors({ keepLastAnchorHash: true });

  return(
    <div className ="navbar">
      <ul className="links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects-section">Projects</a></li>
        <li><a href="#resume-section">Resume</a></li>
        <li><a href="#connect-section">Connect</a></li>
        <li><a href="#contact-section">Contact</a></li>
      </ul>
      {props.children}
    </div>
  );
}

export default Navbar;
