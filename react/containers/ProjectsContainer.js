import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectTile from '../components/ProjectTile';

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
          <ProjectTile
            imageLink='public/Appful_screenshot.png'
            id='2'
            siteLink='https://appful.herokuapp.com'
            header="Appful"
            />
      </div>

    )
  }
}

export default ProjectsContainer;
