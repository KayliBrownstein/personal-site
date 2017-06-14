import React from 'react';
import Home from './Home';
import ScrollableAnchor from 'react-scrollable-anchor';
import { goToTop } from 'react-scrollable-anchor';


const Connect = props => {
  return(
    <div className="connect-container column">
      <ScrollableAnchor id={'connect-section'}>
        <div className="connect-anchor">
        </div>
      </ScrollableAnchor>
      <center><h1>Connect</h1>
        <button id="fa-up-arrow" onClick={goToTop}>
          <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        </button></center>
      <div id="connect-icons">
        <a href="https://github.com/kaylibrownstein" target="_blank"><img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" id="github-connect-image" className="small-12 medium-5 large-5 columns"/></a>
        <a href="https://linkedin.com/in/kaylibrownstein" target="_blank"><img src="http://www.logoeps.com/wp-content/uploads/2014/07/linkedin-icon-vector.png" id="linkedin-connect-image" className="small-12 medium-5 large-5 columns"/></a>
      </div>
    </div>
  )
}

export default Connect;
