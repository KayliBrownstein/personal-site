import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Resume = props => {
  return(
    <div className="resume-container">
      <ScrollableAnchor id={'resume-section'}>
        <div className="resume-anchor">
        </div>
      </ScrollableAnchor>
      <h1>Resume</h1>
      <center><iframe src="KayliBrownsteinResumePersonalSite.pdf" id="resume-pdf"/></center>
    </div>
  )
}

export default Resume;
