import React from 'react';
import Home from './Home';
import ProjectsContainer from '../containers/ProjectsContainer';
import ResumeContainer from '../containers/ResumeContainer';
import Connect from './Connect';
import ContactTile from './ContactTile';

const Body = props => {
  return(
    <div>
      <Home />
      <ProjectsContainer />
      <ResumeContainer />
      <Connect />
      <ContactTile />
    </div>
  )
}

export default Body;
