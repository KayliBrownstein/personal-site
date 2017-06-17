import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectTile from '../components/ProjectTile';
import { goToTop } from 'react-scrollable-anchor';

class ProjectsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount(){
  fetch("/api/v1/projects")
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({projects: responseData})
      console.log(responseData[0].collabIcon)
    })
  }

  render(){
    let projects = this.state.projects.map((project) => {
      return(
        <ProjectTile
          key={project.id}
          hover={project.hover}
          collabIcon={project.collabIcon}
          imageLink={project.imageLink}
          githubLink={project.githubLink}
          siteLink={project.siteLink}
          header={project.header}
          content={project.content}
        />
      )
    })

    return(
      <div className="row collapse">
        <div className="project-container small-12 medium-12 large-12 columns">
          <ScrollableAnchor id={'projects-section'}>
            <div className="projects-anchor">
            </div>
          </ScrollableAnchor>
          <div id="color-strip">
            <center>
              <h1>Projects</h1>
                <button id="fa-up-arrow" onClick={goToTop}>
                  <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
                </button>
            </center>
          </div>
          {projects}
        </div>
      </div>
    )
  }
}

export default ProjectsContainer;
