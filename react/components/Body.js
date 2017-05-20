import React from 'react';
import Home from './Home';
import Connect from './Connect';
import ContactFormContainer from '../containers/ContactFormContainer';

const Body = props => {
  return(
    <div>
      <Home />
      <Connect />
      <ContactFormContainer />
    </div>
  )
}

export default Body;
