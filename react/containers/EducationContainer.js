import React, { Component } from 'react';
import EducationTile from '../components/EducationTile';

class EducationContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="education-container small-12 medium-12 large-12 columns">
        <h3>Education</h3>
        <EducationTile />
      </div>
    )
  }
}

export default EducationContainer;
