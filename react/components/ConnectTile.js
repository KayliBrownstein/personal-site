import React from 'react';
import Home from './Home';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';


const ConnectTile = props => {
  return(
    <div className="row collapse">
      <div className="connect-container column">
        <ScrollableAnchor id={'connect-section'}>
          <div className="connect-anchor">
          </div>
        </ScrollableAnchor>
        <div id="color-strip">
        <center><h1>Connect</h1>
          <button id="fa-up-arrow" onClick={goToTop}>
            <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
          </button></center>
        </div>
        <div id="connect-icons">
          <a href="https://github.com/kaylibrownstein" target="_blank"><img src="http://www.demetrisgourtzilidis.com/wp-content/uploads/2015/12/github-logo.png" id="github-connect-image" className="small-12 medium-5 large-5 columns"/></a>
          <a href="https://linkedin.com/in/kaylibrownstein" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/2000px-Linkedin_icon.svg.png" id="linkedin-connect-image" className="small-12 medium-5 large-5 columns"/></a>
        </div>
      </div>
    </div>
  )
}

export default ConnectTile;
