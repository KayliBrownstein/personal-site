import React from 'react';

const EducationTile = props => {
  return(
    <div className="education-tile small-12 medium-6 large-6 columns">
      <div className="education-left small-12 medium-6 large-6 columns">
        <h5><strong>{props.name}</strong></h5>
        <p><em>{props.study}</em></p>
      </div>
      <div className="education-right small-12 medium-6 large-6 columns">
        <p>{props.location}</p>
        <p>{props.dates}</p>
      </div>
    </div>
  )
}

export default EducationTile;
