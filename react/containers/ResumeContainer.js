import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import TechnicalSkillsContainer from './TechnicalSkillsContainer';
import ProfessionalExperienceContainer from './ProfessionalExperienceContainer';
import EducationContainer from './EducationContainer';
import { goToTop } from 'react-scrollable-anchor';

class ResumeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="resume-container small-12 medium-12 large-12 columns">
        <ScrollableAnchor id={'resume-section'}>
          <div className="resume-anchor">
          </div>
        </ScrollableAnchor>
        <center><h3>Resume</h3>
        <button onClick={goToTop}>
          <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button></center>
        <TechnicalSkillsContainer />
        <ProfessionalExperienceContainer />
        <EducationContainer />
      </div>
    )
  }
}

export default ResumeContainer;
