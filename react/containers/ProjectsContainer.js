import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectTile from '../components/ProjectTile';
import SYW_screenshot from '../public/SYW_screenshot';

class ProjectsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="project-container small-12 large-10 large-centered columns">
        <ScrollableAnchor id={'projects-section-section'}>
          <div className="projects-anchor">
          </div>
        </ScrollableAnchor>
        <h1>Projects</h1>
          <ProjectTile
            imageLink='public/SYW_screenshot.png'
            id='1'
            siteLink='https://seeyouwhen.herokuapp.com'
            header="SeeYouWhen"
            />
      </div>

    )
  }
}

export default ProjectsContainer;
