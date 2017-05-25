import React from 'react';
import Home from './Home';
import ProjectsContainer from '../containers/ProjectsContainer';
import ResumeContainer from '../containers/ResumeContainer';
import Connect from './Connect';
import ContactFormContainer from '../containers/ContactFormContainer';

const Body = props => {
  return(
    <div>
      <Home />
      <ProjectsContainer />
      <ResumeContainer />
      <Connect />
      <ContactFormContainer />
    </div>
  )
}

export default Body;
