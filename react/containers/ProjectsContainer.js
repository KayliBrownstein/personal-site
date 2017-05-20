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
      <div className="project-container small-12 large-12 columns">
        <ScrollableAnchor id={'projects-section'}>
          <div className="projects-anchor">
          </div>
        </ScrollableAnchor>
        <h1>Projects</h1>
          <ProjectTile
            imageLink='public/SYW_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/event-planner-voting'
            id='1'
            siteLink='https://seeyouwhen.herokuapp.com'
            header="SeeYouWhen"
          />
          <ProjectTile
            imageLink='public/Appful_screenshot.png'
            githubLink='https://github.com/emlanctot/appful'
            id='2'
            siteLink='https://appful.herokuapp.com'
            header="Appful"
          />
          <ProjectTile
            imageLink='public/gifSearch_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/giphy-search'
            id='3'
            siteLink='http://gif-search-app.herokuapp.com'
            header="GIF Search"
          />
          <ProjectTile
            imageLink='public/farmalarm_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/farmers-market-search'
            id='4'
            siteLink='http://farmalarm.herokuapp.com'
            header="Farm Alarm"
          />
      </div>
    )
  }
}

export default ProjectsContainer;
