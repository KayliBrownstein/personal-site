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
    </div>
  )
}

export default ContactTile;
