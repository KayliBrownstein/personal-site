import React from 'react';
import Home from './Home';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';


const ContactTile = props => {
  return(
    <div className="contact-container column">
      <ScrollableAnchor id={'contact-section'}>
        <div className="contact-anchor">
        </div>
      </ScrollableAnchor>
      <center><h1>Contact</h1>
        <button id="fa-up-arrow" onClick={goToTop}>
          <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        </button></center>
      <div id="contact-info">
          <span id="email-info"><i className="fa fa-envelope-o" aria-hidden="true" id="email-icon"></i>kaylivbrownstein@gmail.com</span>
          <span id="location-info"><i className="fa fa-map-marker" aria-hidden="true" id="map-icon"></i>Boston, MA</span>
      </div>
    </div>
  )
}

export default ContactTile;
