import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const ProjectTile = props => {
  return(
    <div className="small-12 medium-6 large-6 columns project-tile">
      <h2>{props.header}</h2>
      <center><div id="icons" className="column row">
        <a href={props.githubLink} target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" id="github-project" /></a>
        <a href={props.siteLink} target="_blank"><img src="https://s3.amazonaws.com/kb-personal-site-production/weblink.png" id="heroku-project" /></a>
        <div id='font-awesome-icon hoverinfo'>
          {props.collabIcon}
            <p>{props.hoverinfo}</p>
        </div>
      </div></center>
      <div className="point-of-reference">
        <div id="project-image">
          <center><img src={`${props.imageLink}`} /></center>
          <div className="rollover">
            <div className="roll-inner">
              <div className="roll-content">
                  <p>{props.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTile;
