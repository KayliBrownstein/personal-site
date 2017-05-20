import React from 'react';
import Home from './Home';
import ScrollableAnchor from 'react-scrollable-anchor';

const ProjectTile = props => {
  return(
    <div className="small-12 large-6 columns">
      <h1><a href={props.siteLink}>{props.header}</a></h1>
      <div id="project-image">
        <img src="props.imageLink" />
      </div>
    </div>
  )
}

export default ProjectTile;
