import React, { Component } from 'react';
import ProfExTile from '../components/ProfExTile';

const ProfessionalExperienceContainer = props => {
    return(
      <div className="profex-container small-12 medium-12 large-12 columns">
        <h3>Professional Experience</h3>
        <ProfExTile />
      </div>
    )
}

export default ProfessionalExperienceContainer;
