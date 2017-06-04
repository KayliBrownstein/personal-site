import React from 'react';
import { goToAnchor, configureAnchors } from 'react-scrollable-anchor';

const Navbar = props => {
  configureAnchors({ keepLastAnchorHash: true });

  return(
    <div className ="navbar">
      <ul className="links">
        <li onClick={(e) => goToAnchor("home", true)}>Home</li>
        <li onClick={(e) => goToAnchor("projects-section", true)}>Projects</li>
        <li onClick={(e) => goToAnchor("resume-section", true)}>Resume</li>
        <li onClick={(e) => goToAnchor("connect-section", true)}>Connect</li>
        <li onClick={(e) => goToAnchor("contact-section", true)}>Contact</li>
      </ul>
      {props.children}
    </div>
  );
}

export default Navbar;
