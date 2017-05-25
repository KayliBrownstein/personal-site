import React, { Component } from 'react';
import ProfExTile from '../components/ProfExTile';

class ProfessionalExperienceContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="profex-container small-12 medium-12 large-12 columns">
        <h3>Professional Experience</h3>
        <ProfExTile />
      </div>
    )
  }
}

export default ProfessionalExperienceContainer;
