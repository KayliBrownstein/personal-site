import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Home = props => {
  return(
    <div className="home-container small-12 medium-12 large-12 medium-centered large-centered columns">
    	<ScrollableAnchor id={'home'}>
          <div className="home-anchor">
          </div>
        </ScrollableAnchor>
		<div id="color-strip">
			<center><h1>About</h1></center>
		</div>
      	<p>Hi, I am Kayli.</p>
      	<p>Full Stack Developer</p>
    </div>
  )
}

export default Home;
