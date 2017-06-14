import React from 'react';
import Home from './Home';
import ProjectsContainer from '../containers/ProjectsContainer';
import ResumeContainer from '../containers/ResumeContainer';
import ConnectTile from './ConnectTile';
import ContactTile from './ContactTile';

const Body = props => {
  return(
    <div>
      <Home />
      <ProjectsContainer />
      <ResumeContainer />
      <ConnectTile />
      <ContactTile />
    </div>
  )
}

export default Body;
