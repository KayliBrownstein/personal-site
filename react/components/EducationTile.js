import React from 'react';

const EducationTile = props => {
  return(
    <div className="education-tile small-12 medium-6 large-6 columns">
      <div className="education-left small-12 medium-3 large-3 columns">
        <h4><strong>{props.name}</strong></h4>
        <p><em>{props.study}</em></p>
      </div>
      <div className="education-right small-12 medium-3 large-3 columns">
        <p>{props.location}</p>
        <p>{props.dates}</p>
      </div>
    </div>
  )
}

export default EducationTile;
