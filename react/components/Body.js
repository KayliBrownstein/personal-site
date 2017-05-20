import React from 'react';
import Home from './Home';
import Connect from './Connect';
import Resume from './Resume';
import ContactFormContainer from '../containers/ContactFormContainer';

const Body = props => {
  return(
    <div>
      <Home />
      <Resume />
      <Connect />
      <ContactFormContainer />
    </div>
  )
}

export default Body;
