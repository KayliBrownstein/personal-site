import React from 'react';
import Home from './Home';
import ProjectsContainer from '../containers/ProjectsContainer';
import Resume from './Resume';
import Connect from './Connect';
import ContactFormContainer from '../containers/ContactFormContainer';

const Body = props => {
  return(
    <div>
      <Home />
      <ProjectsContainer />
      <Resume />
      <Connect />
      <ContactFormContainer />
    </div>
  )
}

export default Body;
