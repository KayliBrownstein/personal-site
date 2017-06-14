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
        <center><h1>Resume</h1>
        <button id="fa-up-arrow" onClick={goToTop}>
          <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>
        </button></center>
        <center><a href="KayliBrownsteinResumePersonalSite.pdf" download="KayliBrownsteinResumePersonalSite.pdf"><i className="fa fa-download" aria-hidden="true" id="download-icon"></i>Download</a></center>
        <hr />
        <TechnicalSkillsContainer />
        <hr />
        <ProfessionalExperienceContainer />
        <hr />
        <EducationContainer />
      </div>
    )
  }
}

export default ResumeContainer;
