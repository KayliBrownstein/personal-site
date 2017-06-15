import React from 'react';
import Home from './Home';
import ProjectsContainer from '../containers/ProjectsContainer';
import ResumeContainer from '../containers/ResumeContainer';
import ConnectTile from './ConnectTile';
import ContactTile from './ContactTile';
import SwansonContainer from '../containers/SwansonContainer';

const Body = props => {
  return(
    <div>
      <Home />
      <ProjectsContainer />
      <ResumeContainer />
      <ConnectTile />
      <ContactTile />
      <SwansonContainer />
    </div>
  )
}

export default Body;
