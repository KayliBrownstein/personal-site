import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import ProjectTile from '../components/ProjectTile';
import { goToTop } from 'react-scrollable-anchor';

class ProjectsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="project-container small-12 medium-12 large-12 columns">
        <ScrollableAnchor id={'projects-section'}>
          <div className="projects-anchor">
          </div>
        </ScrollableAnchor>
          <center>
            <h1>Projects</h1>
              <button id="fa-up-arrow" onClick={goToTop}>
                <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
              </button>
          </center>
          <ProjectTile
            hover='Solo contributor'
            collabIcon={<i className="fa fa-user" aria-hidden="true"></i>}
            imageLink='https://s3.amazonaws.com/kb-personal-site-production/syw_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/event-planner-voting'
            id='1'
            siteLink='https://seeyouwhen.herokuapp.com'
            header="SeeYouWhen"
            content="
              Allows groups to easily plan events by providing a platform for voting on suggestions;

              React frontend and Rails backend;

              Google Maps API for directions and location information;

              ActionMailer and SendGrid for emails;

              Carrierwave and Amazon S3 for profile photos;

              optimized for mobile;

              rolled user authentication utilizing bcrypt for password security.
              "
          />
          <ProjectTile
            hover='Multiple contributors'
            collabIcon={<i className="fa fa-users" aria-hidden="true"></i>}
            imageLink='https://s3.amazonaws.com/kb-personal-site-production/appful_screenshot.png'
            githubLink='https://github.com/emlanctot/appful'
            id='2'
            siteLink='https://appful.herokuapp.com'
            header="Appful"
            content="
              Built collaboratively with three peer developers;

              Allows amateur developers to get constructive feedback on their deployed apps by way of user reviews focused on design, concept, and usability;

              React frontend and Rails backend;

              Devise for user authentication;

              Carrierwave for profile photos.
              "
          />
          <ProjectTile
            hover='Solo contributor'
            collabIcon={<i className="fa fa-user" aria-hidden="true"></i>}
            imageLink='https://s3.amazonaws.com/kb-personal-site-production/gif_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/giphy-search'
            id='3'
            siteLink='http://gif-search-app.herokuapp.com'
            header="GIF Search"
            content="
              Prompts user for a search term, and returns 24 GIF results matching that term;

              React frontend and operates on a Sinatra server;

              GIPHY API for GIF results.
            "
          />
          <ProjectTile
            hover='Multiple contributors'
            collabIcon={<i className="fa fa-users" aria-hidden="true"></i>}
            imageLink='https://s3.amazonaws.com/kb-personal-site-production/farmalarm_screenshot.png'
            githubLink='https://github.com/KayliBrownstein/farmers-market-search'
            id='4'
            siteLink='http://farmalarm.herokuapp.com'
            header="Farm Alarm"
            content="
              Built collaboratively with one peer developer during a hackathon;

              Prompts user for their zip code, and returns details for the closest farmers’ markets;

              React frontend and operates on a Sinatra server;

              USDA's Farmers' Market API for listings and location information.
            "
          />
      </div>
    )
  }
}

export default ProjectsContainer;
