import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ProjectTile = props => {
  return(
    <div className="small-12 large-6 columns project-tile">
      <h2>{props.header}</h2>
      <center><div id="icons">
        <a href={props.githubLink} target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" id="github-project" /></a>
        <a href={props.siteLink} target="_blank"><img src="http://www.iconsdb.com/icons/preview/icon-sets/web-2-blue/link-xxl.png" id="heroku-project" /></a>
      </div></center>
      <div id="project-image">
        <center><img src="props.imageLink" /></center>
      </div>
    </div>
  )
}

export default ProjectTile;
